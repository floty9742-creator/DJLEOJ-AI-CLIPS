# Invitaciones de Boda IA 💍

Aplicación web para diseñar invitaciones de matrimonio y generar **prompts de gráficos** para IAs de imágenes (Midjourney, Stable Diffusion, DALL·E / ChatGPT y otras).

No requiere instalación: abre `index.html` en el navegador.

## Funciones

- **Datos del evento:** nombres, frase de introducción, fecha, hora, ceremonia, recepción, vestimenta, mensaje y confirmación de asistencia (RSVP).
- **6 estilos:** Clásico, Floral, Rústico, Minimal, Playa y Art déco, con decoraciones dibujadas automáticamente.
- **Elementos gráficos:** rosas, peonías, eucalipto, girasoles, lavanda, anillos, palmeras y geometría.
- **3 formatos:** tarjeta 5×7 (1500×2100 px), cuadrado para Instagram (1080×1080) e historia 9:16 para WhatsApp/IG (1080×1920).
- **Colores personalizables:** color principal y color de acento.
- **Generador de prompts** adaptado a cada herramienta:
  - Midjourney (con `--ar`, `--style raw` y `--no`)
  - Stable Diffusion (prompt positivo, prompt negativo y tamaño sugerido)
  - DALL·E / ChatGPT (instrucción en lenguaje natural)
  - Español (genérico)
- **Fondo con IA:** sube la imagen que generaste y el texto se coloca encima, con un velo opcional para que se lea bien.
- **Exportar:** descarga en PNG, imprime o guarda como PDF.
- **Proyectos:** guarda y abre proyectos en `.json`. El último diseño se recuerda en el navegador.

## Flujo recomendado

1. Llena los datos y elige estilo, elemento, formato y colores.
2. Copia el prompt de la pestaña de tu IA y genera la imagen.
3. Sube la imagen en **Fondo generado por IA**.
4. Descarga el PNG o imprímelo.

> Los prompts piden la imagen **sin texto**, porque las IAs suelen escribir letras deformes. Esta app agrega el texto con tipografías reales.
