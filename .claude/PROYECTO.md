# Menorca Collection — Documentación del Proyecto

## Resumen

Sitio web corporativo de la promotora inmobiliaria **Menorca Collection** (menorca.pe / qa.menorca.pe), orientado a la venta de terrenos y viviendas en Perú. Construido sobre WordPress con un tema 100% personalizado y fuerte integración con un CRM backend vía API REST.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| CMS | WordPress (PHP 7.2+) |
| Base de datos | MySQL / MariaDB — DigitalOcean Managed DB |
| Frontend | HTML5, CSS3, JavaScript (jQuery), SCSS |
| Carrusel | Owl Carousel |
| Animaciones | WOW.js + Animate.css |
| Modales | iziModal |
| Formularios | Contact Form 7 (CF7) |
| Campos personalizados | Advanced Custom Fields Pro (ACF) |
| Post Types | Custom Post Type UI |
| Seguridad | Wordfence WAF, Limit Login Attempts, WPS Hide Login, Really Simple SSL |
| Email | WP Mail SMTP |
| Analytics | Google Tag Manager, Facebook Pixel, Google Ads |
| Hosting DB | DigitalOcean (`menorca-web-do-user-14294903-0.b.db.ondigitalocean.com:25060`) |

---

## Estructura de Carpetas

```
clon_menorca.pe/
├── wp-admin/                        # Panel de administración WordPress
├── wp-includes/                     # Core de WordPress
├── wp-content/
│   ├── plugins/                     # Plugins (16 activos)
│   ├── themes/
│   │   └── menorca_theme/           # ★ Tema personalizado principal
│   │       ├── public/
│   │       │   ├── css/             # Estilos compilados
│   │       │   ├── js/              # Scripts del tema
│   │       │   ├── scss/            # Fuente SCSS
│   │       │   ├── fonts/           # Fuentes custom
│   │       │   └── img/             # Imágenes estáticas
│   │       ├── components/          # Componentes PHP reutilizables
│   │       ├── functions.php        # Lógica y hooks del tema
│   │       ├── index.php            # Template Home principal
│   │       ├── page-*.php           # ~41 templates de páginas
│   │       ├── single-*.php         # Templates de CPTs individuales
│   │       └── style.css            # Metadatos del tema
│   └── uploads/                     # Archivos subidos (2023–2025)
├── wp-config.php                    # Configuración principal
├── wp-config_local.php              # Configuración entorno local
├── wp-config_production.php         # Configuración producción
└── .htaccess                        # Rewrite rules Apache
```

---

## Arquitectura del Tema (`menorca_theme`)

### Templates de Páginas (`page-*.php`)

| Template | Sección |
|---|---|
| `index.php` | Home principal |
| `page-proyectos.php` | Listado de proyectos |
| `page-blog.php` | Blog / Novedades |
| `page-nosotros.php` | Sobre nosotros |
| `page-sostenibilidad.php` | Sostenibilidad |
| `page-promocion.php` | Promociones |
| `page-referidos.php` | Programa de referidos |
| `page-ruleta.php` | Ruleta interactiva (sorteos) |
| `page-flechazo.php` | Promoción "Flechazo" |
| `page-feria-landing.php` | Feria Virtual |
| `page-legales.php` | Términos y condiciones |
| `page-thank.php` | Página de gracias post-formulario |

### Templates de Proyectos (`single-page-*.php`)

| Template | Proyecto |
|---|---|
| `single-page-vpm.php` | Villas Punta Mar (terrenos) |
| `single-page-vpm-casas.php` | Villas Punta Mar (casas) |
| `single-page-chorrillos.php` | Chorrillos |
| `single-page-elcarbon.php` | El Carbón |
| `single-page-laquebrada.php` | La Quebrada |

### Componentes Reutilizables (`components/`)

- `header.php` / `footer.php` — Cabecera y pie de página globales
- `card-proyecto.php`, `card-2-proyecto.php` — Tarjetas de proyectos
- `card-blog.php` — Tarjeta de artículo de blog
- `feria-preloader.php`, `feria-section-form.php` — Sección feria virtual
- `flechazo-preloader.php` — Preloader promoción Flechazo

---

## Custom Post Types (CPT)

| Slug | Descripción |
|---|---|
| `post` | Blog / Artículos |
| `novedades` | Noticias y novedades |
| `promocion` | Promociones activas |
| `equipo` | Miembros del equipo |
| `evento` | Eventos de la empresa |

**Taxonomía personalizada:** `plaza` — representa la ubicación/proyecto y es usada para filtros dinámicos.

---

## Scripts JavaScript Principales (`public/js/`)

| Archivo | Función |
|---|---|
| `general.js` | Navegación, animaciones globales, propagación UTM |
| `cf7-api.js` | Captura de formularios CF7 y envío al CRM via API REST |
| `cargar_post.js` | Carga dinámica de posts (AJAX load more) |
| `filtro-proyecto.js` | Filtrado de proyectos por texto y plaza |
| `filtro-plaza.js` | Filtrado dinámico por ubicación |
| `referidos.js` | Lógica del programa de referidos |
| `evento_ruleta.js` | Ruleta interactiva (sorteos/promociones) |
| `modal.js` | Gestión de modales (iziModal) |

