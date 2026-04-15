# Briefing para Ruleta Menorca

## Objetivo

Landing standalone para campañas de ruleta de Menorca Collection usando Vite, Vanilla JS, Tailwind CSS v4 y GSAP.

- Sin dependencias de WordPress
- Una ruta por campaña: `/fiestas-patrias`, `/navidad`, etc.
- El formulario envia leads a Sperant
- Se capturan UTMs desde la URL

## Estructura base

```txt
ruletas-menorca/
├── public/
│   └── sounds/
│       └── sonido-ruleta-menorca.mp3
├── src/
│   ├── api/
│   │   └── lead.js
│   ├── assets/
│   │   └── styles/
│   │       └── main.css
│   ├── components/
│   │   └── modal.js
│   ├── features/
│   │   ├── layout/
│   │   │   └── applyCampaignContent.js
│   │   ├── lead-form/
│   │   │   └── initLeadForm.js
│   │   └── roulette/
│   │       ├── initRoulette.js
│   │       └── RouletteWheel.js
│   └── lib/
│       └── utm.js
├── templates/
│   └── campaign/
│       ├── config.js
│       ├── index.html
│       └── main.js
├── fiestas-patrias/
│   ├── config.js
│   ├── index.html
│   └── main.js
├── index.html
├── vite.config.mjs
├── vercel.json
└── package.json
```

## Convencion de carpetas

- `src/api`: llamadas HTTP y payloads
- `src/assets`: estilos y recursos compartidos
- `src/components`: piezas reutilizables transversales
- `src/features`: logica agrupada por feature
- `src/lib`: utilidades pequenas y helpers
- `templates`: base para duplicar nuevas campañas sin exponer esa carpeta en la URL final

## Flujo funcional

1. El usuario entra a una campaña.
2. `main.js` carga `config.js` y aplica contenido dinamico.
3. La ruleta gira con GSAP.
4. Se selecciona un premio del array `config.premios`.
5. Se abre el modal de premio.
6. El usuario completa plaza, nombre, DNI, celular y email.
7. Se hace `POST` a `https://apirest.menorca.services/web/crearlead_ruleta`.
8. Se abre el modal de gracias.

## URLs

- En local y produccion la campaña debe vivir como `/<slug>/`
- Ejemplo: `/fiestas-patrias/`
- No se expone `campaigns` en la ruta publica

## Configuracion por campaña

Lo unico que debe cambiar por campaña es principalmente `config.js`.

- Titulo y descripcion
- Heading y subheading
- Vigencia
- Imagenes
- `utmSource`
- Premios
- Plazas

## Build

`vite.config.mjs` define cada campaña como un entry point independiente.

Cuando se agregue una nueva campaña:

1. Duplicar `templates/campaign` a `./[slug]`
2. Editar `config.js`
3. Registrar la nueva entrada en `vite.config.mjs`
4. Agregar el rewrite correspondiente en `vercel.json`

## Notas

- El unico CSS compartido vive en `src/assets/styles/main.css`
- El audio real de ruleta debe colocarse en `public/sounds/`
- Si se agregan nuevos bloques visuales, deben vivir dentro de `src/features`
