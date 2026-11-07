# PostHog en Gaia

Proyecto: Gaia Studio, ID 716574.

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