---

## Flujo de Captura de Leads

```
Usuario → Formulario CF7
         ↓
    Evento wpcf7mailsent
         ↓
    cf7-api.js
    ├── Captura parámetros UTM de la URL
    ├── Identifica el form ID
    ├── Mapea "plaza" → id_proyecto (41 plazas mapeadas)
    └── POST a https://apirest.menorca.services
         ├── /web/crearlead_web    (formulario estándar)
         ├── /web/crearlead_fv     (feria virtual)
         └── /web/crearlead_ruleta (ruleta)
         ↓
    Redirección a /thanks/ o /gracias/{slug}/
    + Email de confirmación vía WP Mail SMTP
```

---

## Rutas del Sitio

### Estáticas
| URL | Descripción |
|---|---|
| `/` | Home |
| `/proyectos/` | Listado de proyectos |
| `/blog/` | Blog / Noticias |
| `/nosotros/` | Sobre nosotros |
| `/sostenibilidad/` | Sostenibilidad |
| `/promociones/` | Promociones |
| `/referidos/` | Programa de referidos |
| `/ruleta/` | Ruleta interactiva |
| `/flechazo/` | Promoción Flechazo |
| `/feria-virtual/` | Feria Virtual |
| `/legales/` | Términos legales |
| `/thanks/` | Página de gracias |

### Dinámicas (Custom Rewrite Rules)
| Patrón | Descripción |
|---|---|
| `/proyectos/{plaza}/{proyecto-slug}/` | Página individual de proyecto |
| `/gracias/{proyecto-slug}/` | Gracias post-formulario por proyecto |

---

## Plugins Activos

| Plugin | Propósito |
|---|---|
| Advanced Custom Fields Pro | Campos personalizados para proyectos |
| ACF Repeater | Grupos de campos repetibles |
| Custom Post Type UI | Constructor de CPTs y taxonomías |
| Contact Form 7 | Formularios de contacto |
| Contact Form CFDB7 | Almacenamiento de envíos de CF7 en BD |
| WP Mail SMTP | Envío de correos via SMTP |
| Really Simple SSL | Forzar HTTPS |
| Wordfence Security | WAF y monitoreo de seguridad |
| Limit Login Attempts Reloaded | Bloqueo de fuerza bruta |
| WPS Hide Login | URL de login personalizada |
| HTTP Headers | Cabeceras HTTP de seguridad |
| Cookie Law Info | Cumplimiento GDPR/Cookies |
| Classic Editor | Editor clásico de WordPress |
| Duplicate Page | Duplicar páginas fácilmente |
| Akismet | Filtro anti-spam |
| WP Robots Txt | Control del robots.txt |

---

## Configuración de Base de Datos

| Parámetro | Valor |
|---|---|
| Nombre BD | `web_menorca_wp` |
| Prefijo de tablas | `mc_` |
| Host | DigitalOcean Managed DB |
| Charset | `utf8mb4` |
| Collation | `utf8mb4_0900_ai_ci` |

---

## Tracking y Analytics

- **Google Tag Manager:** GTM-M88JWMR
- **Facebook Pixel:** 1236201744391982
- **Google Ads:** Tracking de conversiones integrado
- **UTMs:** Se capturan y propagan automáticamente a los formularios y la API CRM

---

## Entornos

| Entorno | URL | Config |
|---|---|---|
| Producción | https://menorca.pe | `wp-config_production.php` |
| QA | https://qa.menorca.pe | `wp-config.php` (activo en el clon) |
| Local | localhost | `wp-config_local.php` |

---

## Problemas / Deuda Técnica Detectada

1. **Variables PHP no definidas:** `$numero_1` en `single-category-terreno.php:542` — genera warnings repetidos en debug.log (31,982 líneas de log).
2. **Columna BD desconocida:** Error en queries de `wpmailsmtp_debug_events`.
3. **PHP Deprecated:** Parámetro opcional antes que requerido en `acf-repeater`.
4. **Credenciales en código:** `wp-config.php` y sus variantes contienen credenciales de base de datos en texto plano — no deben commitearse a repositorios públicos.
5. **Archivos sensibles expuestos:** `info.php` (phpinfo), `db_test.php` — deberían eliminarse en producción.

---

## Notas de Seguridad

> **IMPORTANTE:** Los archivos `wp-config.php`, `wp-config_production.php` y `wp-config_local.php` contienen credenciales de base de datos, claves de API y salts de WordPress. Asegurarse de que estos archivos estén en `.gitignore` y nunca se suban a repositorios públicos.
>
> Los archivos `info.php` y `db_test.php` exponen información sensible del servidor y deben eliminarse del entorno de producción.
