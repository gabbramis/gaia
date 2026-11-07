# PostHog en Gaia

Proyecto: Gaia Studio Web, ID 716574. URL: `https://gaiastudio.com.uy`. Zona horaria: `America/Montevideo`. PostHog descarta las direcciones IP al ingresar eventos.

## Configuración

Definir estas variables en `.env.local` para desarrollo y en el proyecto de Vercel para Preview y Production. Volver a desplegar después de guardarlas, porque Next.js incorpora las variables `NEXT_PUBLIC_` durante el build.

```env
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=<token del proyecto>
NEXT_PUBLIC_POSTHOG_HOST=<host de ingesta del proyecto>
```

El token y el host se obtienen de la configuración del proyecto de PostHog. No copiar la URL de la interfaz (`us.posthog.com`) en `NEXT_PUBLIC_POSTHOG_HOST`: se necesita el host de ingesta (`us.i.posthog.com`). `.env.local` está ignorado por Git.

## Eventos

| Evento | Cuándo se emite | Significado |
| --- | --- | --- |
| `contact_form_submitted` | El servidor envió el correo del formulario | Contacto por formulario enviado |
| `whatsapp_link_clicked` | Clic en el enlace de WhatsApp del botón flotante o pie de página | Intención de iniciar un chat; no confirma que se haya enviado un mensaje |
| `resource_lead_submitted` | El recurso protegido aceptó los datos del visitante | Lead de recurso |
| `resource_link_opened` | El sitio intentó abrir el enlace del recurso | Intención de descarga, no descarga verificada |

El objetivo principal de Gaia es que la persona se contacte con el equipo y converse por chat. Medir por separado los clics a WhatsApp y los formularios enviados. No contar reservas de reunión como conversión en esta etapa. El clic a WhatsApp es una intención de contacto: el sitio no sabe si la persona envió el mensaje.

La grabación de sesiones tiene los campos de formulario enmascarados. Los eventos personalizados no envían nombre, correo ni contenido del mensaje.

## Campañas y enlaces UTM

Agregar UTMs a todos los enlaces de campaña que Gaia controla. PostHog recoge esos parámetros al entrar al sitio; no hace falta añadirlos manualmente a cada evento. Usar siempre minúsculas, guiones bajos y nombres de campaña estables.

| Canal | `utm_source` | `utm_medium` |
| --- | --- | --- |
| Instagram orgánico | `instagram` | `social` |
| Instagram Ads | `instagram` | `paid_social` |
| Facebook Ads | `facebook` | `paid_social` |
| Google Ads | `google` | `cpc` |
| LinkedIn orgánico | `linkedin` | `social` |
| Newsletter | `newsletter` | `email` |
| Enlace compartido por WhatsApp | `whatsapp` | `messaging` |

Ejemplo: `https://gaiastudio.com.uy/branding?utm_source=instagram&utm_medium=paid_social&utm_campaign=branding_noviembre_2026&utm_content=video_1`.

`utm_campaign` identifica la campaña; `utm_content` distingue creatividades o ubicaciones. Mantener el mismo nombre de campaña entre anuncios y enlaces. El tráfico orgánico de buscadores se identifica por el referente; no se pueden añadir UTMs a los resultados de búsqueda.

## Medición de contactos

Revisar semanalmente las visitas, los clics a WhatsApp y los formularios enviados, separados por canal, campaña UTM y página de entrada. Al comparar la tasa de contacto, contar sesiones con al menos una de esas acciones para no duplicar a quien hizo ambas. Mantener los dos eventos visibles por separado: un formulario enviado confirma la entrega del correo; un clic a WhatsApp solo muestra intención de abrir el chat. No usar `resource_lead_submitted` ni `resource_link_opened` como contacto comercial.
