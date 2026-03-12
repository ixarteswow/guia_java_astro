# Guía de contribución

Gracias por contribuir a **Java Deep Mastery 2025**.

## Flujo recomendado

1. Crea una rama descriptiva.
2. Realiza cambios pequeños y enfocados.
3. Ejecuta validación local:
   - `npm run lint:markdown`
   - `npm run check:links`
   - `npm run build`
4. Abre Pull Request con contexto pedagógico y técnico.

## Estándar para páginas de nivel (`src/content/docs/**/index.mdx`)

Cada nivel debe incluir, como mínimo:

1. **Objetivos de la fase**.
2. **Temas principales**.
3. **Criterios de salida** (qué debe demostrar el estudiante).
4. **Autoevaluación rápida** (preguntas conceptuales y aplicadas).
5. **Práctica obligatoria**.
6. **Recursos**.
7. **Consejo de asimilación**.

## Calidad de contenido

- Priorizar ejemplos aplicados y lenguaje claro.
- Evitar placeholders de enlaces en contenido público.
- Mantener consistencia de tono (directo, práctico y orientado a competencias).

## Estilo editorial (obligatorio)

- Usa verbos observables en objetivos y criterios: *explicar, implementar, comparar, refactorizar*.
- Evita promesas vagas como "entender bien" sin evidencia medible.
- En ejercicios, define: contexto, entrada/salida esperada y criterio mínimo de aprobación.
- En soluciones guiadas, incluye trade-offs y errores comunes.
- Mantén secciones con títulos estables para facilitar revisiones y comparaciones entre niveles.

## Checklist de PR

- [ ] El contenido mantiene coherencia con la progresión N0→N5.
- [ ] Se añadieron/actualizaron criterios de salida y autoevaluación cuando aplica.
- [ ] Todos los enlaces nuevos funcionan.
- [ ] `npm run lint:markdown` ejecuta correctamente.
- [ ] `npm run check:links` ejecuta correctamente.
- [ ] `npm run build` ejecuta correctamente.
