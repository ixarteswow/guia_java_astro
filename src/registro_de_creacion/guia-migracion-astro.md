# Guía de Creación y Migración: De HTML Estático a Astro Starlight

Este documento detalla el proceso técnico y lógico seguido para transformar un archivo HTML monolítico en un sitio de documentación moderno y escalable. Creado como referencia para futuros proyectos.

## 1. Análisis y Decisión
### El problema original
*   Un archivo `index.html` único de +600 líneas.
*   Contenido (datos del roadmap) mezclado con lógica de presentación (JavaScript) y estilos (Tailwind).
*   Difícil de escalar: Agregar un nuevo nivel implicaba editar JSON gigante.
*   Poca accesibilidad SEO.

### La solución: Stack JAMstack
Elegimos **Astro** con el tema **Starlight** por:
1.  **Enfoque en Contenido**: Permite escribir en Markdown/MDX, separando datos de código.
2.  **Rendimiento**: Genera HTML estático puro (0 KB JS por defecto para contenido).
3.  **Componentes**: Permite incrustar componentes interactivos (React) dentro del contenido estático.

---

## 2. Iniciar el Proyecto (Paso a Paso)

### 2.1. Creación del Scaffold
Usamos el generador oficial de Astro con la plantilla Starlight.
```bash
npm create astro@latest ./roadmap-course -- --template starlight
```
*   *Opciones seleccionadas*: TypeScript (Strict), Install Dependencies.

### 2.2. Integración de Herramientas
Instalamos las integraciones necesarias para replicar el diseño y funcionalidad originales.

**Tailwind CSS (Estilos):**
```bash
npx astro add tailwind
```
*   *Razón*: Reutilizar las clases utilitarias del diseño original (colores Slate/Orange).

**React (Interactividad):**
```bash
npx astro add react
```
*   *Razón*: Para portar el gráfico de Chart.js y permitir componentes complejos futuros.

**Chart.js (Gráficos):**
```bash
npm install chart.js react-chartjs-2
```
*   *Razón*: Librería de gráficos estándar usada en el original.

---

## 3. Arquitectura del Proyecto

### 3.1. Configuración de Starlight (`astro.config.mjs`)
Definimos la barra lateral (Sidebar) para que se autogenere basada en carpetas, creando una estructura de "Curso".

```javascript
sidebar: [
    { label: 'Nivel 0: Preparación', autogenerate: { directory: '00-nivel-zero' } },
    // ... otros niveles
]
```

### 3.2. Migración de Contenido (MDX)
El paso más importante: "Hidratar" el contenido estático.
*   **Fuente**: Objeto `roadmapData` del HTML original.
*   **Destino**: Archivos `index.mdx` en `src/content/docs/`.

**Formato MDX utilizado:**
```markdown
---
title: Título del Nivel
description: Descripción breve
---
import Componente from '../../components/Componente.jsx';

# Contenido Markdown normal...

<Componente client:only="react" />
```

### 3.3. Creación de Componentes
Para no repetir código HTML, extrajimos patrones visuales:

1.  **`PhaseChart.jsx`**:
    *   Componente React que encapsula la lógica de Chart.js.
    *   **Desafío**: Chart.js necesita el objeto `window`, que no existe al generar el sitio estático (SSR).
    *   **Solución**: Usar la directiva `client:only="react"` al importarlo en el MDX. Esto le dice a Astro: "No renderices esto en el servidor, espera al navegador".

2.  **`PracticeItem.astro`**:
    *   Componente de servidor puro (HTML + CSS).
    *   Recibe `type` y `text` como props para renderizar las cajas de colores (Reto, Proyecto, etc.).

---

## 4. Estilizado y Tema
Para mantener la identidad visual "Java Orange":

1.  Creamos `src/styles/custom.css`.
2.  Sobrescribimos variables CSS de Starlight:
    ```css
    :root {
      --sl-color-accent: #f97316; /* Tailwind orange-500 */
    }
    ```
3.  Lo inyectamos en `astro.config.mjs` bajo `customCss`.

---

## 5. Resumen de Comandos Útiles

| Acción | Comando |
| :--- | :--- |
| **Iniciar servidor dev** | `npm run dev` |
| **Construir para producción** | `npm run build` |
| **Previsualizar build** | `npm run preview` |
| **Verificar errores** | `npx astro check` |

---

## 6. Siguientes Pasos Recomendados
Para escalar este proyecto en el futuro:
1.  **Componentes de Quiz**: Crear un `<Quiz />` en React para validar conocimiento al final de cada nivel.
2.  **Progreso del Usuario**: Usar `localStorage` para guardar qué lecciones se han completado.
3.  **Búsqueda Avanzada**: Starlight ya incluye PageFind, pero se puede configurar para indexar bloques de código.
