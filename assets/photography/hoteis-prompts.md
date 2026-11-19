# Imágenes y audio de /pt/hoteis

La página ya está publicada sin ellas. Cada archivo aparece solo en cuanto
existe en la ruta indicada y se hace deploy, sin tocar código:

| Archivo | Dónde sale | Si falta |
|---|---|---|
| `web/public/images/hoteis/como-chamada.webp` | Como funciona, paso 01 | la tarjeta va sin foto |
| `web/public/images/hoteis/como-atende.webp` | Como funciona, paso 02 | la tarjeta va sin foto |
| `web/public/images/hoteis/como-painel.webp` | Como funciona, paso 03 | la tarjeta va sin foto |
| `web/public/images/hoteis/como-resumo.webp` | Como funciona, paso 04 | la tarjeta va sin foto |
| `web/public/images/hoteis/rececao.webp` | Banner ancho | no sale el banner |
| `web/public/images/hoteis/para-hotel.webp` | Para quem: Hotéis | no sale la sección (necesita las 4) |
| `web/public/images/hoteis/para-local.webp` | Para quem: Alojamento local | ídem |
| `web/public/images/hoteis/para-rural.webp` | Para quem: Turismo rural | ídem |
| `web/public/images/hoteis/para-hostel.webp` | Para quem: Hostels | ídem |
| `web/public/audio/telma-hotel-pt.mp3` y `telma-hotel-en.mp3` | Bloque "Oiça a Telma" | ya están |

Las 4 de "Como funciona" salen juntas o ninguna: con tres fotos y una tarjeta
vacía la fila parece rota. Hechas las cuatro (originales en
`assets/photography/hoteis/`, fuera de git).

## Estilo común (pegar delante de cada prompt)

> Fotografía editorial realista, luz natural cálida y suave, tonos neutros
> (madera clara, piedra, lino, blanco roto), poca profundidad de campo, aspecto
> de revista de diseño de interiores. Ambientado en Portugal. Sin texto legible,
> sin logotipos, sin marcas. Personas naturales, nada de pose de stock. Formato
> horizontal 3:2, 1536x1024.

Es el mismo estilo que las fotos de clínica actuales (`how-call`, `reception-desk`).

## Como funciona (4 fotos, 3:2, se recortan a 4:3)

**como-chamada** · El huésped llama
Primer plano de una mano sujetando un móvil con una llamada saliente en
pantalla, sobre una maleta o la mesa de un aeropuerto/estación, con un
pasaporte y una tarjeta de embarque al lado. Fondo desenfocado de viaje. En la
pantalla, solo un icono de cama o de edificio y la palabra "Hotel", sin nombre.

**como-atende** · Telma atiende
Recepción de un hotel boutique de noche, sin nadie detrás del mostrador. Un
teléfono fijo sobre el mostrador de piedra con la luz de línea encendida, una
lámpara de mesa cálida, un campanilla de recepción y un llavero de habitación.
Sensación de calma, no de abandono.

**como-painel** · Queda el pedido registrado
Por encima del hombro de una recepcionista sentada ante un monitor en el
mostrador. En pantalla, una interfaz limpia y clara tipo lista con filas y una
fila resaltada en verde suave (un pedido nuevo). Texto ilegible/borroso. Al
fondo desenfocado, el lobby del hotel con luz de mañana.

**como-resumo** · La recepción llama de vuelta
Recepcionista sonriente hablando por teléfono mientras mira una tablet o un
papel con notas sobre el mostrador; luz de mañana, una taza de café. Transmite
"todo bajo control".

## Banner (rececao, panorámica)

**rececao** · Formato 21:9, 2400x1030 (o 3:2 con el sujeto en el centro, se recorta a lo ancho)
Recepción de un hotel con encanto en Lisboa u Oporto, luz de tarde. Una
recepcionista atiende a una pareja de huéspedes con maletas en el mostrador
(check-in), entregándoles una llave. El teléfono del mostrador está a la vista.
Personas en el centro del encuadre: el texto blanco va encima con un velo
oscuro, así que la parte central-superior debe ser fondo tranquilo (pared,
lámparas), sin detalles fuertes.

## Para quem (4 fotos, 3:2, se recortan a retrato 4:5)

Importante: el sujeto en el **centro** del encuadre, porque la tarjeta solo
enseña la mitad central de la foto.

**para-hotel** · Hotéis
Lobby de un hotel urbano pequeño y elegante, mostrador de recepción al centro,
sillón y plantas, luz de mañana entrando por una ventana alta.

**para-local** · Alojamento local
Entrada de un apartamento turístico en un edificio antiguo de Lisboa: puerta de
madera abierta, azulejos en la escalera, una caja de llaves y una maleta junto
a la puerta.

**para-rural** · Turismo rural
Casa de piedra rehabilitada en el campo (Alentejo o Douro), terraza con mesa de
desayuno puesta, viñedos u olivos al fondo, luz dorada.

**para-hostel** · Hostels e guest houses
Zona común de un hostel con estilo: mostrador de madera, tablón con mapas,
mochilas, sofá, ambiente joven y luminoso, sin gente o con una persona de
espaldas.

## Pasar a webp

Guardar el PNG original en `assets/photography/` y exportar:

    python -c "from PIL import Image; import sys; \
      Image.open(sys.argv[1]).convert('RGB').save(sys.argv[2],'WEBP',quality=82,method=6)" \
      assets/photography/NOMBRE.png web/public/images/hoteis/NOMBRE.webp

## Audio de demo (hecho)

`web/public/audio/telma-hotel-pt.mp3` y `web/public/audio/telma-hotel-en.mp3`,
generados con ElevenLabs `eleven_v4_turbo` y los mismos ajustes que el agente
(estabilidad 0.7, similitud 0.75, velocidad 1.06). Telma es Benedita en los dos,
también cuando habla inglés. Hotel inventado: Hotel Azulino. En las dos llamadas
Telma cancela una reserva, hace otra y da información (desayuno, aparcamiento,
llegada tarde). Si falta uno de los dos archivos, la página muestra solo el otro.

Nivelar cualquier audio nuevo igual que los demás:

    ffmpeg -i <src> -af loudnorm=I=-16:TP=-1.5:LRA=11 \
           -ac 1 -ar 24000 -codec:a libmp3lame -b:a 48k <out>
