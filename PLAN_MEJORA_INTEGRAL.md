# Plan en profundidad para mejorar el proyecto

## 1) Objetivo del plan

Convertir **Java Deep Mastery 2025** de una buena guía estática en un **programa formativo robusto**, medible y mantenible, mejorando:

- Calidad pedagógica.
- Profundidad técnica por nivel.
- Experiencia del estudiante.
- Calidad editorial/técnica del sitio.
- Capacidad de evolución del contenido.

---

## 2) Diagnóstico resumido de puntos a mejorar

A partir de la evaluación previa, los principales frentes son:

1. Profundidad desigual (especialmente niveles avanzados).
2. Falta de evaluación del aprendizaje (criterios de salida, autoevaluación, rúbricas).
3. Ausencia de pipeline de calidad de contenido (checks automáticos y CI).
4. Trazabilidad de progreso del alumno limitada.
5. Placeholders de branding y recursos externos.
6. Accesibilidad mejorable de componentes visuales (gráficos).
7. Falta de rutas de especialización y planeación temporal.

---

## 3) Principios de ejecución

1. **Pedagogía primero, tooling segundo**.
2. **Cambios incrementales con entregables quincenales**.
3. **Todo objetivo debe ser medible** (KPI).
4. **No romper flujo actual**: mantener estructura por niveles y mejorar sobre ella.
5. **Automatizar calidad editorial** para escalar con bajo costo de mantenimiento.

---

## 4) Roadmap de implementación (16 semanas)

## Fase 0 (Semana 1): Alineación y baseline

### Entregables
- Definición de alcance v1.1 del roadmap.
- Métricas base (estado actual).
- Backlog priorizado (Must/Should/Could).

### Tareas
- Crear matriz por nivel: objetivos actuales, gaps, recursos faltantes.
- Definir indicadores de éxito iniciales.
- Auditar enlaces, placeholders y consistencia de tono.

### KPI de salida
- 100% de niveles con diagnóstico documentado.
- Lista priorizada de 30–50 tareas de mejora.

---

## Fase 1 (Semanas 2–4): Calidad pedagógica mínima viable

### Objetivo
Incorporar estructura de evaluación y progresión para que el alumno sepa cuándo avanza de forma objetiva.

### Entregables
- Criterios de salida por nivel (competencias observables).
- Checklist de dominio por nivel.
- Autoevaluación (10–15 preguntas) por nivel.
- Rúbrica para retos/proyectos principales.

### Tareas detalladas
1. Añadir sección `## Criterios de salida` en cada `index.mdx` de nivel.
2. Añadir sección `## Autoevaluación` por nivel:
   - 70% conceptual.
   - 30% aplicado.
3. Añadir sección `## Rúbrica del proyecto` (N2, N3, N5 prioritarios).
4. Normalizar dificultad de ejercicios: Básico / Intermedio / Avanzado.

### KPI
- 6/6 niveles con criterios de salida.
- 6/6 niveles con autoevaluación publicada.
- 3 niveles críticos con rúbrica completa.

---

## Fase 2 (Semanas 5–7): Profundidad técnica de niveles avanzados

### Objetivo
Elevar N3, N4 y N5 con casos reales, ejercicios progresivos y soluciones de referencia.

### Entregables
- 2 estudios de caso por nivel avanzado.
- 1 mini-proyecto guiado por nivel avanzado.
- Sección “errores comunes” por nivel avanzado.

### Tareas
- **Nivel 3**: excepciones, collections y complejidad con ejemplos comparativos.
- **Nivel 4**: refactorizaciones reales a Streams/Lambdas + cuándo NO usar streams.
- **Nivel 5**: flujo profesional end-to-end (Maven/Gradle + pruebas + gitflow básico).
- Añadir “solución esperada” y “señales de buena solución” en retos.

### KPI
- +30% de contenido práctico en N3/N4/N5.
- 0 temas avanzados sin ejemplo aplicado.

---

## Fase 3 (Semanas 8–10): Calidad técnica y editorial automatizada

### Objetivo
Asegurar consistencia y prevenir regresiones de contenido con checks automáticos.

### Entregables
- Flujo de CI (build + validaciones de markdown/enlaces).
- Guía editorial (`CONTRIBUTING.md` + estilo de contenido).
- Checklist de PR para cambios en docs.

### Tareas
1. Agregar validaciones automáticas:
   - build del sitio.
   - lint de markdown.
   - chequeo de enlaces internos/externos.
2. Definir reglas editoriales:
   - tono, formato de secciones, verbos de objetivos.
   - cómo redactar ejercicios y soluciones.
3. Añadir plantilla de PR para cambios de contenido.

### KPI
- CI ejecutándose en 100% de PR.
- Reducción >80% de enlaces rotos.
- Tiempo de revisión editorial menor en 30%.

---

## Fase 4 (Semanas 11–13): UX de aprendizaje y accesibilidad

### Objetivo
Mejorar la experiencia de estudio y la accesibilidad del contenido.

