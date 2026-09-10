import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";

const ASSET_BASE = import.meta.env.BASE_URL;

const faqs = [
  {
    question: "¿Qué servicios ofrece RG Servicios Asociados?",
    answer: "Realizamos instalación, mantenimiento y reparación de paneles móviles; instalación y mantenimiento de cortinas y persianas; comercialización, instalación y mantenimiento de mobiliario de oficina; además de remodelaciones, drywall, revestimientos y acabados interiores.",
  },
  {
    question: "¿Realizan mantenimiento y reparación de paneles móviles?",
    answer: "Sí. Atendemos el mantenimiento y la reparación de particiones móviles acústicas para conservar su funcionamiento, alineación y desplazamiento adecuados.",
  },
  {
    question: "¿Qué tipos de espacios atienden?",
    answer: "Trabajamos principalmente en oficinas, hoteles, centros empresariales y otros espacios corporativos o comerciales que requieren instalación, mantenimiento o adecuación de ambientes.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer: "Puedes completar el formulario de la página principal o comunicarte por WhatsApp, teléfono o correo. Revisaremos tu solicitud para comprender el trabajo y preparar una propuesta de acuerdo con la necesidad del espacio.",
  },
  {
    question: "¿Realizan una evaluación técnica antes de proponer una solución?",
    answer: "Sí. Primero revisamos las características del espacio y la necesidad del cliente. Esta evaluación permite plantear una solución funcional y técnicamente adecuada.",
  },
  {
    question: "¿En qué zona brindan atención?",
    answer: "Actualmente brindamos atención en Lima. Puedes consultarnos la disponibilidad para la ubicación específica de tu proyecto mediante nuestros canales de contacto.",
  },
  {
    question: "¿Trabajan con protocolos de seguridad?",
    answer: "Sí. La ejecución de los trabajos considera los protocolos de seguridad establecidos para cada servicio y los requisitos de ingreso o trabajo indicados por el cliente.",
  },
  {
    question: "¿Qué información debo enviar para solicitar atención?",
    answer: "Indica el servicio requerido, la ubicación y una breve descripción del trabajo. Si cuentas con fotografías, medidas o planos, puedes compartirlos para facilitar la evaluación inicial.",
  },
];

export default function FaqPage() {
  return (
    <main className="faq-page">
      <header className="site-header">
        <a className="brand" href={ASSET_BASE} aria-label="RG Servicios, inicio">
          <img src={`${ASSET_BASE}images/logo-rg-color.jpg`} alt="Logo de RG Servicios Asociados" />
          <span><strong>RG Servicios</strong><small>Asociados</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href={ASSET_BASE}>Inicio</a>
          <a href={`${ASSET_BASE}#servicios`}>Servicios</a>
          <a href={`${ASSET_BASE}#nosotros`}>Nosotros</a>
          <a href={`${ASSET_BASE}preguntas-frecuentes/`} aria-current="page">Preguntas frecuentes</a>
        </nav>
        <a className="button button-small" href={`${ASSET_BASE}#cotizacion`}>Solicitar cotización</a>
      </header>

      <section className="faq-hero">
        <div>
          <p className="eyebrow">Información útil</p>
          <h1>Preguntas frecuentes</h1>
          <p>Encuentra respuestas sobre nuestros servicios, forma de trabajo y canales de atención.</p>
        </div>
      </section>

      <section className="faq-content" aria-labelledby="faq-list-title">
        <div className="faq-intro">
          <p className="eyebrow">Resolvemos tus dudas</p>
          <h2 id="faq-list-title">Antes de solicitar un servicio</h2>
          <p>Selecciona una pregunta para conocer más detalles.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary><span>{faq.question}</span><ChevronDown size={20} aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="faq-contact">
        <div>
          <p className="eyebrow">¿Tienes otra consulta?</p>
          <h2>Conversemos sobre tu proyecto.</h2>
        </div>
        <div className="faq-contact-actions">
          <a className="button whatsapp-button" href="https://wa.me/51942738596" target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp</a>
          <a href="tel:+51942738596"><Phone size={18} />942 738 596</a>
          <a href="mailto:rgserviciosasociados@gmail.com"><Mail size={18} />Correo electrónico</a>
        </div>
      </section>

      <footer className="faq-footer">
        <div className="brand footer-brand"><img src={`${ASSET_BASE}images/logo-rg-color.jpg`} alt="Logo de RG Servicios Asociados" /><span><strong>RG Servicios</strong><small>Asociados</small></span></div>
        <a href={ASSET_BASE}>Volver al inicio</a>
        <p>© 2026 RG Servicios Asociados</p>
      </footer>
    </main>
  );
}
