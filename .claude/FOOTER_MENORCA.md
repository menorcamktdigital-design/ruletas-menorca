# Footer Menorca — Código completo para reutilizar

> Copia este footer tal cual en cualquier proyecto. Incluye HTML, CSS puro (sin SCSS), y las fuentes de iconos necesarias.

---

## 1. FUENTES NECESARIAS

El footer usa 2 fuentes:

### A) Eudoxus Sans (tipografía base)
```html
<!-- En el <head> de tu HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Eudoxus+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
> Si no está en Google Fonts, puedes sustituir por **Inter** o **DM Sans** que son muy similares.

### B) Icomoon (iconos de redes sociales)
Los iconos de Facebook, Instagram, TikTok y LinkedIn usan una **fuente TTF personalizada** (`icomoon.ttf`) del theme.  
Tienes 2 opciones:

**Opción 1 — Copiar la fuente del theme (recomendado para mantener el mismo diseño):**
- Copia el archivo: `wp-content/themes/menorca_theme/public/fonts/icomoon.ttf`
- Ponlo en tu proyecto en: `fonts/icomoon.ttf`
- El CSS de la fuente ya está incluido en la sección CSS de abajo.

**Opción 2 — Reemplazar con Font Awesome (si no tienes la fuente):**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```
Y cambiar los `<span>` de redes sociales por:
```html
<i class="fab fa-facebook-f"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-tiktok"></i>
<i class="fab fa-linkedin-in"></i>
```

---

## 2. HTML DEL FOOTER

