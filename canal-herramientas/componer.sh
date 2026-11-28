#!/usr/bin/env bash
# Uso: ./componer.sh tu-camara.mp4 [subtitulos.srt] [salida.mp4]
# Pone la grabación de la app (arriba) y TU cámara (abajo) en un vídeo vertical 720x1280,
# con subtítulos grandes en la línea del medio, igual que el clip de referencia.
set -e
CAM="$1"; SRT="${2:-guion-subtitulos.srt}"; OUT="${3:-short-final.mp4}"
APP="$(dirname "$0")/pantalla-app.mp4"
ffmpeg -y -i "$APP" -i "$CAM" -filter_complex \
"[1:v]scale=720:640:force_original_aspect_ratio=increase,crop=720:640[b];\
[0:v][b]vstack=inputs=2[v];\
[v]subtitles=$SRT:force_style='Alignment=2,MarginV=140,Fontname=DejaVu Sans,Bold=1,FontSize=20,Outline=3,PrimaryColour=&HFFFFFF&'[o]" \
-map "[o]" -map 1:a? -c:v libx264 -crf 20 -pix_fmt yuv420p -c:a aac -shortest "$OUT"
