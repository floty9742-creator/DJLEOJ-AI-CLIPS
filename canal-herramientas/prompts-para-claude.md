# Los prompts del clip de referencia

## Lo que realmente se ve en el clip (lo leí fotograma a fotograma)
- La conversación está en la app de Claude con la guía publicada como artefacto: "Mi taladro [marca] · Publicado" y la opción "Install as app".
- **Único prompt del usuario que se ve completo, textual:** `Crea un equipo de gente para eso.`
- Lo que responde Claude: lanza **varios agentes en paralelo** y cada uno se encarga de una parte. Se leen estos:
  - "El taladro: rehecho a partir de fotos reales del taladro, a escala" (con el selector de velocidad como dice el manual).
  - "Tu sala": reproducida con sus muebles reales (techo, ventana, puerta, router, interruptor, mesa).
  - "Manual de la estantería": cómo fijarla a la pared (tornillos, medidas, avisos).
  - "Dónde ponerla": cerca del router, dejando espacio por donde pasan los cables.
  - "Pared: hueco y materiales realistas" (la animación del hueco).
  - **"Crítico: revisión de principiante"**: un agente "con ojos frescos" que revisa todo como si fuera principiante.
  - Y una frase clave: "Cada uno trabaja en su parte... para que cada uno tenga su zona sin pisarse."
- El resultado: una guía con 5 pestañas (El taladro / Hacer un hueco / Según la pared / La estantería / Mi kit) con el taladro en 3D que giras con el dedo y números que explican cada parte.

## Lo que NO se ve
El primer prompt (el que pide la app desde cero, con las fotos del taladro) no sale en pantalla. Por eso lo siguiente es una **reconstrucción mía**, no un texto copiado.

## Prompt 1 (reconstruido) — crear la app
Adjunta 3-4 fotos de tu herramienta (de frente, de lado, la batería y el selector) y pega:

> Con las fotos adjuntas de mi [taladro / martillo / sierra], crea una guía interactiva en una sola página web (artefacto). Debe tener un modelo 3D de la herramienta, a escala, que pueda girar con el dedo, con números sobre cada parte; al tocar un número, un panel explica qué hace esa parte con lenguaje de principiante. Añade pestañas: "La herramienta", "Cómo usarla paso a paso" y "Según el material" (madera, ladrillo, concreto, drywall) con qué modo, velocidad y accesorio usar. Incluye avisos de seguridad en rojo (gafas, cables y tuberías detrás de la pared). Diseño oscuro, acentos amarillos, texto corto. Publícalo para que pueda instalarlo como app.

## Prompt 2 (textual del clip) — el equipo
> Crea un equipo de gente para eso.

Variante más completa, para que funcione con cualquier herramienta:

> Crea un equipo de agentes para mejorar esto. Cada agente trabaja en una parte distinta sin pisarse: uno rehace la herramienta en 3D a partir de las fotos, otro escribe los pasos de uso, otro hace la animación del material, y al final un agente "crítico" con ojos frescos lo revisa todo como si fuera principiante y me dice qué no se entiende. Cuando terminen, une todo en una sola guía y publícala.

## Ideas para el vídeo (como en el original)
1. Muestra la app terminada (gancho).
2. Enseña el chat con el prompt corto "Crea un equipo de gente para eso." y los agentes trabajando.
3. Vuelve a la app y recorre las partes.