```html
<!-- ========================================
     BOTÓN FLOTANTE WHATSAPP
     ======================================== -->
<a href="https://api.whatsapp.com/send?phone=51922055462&text=Hola👋%2C%20vi%20esto%20en%20la%20web%2C%20quiero%20más%20información%20de%20los%20proyectos%20de%20Menorca.🙂" target="_blank">
    <div class="bot-floting" id="bot_floting">
        <div class="asesor">
            <img src="https://menorca.pe/wp-content/uploads/2025/11/menorca-whatsapp.svg" alt="asesor">
        </div>
        <div id="anima_rebote" class="dialog">
            <img src="https://menorca.pe/wp-content/uploads/2025/11/notificacion-whatsapp.svg" alt="dialog">
        </div>
    </div>
</a>

<!-- ========================================
     FOOTER PRINCIPAL
     ======================================== -->
<footer>
    <div class="container">
        <div class="footer grid-col">

            <!-- COLUMNA 1: Logo + Contacto -->
            <div class="grid-s-12 grid-m-6 grid-l-3">
                <img width="75" height="47"
                     src="https://menorca.pe/wp-content/uploads/2024/09/logotipo-blanco-menorca.png"
                     alt="Logotipo Footer"
                     class="isotipo">
                <br>
                <strong>Atención al cliente:
                    <ul>
                        <li>
                            <a href="tel:012032828">(01) 203-2828
                                <br><span>(Opción 1: Minutas / Opción 2: Consultas Generales)</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:atencion.clientes@menorca.com.pe">atencion.clientes@menorca.com.pe</a>
                        </li>
                    </ul>
                </strong>
                <strong>Ventas:
                    <ul><li><a href="tel:012032818">(01) 203-2818</a></li></ul>
                </strong>
                <strong>Cobranzas:
                    <ul><li><a href="tel:012032810">(01) 203-2810</a></li></ul>
                </strong>
            </div>

            <!-- COLUMNA 2: Links generales -->
            <div class="grid-s-12 grid-m-6 grid-l-3">
                <a href="https://consulta.ose.pe/" target="_blank">Consulta de comprobantes</a>
                <a href="/legal">Términos y condiciones</a>
                <a href="https://dci.pe/" target="_blank">Defensoría del cliente inmobiliario</a>
                <a href="/consentimiento-de-cliente-potencial/">Consentimiento de cliente potencial</a>
                <a href="https://www.lineaeticamenorca.com/" target="_blank">Línea ética</a>
                <a href="https://menorca.pe/wp-content/uploads/2025/01/codigo-de-etica-11-09-2024.pdf" target="_blank">Código de ética</a>
                <a href="https://menorca.pe/wp-content/uploads/2025/09/Codigo-de-conducta-de-Proveedores-MI-PO-LOG-2-v0.pdf" target="_blank">Código de conducta de proveedores</a>
                <a href="/files/consentimiento-de-proveedores-2025.pdf" target="_blank">Consentimiento de Proveedores</a>
                <a href="/files/instructivo-de-embalaje-materiales-2025.pdf" target="_blank">Instructivo de embalaje Materiales</a>
                <a href="/trabaja-con-nosotros">Trabaja con nosotros</a>
            </div>

            <!-- COLUMNA 3: Políticas -->
            <div class="grid-s-12 grid-m-6 grid-l-3">
                <strong>Políticas:</strong>
                <a href="https://menorca.pe/wp-content/uploads/2025/07/politica_de_seguridad_de_la_informacion.pdf" target="_blank">Política de seguridad de información</a>
                <a href="/politicas-de-cookies">Política de cookies</a>
                <a href="https://menorca.pe/wp-content/uploads/2025/07/politica_de_privacidad.pdf" target="_blank">Política de privacidad</a>
                <a href="https://menorca.pe/wp-content/uploads/2025/05/Politica-de-Cumplimiento-Vers.04-firmada.pdf" target="_blank">Política de cumplimiento</a>
                <a href="/files/politica-ssmags.pdf" target="_blank">Política SSMAGS</a>
            </div>

            <!-- COLUMNA 4: Redes sociales + Libro de Reclamaciones + DCI -->
            <div class="grid-s-12 grid-m-6 grid-l-3">
                <div>
                    <strong class="pr-3 mb-0">Síguenos:</strong>
                    <div class="social__links flex gap-m">
                        <a target="_blank" href="https://www.facebook.com/menorcalotes/" aria-label="facebook">
                            <span class="icon-facebook"></span>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/menorcainversiones/" aria-label="instagram">
                            <span class="icon-instagram"></span>
                        </a>
                        <a target="_blank" href="https://www.tiktok.com/@menorcainversiones" aria-label="tiktok">
                            <span class="icon-tiktok"></span>
                        </a>
                        <a target="_blank" href="https://pe.linkedin.com/company/menorca-inversiones-s-a-c" aria-label="linkedin">
                            <span class="icon-linkedin2"></span>
                        </a>
                    </div>
                </div>
                <br>
                <div class="flex">
                    <a href="https://reclamaciones.menorca.pe/" target="_blank" aria-label="reclamos" class="mt-3 ldr">
                        Libro de Reclamaciones
                        <img src="https://menorca.pe/wp-content/uploads/2024/09/libro_reclamaciones_menorca.svg"
                             width="55" height="28" alt="reclamos">
                    </a>
                    <a href="https://dci.pe/formulario-de-reclamo/" target="_blank" class="dci">
                        <img src="https://menorca.pe/wp-content/uploads/2025/03/DCI-blanco-1.png" alt="dci">
                    </a>
                </div>
            </div>

        </div><!-- /.footer.grid-col -->
    </div><!-- /.container -->

    <!-- Barra inferior copyright -->
    <div class="copy">
        <div class="container">Todos los derechos reservados ® Menorca 2026</div>
    </div>
</footer>
```

---

## 3. CSS COMPLETO (pegar en tu archivo de estilos)

