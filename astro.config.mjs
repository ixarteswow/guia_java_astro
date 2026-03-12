// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Java Deep Mastery Roadmap 2025',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/guia-java-astro/guia_java_astro' }], // Placeholder
      sidebar: [
          {
              label: 'Nivel 0: Preparación',
              autogenerate: { directory: '00-nivel-zero' },
          },
          {
              label: 'Nivel 1: Fundamentos',
              autogenerate: { directory: '01-nivel-uno' },
          },
          {
              label: 'Nivel 2: POO',
              autogenerate: { directory: '02-nivel-dos' },
          },
          {
              label: 'Nivel 3: Core Avanzado',
              autogenerate: { directory: '03-nivel-tres' },
          },
          {
              label: 'Nivel 4: Java Moderno',
              autogenerate: { directory: '04-nivel-cuatro' },
          },
          {
              label: 'Nivel 5: Ecosistema',
              autogenerate: { directory: '05-nivel-cinco' },
          },
          {
              label: 'Fase 5: Tracks',
              autogenerate: { directory: '06-tracks' },
          },
          {
              label: 'Changelog Pedagógico',
              link: '/changelog-pedagogico/',
          },
          {
              label: 'Métricas de Adopción',
              link: '/metricas-adopcion/',
          },
      ],
      customCss: [
        // Path to your custom CSS file
        './src/styles/custom.css',
      ],
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});