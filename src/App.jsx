import { useState } from "react";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";

const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbx2myA0M0Crv4R_FxBUNu-Z39P3O4G-WMHpX5Gmtqr5KmJSckeG2nhs-8HRd7bM9BCU/exec";

const ASSET_BASE = import.meta.env.BASE_URL;

const services = [
  { number: "01", title: "Paneles móviles", description: "Instalación, mantenimiento y reparación de particiones móviles acústicas para oficinas, hoteles y centros empresariales.", image: `${ASSET_BASE}images/paneles.jpg` },
  { number: "02", title: "Cortinas y persianas", description: "Instalación y mantenimiento de cortinas y persianas para espacios corporativos y comerciales.", image: `${ASSET_BASE}images/cortinas.jpg` },
  { number: "03", title: "Mobiliario de oficina", description: "Comercialización, instalación y mantenimiento de muebles, mesas, sillonería, butacas y archivos móviles.", image: `${ASSET_BASE}images/mobiliario.jpg` },
  { number: "04", title: "Remodelaciones", description: "Revestimientos interiores, sistemas en drywall, acabados y adecuación de ambientes empresariales.", image: `${ASSET_BASE}images/remodelacion-oficina.jpg` },
];

const clientLogos = [
  { name: "The Westin Lima", image: `${ASSET_BASE}images/clientes-ref/01-westin.png` },
  { name: "Royal Decameron Punta Sal", image: `${ASSET_BASE}images/clientes-ref/02-decameron.png` },
  { name: "Hotel Paracas", image: `${ASSET_BASE}images/clientes-ref/03-hotel-paracas.png` },
  { name: "REMS", image: `${ASSET_BASE}images/clientes-ref/04-rems.png` },
  { name: "Organización Internacional del Trabajo", image: `${ASSET_BASE}images/clientes-ref/05-oit.png` },
  { name: "Universidad Peruana de Ciencias Aplicadas", image: `${ASSET_BASE}images/clientes-ref/06-upc.png` },
  { name: "AECID", image: `${ASSET_BASE}images/clientes-ref/07-aecid.png` },
  { name: "Centro de Capacitación Empresarial", image: `${ASSET_BASE}images/clientes-ref/08-ccl.png` },
  { name: "Museo Nacional del Perú", image: `${ASSET_BASE}images/clientes-ref/09-muna.png` },
  { name: "Aduandina", image: `${ASSET_BASE}images/clientes-ref/10-aduandina.png` },
  { name: "Brother", image: `${ASSET_BASE}images/clientes-ref/11-brother.png` },
  { name: "Líder Grupo Constructor", image: `${ASSET_BASE}images/clientes-ref/12-lider.png` },
  { name: "Arlima", image: `${ASSET_BASE}images/clientes-ref/13-arlima.png` },
];

const buildings = [
  "Centro Empresarial Leuro",
  "Panorama Centro Empresarial",
  "Edificio Santo Toribio",
  "Edificio Capital",
  "Edificio El Bosque",
  "Edificio T Tower",
];

const values = [
  { number: "01", title: "Calidad", text: "Cuidamos cada detalle para entregar soluciones funcionales y duraderas." },
  { number: "02", title: "Responsabilidad", text: "Cumplimos nuestros compromisos, plazos y protocolos de seguridad." },
  { number: "03", title: "Adaptabilidad", text: "Diseñamos respuestas a medida para cada espacio y necesidad." },
  { number: "04", title: "Confianza", text: "Construimos relaciones transparentes con atención técnica oportuna." },
  { number: "05", title: "Mejora continua", text: "Buscamos formas más eficientes de trabajar y servir a nuestros clientes." },
];

function FacebookMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8.5V7c0-.8.5-1 1-1h2.5V2.5H14c-3.1 0-4.5 1.8-4.5 4.3v1.7H7v3.8h2.5V22H14v-9.7h3.1l.5-3.8H14Z" /></svg>;
}

function InstagramMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg>;
}

function LinkedInMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 7.9H1.6V22h3.6V7.9ZM3.4 2A2.1 2.1 0 1 0 3.4 6.2 2.1 2.1 0 0 0 3.4 2ZM22 13.9c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2v-2H9.1V22h3.6v-7c0-1.8.4-3.6 2.7-3.6 2.2 0 2.3 2.1 2.3 3.7V22H22v-8.1Z" /></svg>;
}

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Zm-5.42 7.4a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.44 6.61 2.01 12.06 2.01a9.82 9.82 0 0 1 7.02 2.91 9.83 9.83 0 0 1 2.9 7.02c0 5.45-4.44 9.88-9.88 9.88h-.05ZM20.46 3.49A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.89a11.83 11.83 0 0 0 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.56 0 11.89-5.34 11.9-11.9a11.82 11.82 0 0 0-3.49-8.41Z" /></svg>;
}

export default function App() {
  const [sendStatus, setSendStatus] = useState("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  function formMessage(data) {
    return [
      "Hola, deseo solicitar una cotización.",
      `Nombre: ${data.get("name")}`,
      `Empresa: ${data.get("company") || "No indicada"}`,
      `Correo: ${data.get("email")}`,
      `Teléfono: ${data.get("phone")}`,
      `Servicio: ${data.get("service")}`,
      `Detalle: ${data.get("detail")}`,
    ].join("\n");
  }

  function contactByWhatsApp() {
    const form = document.querySelector("#lead-form");
    if (!form || !form.reportValidity()) return;
    const data = new FormData(form);
    window.open(`https://wa.me/51942738596?text=${encodeURIComponent(formMessage(data))}`, "_blank");
  }

  function sendToSheets(event) {
    event.preventDefault();
    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      setSendStatus("error");
      return;
    }
    setSendStatus("sending");
    const form = event.currentTarget;
    const payload = new FormData(form);
    const target = document.createElement("iframe");
    target.name = `sheets-submit-${Date.now()}`;
    target.style.display = "none";
    document.body.appendChild(target);

    const bridgeForm = document.createElement("form");
    bridgeForm.method = "POST";
    bridgeForm.action = GOOGLE_SHEETS_WEBHOOK_URL;
    bridgeForm.target = target.name;
    for (const [name, value] of payload.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value);
      bridgeForm.appendChild(input);
    }
    document.body.appendChild(bridgeForm);
    bridgeForm.submit();

    window.setTimeout(() => {
      setSendStatus("sent");
      form.reset();
      bridgeForm.remove();
      target.remove();
    }, 1200);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="RG Servicios, inicio">
          <img src={`${ASSET_BASE}images/logo-rg-color.jpg`} alt="Logo de RG Servicios Asociados" />
          <span><strong>RG Servicios</strong><small>Asociados</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proyectos">Proyectos</a>
          <a href={`${ASSET_BASE}preguntas-frecuentes/`}>Preguntas frecuentes</a>
        </nav>
        <a className="button button-small" href="#cotizacion">Solicitar cotización</a>
        <div className="mobile-header-actions">
          <a className="mobile-whatsapp" href="https://wa.me/51942738596" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={20} /></a>
          <button className="mobile-menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobile-navigation" aria-label="Navegación móvil">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href={`${ASSET_BASE}preguntas-frecuentes/`} onClick={() => setMenuOpen(false)}>Preguntas frecuentes</a>
          <a className="mobile-menu-cta" href="#cotizacion" onClick={() => setMenuOpen(false)}>Solicitar cotización</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">Soluciones para espacios corporativos</p>
          <h1>Espacios que se adaptan a tu empresa.</h1>
          <p className="hero-copy">Instalamos y mantenemos paneles móviles, mobiliario y acabados arquitectónicos con precisión, seguridad y atención oportuna.</p>
          <div className="hero-actions"><a className="text-link" href="#servicios">Conoce nuestros servicios <span>↘</span></a></div>
          <div className="trust-line"><span>Atención en Lima</span><span>RUC 20601633168</span><span>Protocolos de seguridad</span></div>
        </div>
        <div className="hero-visual">
          <img src={`${ASSET_BASE}images/hero-paneles.jpg`} alt="Paneles móviles instalados en una sala corporativa" />
          <div className="hero-note"><strong>Experiencia técnica</strong><span>Instalación, mantenimiento y reparación</span></div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading">
          <div><p className="eyebrow">Nuestros servicios</p><h2>Soluciones integrales para cada espacio.</h2></div>
          <p>Atendemos necesidades de instalación, mantenimiento y adecuación con personal técnico especializado.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><img src={service.image} alt={service.title} /><div className="service-body"><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p></div></article>)}
        </div>
      </section>

      <section className="section about" id="nosotros">
        <div className="about-intro">
          <div className="about-visual"><img src={`${ASSET_BASE}images/trabajo-tecnico.jpg`} alt="Técnico de RG Servicios realizando mantenimiento" /><span className="image-label">Trabajo preciso y seguro</span></div>
          <div className="about-copy">
            <p className="eyebrow">Quiénes somos</p>
            <h2>Un equipo técnico que responde.</h2>
            <p>RG Servicios Asociados es una empresa especializada en el mantenimiento e instalación de productos arquitectónicos y mobiliario. Adaptamos cada solución a las necesidades del cliente y cumplimos los protocolos de seguridad establecidos.</p>
            <div className="about-method">
              <p>Cómo trabajamos</p>
              <ol>
                <li><span>01</span><div><strong>Evaluación técnica</strong><small>Revisamos el espacio y entendemos la necesidad antes de proponer.</small></div></li>
                <li><span>02</span><div><strong>Solución a medida</strong><small>Integramos funcionalidad, estética y criterios técnicos en cada propuesta.</small></div></li>
                <li><span>03</span><div><strong>Ejecución y seguimiento</strong><small>Coordinamos el trabajo con orden, seguridad y comunicación constante.</small></div></li>
              </ol>
            </div>
          </div>
        </div>

        <div className="strategy-grid">
          <article><span>Misión</span><h3>Transformar espacios con soluciones confiables.</h3><p>Brindamos soluciones arquitectónicas funcionales y personalizadas que optimizan los espacios de nuestros clientes mediante estándares de calidad y un servicio técnico confiable.</p></article>
          <article><span>Visión</span><h3>Ser un referente en el mercado peruano.</h3><p>Buscamos destacar por nuestra innovación, eficiencia operativa y capacidad de adaptación a las necesidades del sector de productos arquitectónicos.</p></article>
          <article><span>Propuesta de valor</span><h3>Servicio a medida, de principio a fin.</h3><p>Integramos aspectos funcionales, estéticos y técnicos para transformar y mejorar cada entorno de acuerdo con las necesidades del cliente.</p></article>
        </div>

        <div className="team-section">
          <div className="team-visual">
            <img src={`${ASSET_BASE}images/equipo-tecnico-rg.jpg`} alt="Equipo técnico de RG Servicios durante un trabajo en campo" />
          </div>
          <div className="team-copy">
            <p className="eyebrow">Nuestro equipo técnico</p>
            <h2>Las personas detrás de cada proyecto.</h2>
            <p>Parte del equipo encargado de ejecutar nuestros trabajos en campo y acompañar cada proyecto desde la coordinación inicial hasta su entrega.</p>
          </div>
        </div>

        <div className="values-section">
          <div className="values-heading"><h2>Nuestros valores</h2></div>
          <div className="values-grid">{values.map((value) => <article key={value.title}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section projects" id="proyectos">
        <div className="section-heading compact"><div><p className="eyebrow">Experiencia comprobada</p><h2>Empresas que confiaron en nosotros.</h2></div></div>
        <div className="logo-carousel" role="region" aria-label="Empresas que confiaron en RG Servicios">
          <div className="logo-track">
            <div className="logo-set">
              {clientLogos.map((client) => <figure key={client.name}><img src={client.image} alt={`Logo de ${client.name}`} /></figure>)}
            </div>
            <div className="logo-set" aria-hidden="true">
              {clientLogos.map((client) => <figure key={`${client.name}-duplicate`}><img src={client.image} alt="" /></figure>)}
            </div>
          </div>
        </div>
        <p className="homologation">(*) Homologados en el servicio de mantenimiento de los paneles móviles por Rems</p>
        <div className="buildings-block">
          <div><p className="eyebrow">Edificios y centros empresariales</p><h3>Presencia en espacios corporativos de Lima.</h3></div>
          <ul>{buildings.map((building) => <li key={building}>{building}</li>)}</ul>
        </div>
      </section>

      <section className="quote-section" id="cotizacion">
        <div className="quote-intro">
          <p className="eyebrow">Contáctanos</p>
          <h2>Hagamos realidad tu próximo espacio.</h2>
          <p>Déjanos tus datos y nuestro equipo te contactará para entender tu necesidad y preparar una solución a medida.</p>
          <div className="contact-data">
            <a href="tel:+51942738596"><Phone size={20} /><span><small>Llámanos</small>942 738 596</span></a>
            <a href="mailto:rgserviciosasociados@gmail.com"><Mail size={20} /><span><small>Escríbenos</small>rgserviciosasociados@gmail.com</span></a>
          </div>
        </div>
        <form id="lead-form" onSubmit={sendToSheets}>
          <label>Nombre y apellido<input name="name" required placeholder="Tu nombre" /></label>
          <label>Empresa<input name="company" placeholder="Nombre de la empresa" /></label>
          <div className="form-row">
            <label>Correo<input name="email" type="email" required placeholder="correo@empresa.com" /></label>
            <label>Teléfono<input name="phone" type="tel" required placeholder="999 999 999" /></label>
          </div>
          <label>Servicio<select name="service" required defaultValue=""><option value="" disabled>Selecciona un servicio</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Otro servicio</option></select></label>
          <label>¿Qué necesitas?<textarea name="detail" required rows={4} placeholder="Describe brevemente el trabajo" /></label>
          <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-actions">
            <button className="button whatsapp-button" type="button" onClick={contactByWhatsApp}><MessageCircle size={18} />Contáctanos por WhatsApp</button>
            <button className="button submit-button" type="submit" disabled={sendStatus === "sending"}>{sendStatus === "sending" ? "Enviando..." : "Enviar"}</button>
          </div>
          {sendStatus === "sent" && <p className="form-success">¡Gracias por contactarnos! Hemos recibido tu solicitud y nos comunicaremos contigo pronto.</p>}
          {sendStatus === "error" && <p className="form-error">El envío directo está terminando de configurarse. Por favor, contáctanos por WhatsApp.</p>}
          <small>Estamos listos para escucharte y ayudarte a encontrar la mejor solución para tu espacio.</small>
        </form>
      </section>

      <footer>
        <div className="brand footer-brand"><img src={`${ASSET_BASE}images/logo-rg-color.jpg`} alt="Logo de RG Servicios Asociados" /><span><strong>RG Servicios</strong><small>Asociados</small></span></div>
        <div className="socials" aria-label="Redes sociales">
          <a href="https://www.instagram.com/rg_servicios_asociados/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><InstagramMark /></a>
          <a href="https://www.facebook.com/share/14jZ8XhywAh/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FacebookMark /></a>
          <a href="https://www.linkedin.com/company/rg-servicios-asociados-sac/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInMark /></a>
          <a href="https://wa.me/51942738596" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><WhatsAppMark /></a>
        </div>
        <div className="footer-links"><a href={`${ASSET_BASE}preguntas-frecuentes/`}>Preguntas frecuentes</a></div>
        <p>© 2026 RG Servicios Asociados</p>
      </footer>
    </main>
  );
}