```css
/* ================================================
   VARIABLES DE COLOR
   ================================================ */
:root {
    --green-1-menorca: #005f27;   /* Verde oscuro — fondo barra copyright */
    --green-2-menorca: #158c30;   /* Verde medio — fondo footer principal */
    --green-5-menorca: #86c441;   /* Verde claro — hover botón WhatsApp */
    --font-family-base: "Eudoxus Sans", "Inter", sans-serif;
    --radius: 5px;
    --max-container: 1360px;
}

/* ================================================
   RESET / BASE
   ================================================ */
*, div {
    font-family: var(--font-family-base);
    text-decoration: none;
    box-sizing: border-box;
    font-weight: 500;
    font-size: .8rem;
}
img {
    max-width: 100%;
}

/* ================================================
   FUENTE DE ICONOS ICOMOON
   (requiere tener icomoon.ttf en /fonts/)
   ================================================ */
@font-face {
    font-family: "icomoon";
    src: url("fonts/icomoon.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon-tiktok:before    { content: "\e932"; }
.icon-facebook:before  { content: "\ea90"; }
.icon-instagram:before { content: "\ea92"; }
.icon-linkedin2:before { content: "\eaca"; }

/* ================================================
   SISTEMA DE GRILLA (12 columnas)
   ================================================ */
.container {
    margin: 0 auto;
    max-width: var(--max-container);
    width: 90%;
}
@media only screen and (min-width: 800px) {
    .container { width: 80%; }
}
@media only screen and (min-width: 1200px) {
    .container { width: 1200px; }
}
@media only screen and (min-width: 1400px) {
    .container { width: 1220px; }
}

.grid-col {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
}
.flex { display: flex; }
.gap-m { gap: 16px; }

/* Small (todos los tamaños) */
.grid-s-1  { grid-column: span 1; }
.grid-s-2  { grid-column: span 2; }
.grid-s-3  { grid-column: span 3; }
.grid-s-4  { grid-column: span 4; }
.grid-s-5  { grid-column: span 5; }
.grid-s-6  { grid-column: span 6; }
.grid-s-7  { grid-column: span 7; }
.grid-s-8  { grid-column: span 8; }
.grid-s-9  { grid-column: span 9; }
.grid-s-10 { grid-column: span 10; }
.grid-s-11 { grid-column: span 11; }
.grid-s-12 { grid-column: span 12; }

/* Medium (tablet ≥ 800px) */
@media screen and (min-width: 800px) {
    .grid-m-1  { grid-column: span 1; }
    .grid-m-2  { grid-column: span 2; }
    .grid-m-3  { grid-column: span 3; }
    .grid-m-4  { grid-column: span 4; }
    .grid-m-5  { grid-column: span 5; }
    .grid-m-6  { grid-column: span 6; }
    .grid-m-7  { grid-column: span 7; }
    .grid-m-8  { grid-column: span 8; }
    .grid-m-9  { grid-column: span 9; }
    .grid-m-10 { grid-column: span 10; }
    .grid-m-11 { grid-column: span 11; }
    .grid-m-12 { grid-column: span 12; }
}

/* Large (laptop ≥ 1200px) */
@media screen and (min-width: 1200px) {
    .grid-l-1  { grid-column: span 1; }
    .grid-l-2  { grid-column: span 2; }
    .grid-l-3  { grid-column: span 3; }
    .grid-l-4  { grid-column: span 4; }
    .grid-l-5  { grid-column: span 5; }
    .grid-l-6  { grid-column: span 6; }
    .grid-l-7  { grid-column: span 7; }
    .grid-l-8  { grid-column: span 8; }
    .grid-l-9  { grid-column: span 9; }
    .grid-l-10 { grid-column: span 10; }
    .grid-l-11 { grid-column: span 11; }
    .grid-l-12 { grid-column: span 12; }
}

/* ================================================
   FOOTER
   ================================================ */
footer {
    background: var(--green-2-menorca);
}
footer a,
footer p,
footer strong,
footer span,
footer div {
    color: white;
}
footer a {
    display: block;
    padding: 8px 0;
    font-weight: 400;
    transition: transform 0.2s;
}
footer a:hover {
    transform: translateY(-5px);
}
footer .footer {
    padding: 40px 0;
}
footer .footer .isotipo {
    display: block;
    margin-bottom: 20px;
    width: 75px;
}
footer .footer strong {
    display: block;
    margin-bottom: 15px;
}
footer .footer ul {
    list-style: circle;
    padding-left: 17px;
}
footer .footer ul li {
    color: white;
}
footer .footer ul li span {
    font-size: .8rem;
}
footer .copy {
    padding: 22px 0;
    background: var(--green-1-menorca);
    text-align: center;
}

/* ================================================
   REDES SOCIALES - iconos
   ================================================ */
footer .social__links a {
    display: inline-block;
    padding: 0;
}
footer .social__links [class^="icon-"] {
    font-size: 1.4rem;
}

/* ================================================
   LIBRO DE RECLAMACIONES (tarjeta blanca)
   ================================================ */
a.ldr {
    background: #fff;
    color: #3177b7 !important;
    display: grid;
    width: 110px;
    text-align: center;
    grid-gap: 5px;
    justify-items: center;
    line-height: 13px;
    font-size: .72rem;
    font-weight: 600;
    padding: 8px;
    border-radius: var(--radius);
    height: max-content;
}
a.ldr img {
    filter: drop-shadow(0 1px 2px #888);
}

/* ================================================
   DCI — Defensoría del cliente inmobiliario
   ================================================ */
a.dci {
    padding: 0;
}
a.dci img {
    max-width: 150px;
    padding: 0 10px;
}

/* ================================================
   BOTÓN FLOTANTE WHATSAPP
   ================================================ */
.bot-floting {
    position: fixed;
    right: 18px;
    bottom: 20px;
    z-index: 5;
}
.bot-floting:hover .asesor::before {
    background: var(--green-5-menorca);
}
.bot-floting .asesor {
    position: relative;
}
.bot-floting .asesor::before {
    content: "";
    position: absolute;
    background: #e0e0e0;
    width: 64px;
    height: 64px;
    bottom: 0;
    border-radius: 50%;
    box-shadow: 0 4px 8px #40404066;
    transition: 0.3s;
    border: 2px solid white;
    box-sizing: border-box;
}
.bot-floting .asesor img {
    width: 64px;
    position: relative;
    display: block;
    margin-bottom: 1px;
}
.bot-floting .dialog {
    position: absolute;
    top: -3px;
    right: 0;
    transition: 0.5s;
}
.bot-floting .dialog img {
    width: 20px;
    filter: drop-shadow(0 4px 8px #40404066);
}
@media only screen and (min-width: 1000px) {
    .bot-floting {
        transform: scale(1.35);
        right: 4%;
    }
}
@media only screen and (min-width: 1200px) {
    .bot-floting {
        right: 3%;
        bottom: 6%;
    }
}

/* ================================================
   ANIMACIÓN REBOTE (notificación WhatsApp)
   ================================================ */
.rebote {
    animation: rebote 1s ease;
}
@keyframes rebote {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40%  { transform: translateY(-30px); }
    60%  { transform: translateY(-15px); }
}
```

