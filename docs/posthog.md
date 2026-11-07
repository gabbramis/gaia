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
| `contact_form_submitted` | El servidor envió el correo del formulario | Lead de contacto confirmado |
| `whatsapp_link_clicked` | Clic en el enlace de WhatsApp del botón flotante o pie de página | Intención de contacto, no conversación ni reserva confirmada |
| `resource_lead_submitted` | El recurso protegido aceptó los datos del visitante | Lead de recurso |
| `resource_link_opened` | El sitio intentó abrir el enlace del recurso | Intención de descarga, no descarga verificada |

La reserva de reunión se confirma fuera del sitio, en WhatsApp. Registrar `meeting_booked` solo cuando el equipo o una integración confirme la reserva; no inferirlo de un clic. Para analizar la conversión completa, conectar la confirmación de WhatsApp o el CRM con PostHog usando un identificador estable del lead.

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

## Reuniones confirmadas

El sitio no recibe confirmación de las reservas realizadas en WhatsApp Business. Hasta conectar ese dato, usar `contact_form_submitted` como lead y `whatsapp_link_clicked` como intención de contacto; ninguno equivale a reunión reservada. Llevar las confirmaciones en una planilla operativa con fecha, canal, campaña y estado mientras se define una integración. Para atribuir cada reserva a una visita de PostHog se necesita un identificador que acompañe la conversación y vuelva al evento `meeting_booked`; no unir personas solo por nombre.
