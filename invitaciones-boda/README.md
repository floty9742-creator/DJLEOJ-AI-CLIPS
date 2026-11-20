# Invitaciones de Boda IA 💍

Aplicación web para diseñar invitaciones de matrimonio y generar **prompts de gráficos** para IAs de imágenes (Midjourney, Stable Diffusion, DALL·E / ChatGPT y otras).

No requiere instalación: abre `index.html` en el navegador.

## Funciones

- **Datos del evento:** nombres, frase de introducción, fecha, hora, ceremonia, recepción, vestimenta, mensaje y confirmación de asistencia (RSVP).
- **💬 Asistente de diseño (chat):** escribe en español lo que deseas y la invitación y el prompt se actualizan solos. Entiende:
  - nombres, fecha, hora, ceremonia, recepción, vestimenta, mensaje y teléfono de confirmación
    (“Nos llamamos Ana y Luis, la boda es el 5 de mayo de 2027 a las 4 pm”);
  - estilo, colores, elemento, formato y ajustes (“estilo playa con azul marino y dorado”, “más elegante y sin tantos adornos”, “para WhatsApp”);
  - ideas libres, que se agregan al prompt y se traducen al inglés (“flores blancas con hojas verdes colgantes y luces” → *white flowers with green leaves hanging and lights*);
  - comandos como “otra variación” o “dame el prompt para ChatGPT”.
- **18 estilos** con decoraciones dibujadas automáticamente, inspirados en las tendencias más populares de invitaciones de boda:
  Clásico, Floral, Rústico, Minimal, Playa, Art déco, Botánico, Boho, Acuarela, Mármol y oro, Celestial, Mediterráneo (limones),
  Talavera, Otoño, Invierno, Vintage (encaje), Religioso y Editorial (moderno).
- **Elementos gráficos:** rosas, peonías, eucalipto, girasoles, lavanda, anillos, palmeras y geometría.
- **3 formatos:** tarjeta 5×7 (1500×2100 px), cuadrado para Instagram (1080×1080) e historia 9:16 para WhatsApp/IG (1080×1920).
- **Colores personalizables:** color principal y color de acento.
- **Generador de prompts** adaptado a cada herramienta:
  - Midjourney (con `--ar`, `--style raw` y `--no`)
  - Stable Diffusion (prompt positivo, prompt negativo y tamaño sugerido)
  - DALL·E / ChatGPT (instrucción en lenguaje natural)
  - Español (genérico)
- **Foto de ejemplo (inspiración):** sube una imagen que te guste. La app saca su paleta de colores y su ambiente (claro, oscuro, pastel, vivo…), te deja aplicar esos colores con un clic y agrega la referencia al prompt: `--sref` en Midjourney, img2img o IP-Adapter en Stable Diffusion, y la imagen adjunta en DALL·E / ChatGPT.
- **Foto de los novios:** se coloca en la invitación con marco de círculo, arco o rectángulo.
- **Describe lo que quieres:** escribe con tus palabras lo que imaginas y se agrega al prompt.
- **Ajustes rápidos:** más elegante, más colorido, más suave, más flores, menos adornos, más luminoso, acuarela, fotorrealista, detalles dorados, vintage.
- **Otra variación:** cambia la luz y la composición del prompt para obtener nuevas propuestas hasta que quedes satisfecho.
- **Fondo con IA:** sube la imagen que generaste y el texto se coloca encima, con un velo opcional para que se lea bien.
- **Exportar:** descarga en PNG, imprime o guarda como PDF.
- **Proyectos:** guarda y abre proyectos en `.json`. El último diseño se recuerda en el navegador.

## Flujo recomendado

1. Llena los datos y elige estilo, elemento, formato y colores.
2. (Opcional) Sube una foto de ejemplo y pulsa **Usar estos colores**. Sube también la foto de los novios.
3. Describe lo que quieres y marca los ajustes rápidos.
4. Copia el prompt de la pestaña de tu IA y genera la imagen.
5. Si el resultado no te convence, pulsa **Otra variación** o cambia los ajustes y vuelve a generar.
6. Sube la imagen en **Fondo generado por IA**.
7. Descarga el PNG o imprímelo.

> Los prompts piden la imagen **sin texto**, porque las IAs suelen escribir letras deformes. Esta app agrega el texto con tipografías reales.