---

## 4. ESTRUCTURA DE ARCHIVOS NECESARIOS

```
tu-proyecto/
├── index.html          ← pegar el HTML del footer dentro del <body>
├── css/
│   └── footer.css      ← pegar el CSS de arriba
└── fonts/
    └── icomoon.ttf     ← copiar desde wp-content/themes/menorca_theme/public/fonts/icomoon.ttf
```

---

## 5. CÓMO USARLO EN UN HTML ESTÁTICO

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto</title>

    <!-- Tipografía Eudoxus Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Eudoxus+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- CSS del footer -->
    <link rel="stylesheet" href="css/footer.css">
</head>
<body>

    <!-- Tu contenido aquí -->

    <!-- PEGAR AQUÍ el HTML del footer (sección 2 de arriba) -->

</body>
</html>
```

---

## 6. IMÁGENES USADAS (URLs externas — siempre disponibles)

| Imagen | URL |
|--------|-----|
| Logo blanco Menorca | `https://menorca.pe/wp-content/uploads/2024/09/logotipo-blanco-menorca.png` |
| Ícono WhatsApp | `https://menorca.pe/wp-content/uploads/2025/11/menorca-whatsapp.svg` |
| Notificación WhatsApp | `https://menorca.pe/wp-content/uploads/2025/11/notificacion-whatsapp.svg` |
| Libro de Reclamaciones | `https://menorca.pe/wp-content/uploads/2024/09/libro_reclamaciones_menorca.svg` |
| DCI logo | `https://menorca.pe/wp-content/uploads/2025/03/DCI-blanco-1.png` |

> Todas las imágenes apuntan directamente a `menorca.pe` — no necesitas descargarlas ni copiarlas.

---

## 7. NOTAS PARA ADAPTAR A OTRO PROYECTO

- **Cambiar colores:** Modifica `--green-1-menorca` y `--green-2-menorca` en `:root`
- **Cambiar teléfonos/emails:** Editar directamente en el HTML
- **Cambiar links:** Reemplazar los `href` con las URLs de tu proyecto
- **Cambiar año del copyright:** Buscar `2026` en el HTML y actualizar
- **Sin WordPress:** El HTML ya está limpio, sin PHP. Solo HTML puro.
- **Font Eudoxus Sans no disponible:** Reemplazar por `"Inter"` o `"DM Sans"` — diseño casi idéntico
