import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsDir = path.join(root, 'src/content/docs');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) files.push(full);
  }
}

walk(docsDir);

const markdownLinkRe = /\[[^\]]+\]\(([^)]+)\)/g;
const internalIssues = [];
const externalUrls = new Set();

for (const file of files) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(markdownLinkRe)) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith('#') || raw.startsWith('mailto:')) continue;
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      externalUrls.add(raw);
      continue;
    }
    if (raw.startsWith('/')) continue; // site routes handled by Astro
    if (raw.startsWith('tel:')) continue;

    const target = raw.split('#')[0];
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      internalIssues.push(`${rel} -> ${raw}`);
    }
  }
}

if (internalIssues.length) {
  console.error('Broken internal markdown links:');
  for (const issue of internalIssues) console.error(`- ${issue}`);
  process.exit(1);
}

const strictExternal = process.env.STRICT_EXTERNAL_LINKS === 'true';
const failures = [];
for (const url of externalUrls) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal });
    clearTimeout(timeout);
    if (!(res.status >= 200 && res.status < 400) && res.status !== 405) {
      failures.push(`${url} -> HTTP ${res.status}`);
    }
  } catch (err) {
    failures.push(`${url} -> ${err.name || 'RequestError'}`);
  }
}

if (failures.length) {
  const title = strictExternal ? 'External link check failed:' : 'External link check warnings:';
  console.error(title);
  for (const item of failures) console.error(`- ${item}`);
  if (strictExternal) process.exit(1);
}

console.log(`Link check passed (${files.length} files, ${externalUrls.size} external URLs).`);