### Entregables
- Mejoras de accesibilidad en componentes (`PhaseChart`, bloques interactivos).
- Indicadores visuales de progreso por nivel.
- Índice de tiempo estimado por módulo.

### Tareas
- Añadir textos alternativos y descripciones para gráficos.
- Revisar contraste y legibilidad de callouts y badges.
- Incorporar “tiempo sugerido” por sección.
- Añadir navegación de “siguiente paso recomendado”.

### KPI
- 100% de gráficos con explicación textual equivalente.
- Navegación más clara (menor rebote en páginas de nivel).

---

## Fase 5 (Semanas 14–16): Producto y escalabilidad

### Objetivo
Pasar de roadmap lineal a rutas por perfil y preparar crecimiento.

### Entregables
- Rutas de especialización (Backend, Entrevistas, Enterprise).
- Plan post-N5 (Spring Boot / SQL / Integración).
- Dashboard simple de métricas de adopción (si aplica analítica).

### Tareas
- Crear guías “track-based” reutilizando contenido base.
- Definir prerequisitos y outcomes por track.
- Publicar changelog pedagógico (qué cambió y por qué).

### KPI
- 3 tracks publicados.
- Retención mayor entre N3 y N5.

---

## 5) Plan por área (acciones concretas)

## A. Currículo y pedagogía

### Acciones
- Estandarizar plantilla de nivel:
  1. Objetivos.
  2. Criterios de salida.
  3. Temas.
  4. Práctica (B/I/A).
  5. Autoevaluación.
  6. Proyecto + rúbrica.
  7. Errores comunes.

### Métrica
- Cumplimiento de plantilla en 100% de niveles.

## B. Contenido técnico

### Acciones
- Aumentar ejemplos “del mundo real”.
- Publicar soluciones de referencia resumidas.
- Añadir tablas comparativas (p. ej. estructuras de datos, complejidades, trade-offs).

### Métrica
- Al menos 3 ejemplos prácticos por tema crítico.

## C. Plataforma y calidad

### Acciones
- CI con build + validaciones.
- Convenciones para componentes y MDX.
- Deuda técnica y de contenido en tablero único.

### Métrica
- Build estable y PRs con checklist completo.

## D. Marca y confianza

### Acciones
- Reemplazar placeholders (`tu-usuario/java-roadmap`).
- Homologar naming del proyecto, enlaces y descripción.

### Métrica
- 0 placeholders en producción.

## E. Accesibilidad y UX

### Acciones
- Textos equivalentes para visualizaciones.
- Revisar jerarquía de encabezados y legibilidad en mobile.

### Métrica
- 0 componentes visuales sin alternativa textual.

---

## 6) Modelo operativo

## Roles sugeridos
- **Lead de contenido**: define objetivos y revisa calidad pedagógica.
- **Editor técnico Java**: valida exactitud y profundidad.
- **Maintainer docs**: estructura MDX, links, build y CI.
- **Reviewer UX/Accesibilidad**: coherencia visual y lectura.

## Cadencia
- Sprint quincenal.
- Demo de avances cada 2 semanas.
- Revisión curricular mensual.

## Definición de “Done” para cada mejora
- Criterio pedagógico cumplido.
- Contenido validado técnicamente.
- Build y checks en verde.
- Sin enlaces rotos.
- Aprobación editorial.

---

## 7) Riesgos y mitigación

1. **Sobrecarga de alcance**
   - Mitigación: MoSCoW estricto y releases incrementales.

2. **Inconsistencia entre autores**
   - Mitigación: guía editorial + plantilla fija + checklist PR.

3. **Falta de tiempo para contenido profundo**
   - Mitigación: priorizar N3–N5 y reutilizar formato de casos.

4. **Regresiones de calidad**
   - Mitigación: CI obligatoria para merge.

---

## 8) Backlog inicial priorizado (Top 20)

### Must
1. Criterios de salida N0–N5.
2. Autoevaluaciones N0–N5.
3. Rúbricas de proyecto N2/N3/N5.
4. Sustitución de enlaces/placeholders de marca.
5. Sección “errores comunes” N3–N5.
6. CI con build obligatorio.
7. Chequeo de enlaces.
8. Guía editorial y plantilla por nivel.
9. Checklist PR para docs.
10. Descripción textual de `PhaseChart`.

### Should
11. Estimación temporal por nivel.
12. Ruta post-N5 (Spring/SQL).
13. Ejercicios graduados B/I/A en todos los niveles.
14. Mini-proyecto guiado por N3/N4/N5.
15. FAQ de dudas frecuentes por nivel.

### Could
16. Tracks por perfil.
17. Modo “entrevistas Java”.
18. Métricas de adopción.
19. Traducción EN/ES completa.
20. Banco de preguntas ampliado.

---

## 9) Resultado esperado al final del plan

Al completar este plan, el proyecto debería evolucionar a:

- Guía curricular medible y accionable.
- Mejor experiencia de aprendizaje con progresión clara.
- Contenido avanzado más útil para contexto laboral real.
- Plataforma editorial confiable y mantenible en el tiempo.
- Base lista para crecer hacia tracks de especialización.
