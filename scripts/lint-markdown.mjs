import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scanDirs = ['src/content/docs'];
const explicitFiles = ['README.md', 'CONTRIBUTING.md', 'EVALUACION_PROYECTO.md', 'PLAN_MEJORA_INTEGRAL.md'];
const ignoreStarts = ['node_modules', 'dist', '.git'];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full);
    if (ignoreStarts.some((p) => rel === p || rel.startsWith(`${p}${path.sep}`))) continue;
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) files.push(full);
  }
  return files;
}

const files = [...new Set([
  ...scanDirs.flatMap((d) => walk(path.join(root, d))),
  ...explicitFiles.map((f) => path.join(root, f)).filter((f) => fs.existsSync(f)),
])];
const issues = [];

for (const file of files) {
  const rel = path.relative(root, file);
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  // Rule 1: no trailing whitespace
  lines.forEach((line, idx) => {
    if (/\s+$/.test(line)) {
      issues.push(`${rel}:${idx + 1} trailing whitespace`);
    }
  });

  // Rule 2: headings increment by max 1 level
  let prevLevel = 0;
  lines.forEach((line, idx) => {
    const m = line.match(/^(#{1,6})\s+\S+/);
    if (!m) return;
    const level = m[1].length;
    if (prevLevel && level > prevLevel + 1) {
      issues.push(`${rel}:${idx + 1} heading jumps from H${prevLevel} to H${level}`);
    }
    prevLevel = level;
  });

  // Rule 3: for level pages ensure required sections exist
  if (rel.startsWith(`src/content/docs${path.sep}`) && rel.endsWith(`${path.sep}index.mdx`) && /nivel-/.test(rel)) {
    const required = [
      '## Objetivos de la Fase',
      '## Temas Principales',
      '## Criterios de salida',
      '## Autoevaluación rápida',
      '## Práctica Obligatoria',
      '## Recursos',
    ];
    for (const section of required) {
      if (!content.includes(section)) {
        issues.push(`${rel}: missing required section "${section}"`);
      }
    }
  }
}

if (issues.length) {
  console.error('Markdown lint found issues:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Markdown lint passed (${files.length} files).`);
