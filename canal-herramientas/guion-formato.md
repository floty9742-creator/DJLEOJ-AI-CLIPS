# Formato del clip analizado y plantilla para tu canal

## Cómo está hecho el clip de referencia (96 s, vertical 720x1280)
1. **Gancho (0-5 s):** pantalla de la app 3D interactiva (taladro amarillo con puntos numerados) + etiqueta roja arriba: "X me está enseñando a usar el taladro".
2. **Alternancia:** presentador a cámara (selfie, fondo luminoso con planta, gestos con las manos) en bloques de ~5-12 s, y grabación de pantalla de la app 3D (tema oscuro, panel lateral "TU TALADRO, PARTE POR PARTE", simulación "UN HUECO CON CHAZO / ANTES DE EMPEZAR", comparación según la pared).
3. **Subtítulos palabra por palabra** (blanco, negrita, contorno negro) en la parte baja, durante todo el vídeo.
4. **Ritmo:** corte cada pocos segundos; nunca más de ~12 s con la misma imagen.
5. **Mensaje:** "la IA construye una app interactiva que te enseña a usar una herramienta".

## Plantilla para cada herramienta (Short de ~40 s)
- 0-3 s: gancho en pregunta ("¿Sabes usar un taladro de verdad?") + etiqueta roja.
- 3-30 s: 5 partes de la herramienta, una por bloque (~5 s), con punto numerado, nombre y una frase útil.
- 30-34 s: seguridad (cables, tuberías, gafas).
- 34-38 s: llamada a la acción.
- Para el vídeo largo de YouTube: mismo formato, pero alterna con tu cara a cámara y añade una demostración real.

## Qué grabar tú a cámara (para el formato igual al original)
- Gancho: "Le pedí a una IA que me enseñara a usar un taladro... y mira lo que construyó."
- Entre partes: tu reacción o consejo propio, 5-10 s cada una.
- Cierre: "Dime qué herramienta quieres que explique la próxima."

## Versión pantalla dividida (igual que el clip de referencia)
El clip original es una pantalla dividida 720x1280: **arriba** la app (3D a la izquierda, panel a la derecha), **abajo** el presentador, y los subtítulos grandes en la línea del medio.
- `short-taladro-pantalla-dividida.mp4`: ejemplo completo (abajo hay un marcador "TU CÁMARA AQUÍ").
- `pantalla-app.mp4`: solo la mitad de arriba (720x640), sin subtítulos, para componer.
- `guion-subtitulos.srt`: texto y tiempos de ejemplo. Cámbialo por lo que digas tú.
- `componer.sh tu-camara.mp4`: pone tu cámara abajo y los subtítulos en el medio.

## Modelo 3D reutilizable
- `modelo-taladro.js`: el taladro 3D (módulo `buildDrill()`): carcasa amarilla, collar estriado, anillo plateado, mandril, broca helicoidal, mango de goma nervado, gatillo, botón de giro, luz LED y batería "20V 2Ah". Devuelve las partes y los puntos de anclaje (hotspots) para los números.
- `ver-taladro.html`: visor para mirarlo solo (necesita servir la carpeta, p. ej. `python3 -m http.server`).
- `app-taladro-3d.html`: la app completa (pestañas, panel, chat).
Para otra herramienta (martillo, sierra...) se crea un módulo igual, `modelo-martillo.js`, con la misma iluminación y materiales.
