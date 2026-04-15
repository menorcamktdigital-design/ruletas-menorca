export function FooterMenorca() {
  return (
    <>
      {/* Botón flotante WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=51922055462&text=Hola👋%2C%20vi%20esto%20en%20la%20web%2C%20quiero%20más%20información%20de%20los%20proyectos%20de%20Menorca.🙂"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bot-floting" id="bot_floting">
          <div className="asesor">
            <img src="https://menorca.pe/wp-content/uploads/2025/11/menorca-whatsapp.svg" alt="asesor" />
          </div>
          <div id="anima_rebote" className="dialog">
            <img src="https://menorca.pe/wp-content/uploads/2025/11/notificacion-whatsapp.svg" alt="dialog" />
          </div>
        </div>
      </a>

      {/* Footer principal */}
      <footer className="footer-menorca">
        <div className="footer-container">
          <div className="footer-grid footer-grid-col">

            {/* Columna 1: Logo + Contacto */}
            <div className="grid-s-12 grid-m-6 grid-l-3">
              <img
                width={75}
                height={47}
                src="https://menorca.pe/wp-content/uploads/2024/09/logotipo-blanco-menorca.png"
                alt="Logotipo Footer"
                className="footer-isotipo"
              />
              <br />
              <strong>
                Atención al cliente:
                <ul>
                  <li>
                    <a href="tel:012032828">
                      (01) 203-2828
                      <br />
                      <span>(Opción 1: Minutas / Opción 2: Consultas Generales)</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:atencion.clientes@menorca.com.pe">atencion.clientes@menorca.com.pe</a>
                  </li>
                </ul>
              </strong>
              <strong>
                Ventas:
                <ul>
                  <li><a href="tel:012032818">(01) 203-2818</a></li>
                </ul>
              </strong>
              <strong>
                Cobranzas:
                <ul>
                  <li><a href="tel:012032810">(01) 203-2810</a></li>
                </ul>
              </strong>
            </div>

            {/* Columna 2: Links generales */}
            <div className="grid-s-12 grid-m-6 grid-l-3 ">
              <a href="https://consulta.ose.pe/" target="_blank" rel="noopener noreferrer">Consulta de comprobantes</a>
              <a href="https://menorca.pe/legal">Términos y condiciones</a>
              <a href="https://dci.pe/" target="_blank" rel="noopener noreferrer">Defensoría del cliente inmobiliario</a>
              <a href="https://menorca.pe/consentimiento-de-cliente-potencial/">Consentimiento de cliente potencial</a>
              <a href="https://www.lineaeticamenorca.com/" target="_blank" rel="noopener noreferrer">Línea ética</a>
              <a href="https://menorca.pe/wp-content/uploads/2025/01/codigo-de-etica-11-09-2024.pdf" target="_blank" rel="noopener noreferrer">Código de ética</a>
              <a href="https://menorca.pe/wp-content/uploads/2025/09/Codigo-de-conducta-de-Proveedores-MI-PO-LOG-2-v0.pdf" target="_blank" rel="noopener noreferrer">Código de conducta de proveedores</a>
              <a href="https://menorca.pe/files/consentimiento-de-proveedores-2025.pdf" target="_blank" rel="noopener noreferrer">Consentimiento de Proveedores</a>
              <a href="https://menorca.pe/files/instructivo-de-embalaje-materiales-2025.pdf" target="_blank" rel="noopener noreferrer">Instructivo de embalaje Materiales</a>
              <a href="https://menorca.pe/trabaja-con-nosotros">Trabaja con nosotros</a>
            </div>

            {/* Columna 3: Políticas */}
            <div className="grid-s-12 grid-m-6 grid-l-3">
              <strong>Políticas:</strong>
              <a href="https://menorca.pe/wp-content/uploads/2025/07/politica_de_seguridad_de_la_informacion.pdf" target="_blank" rel="noopener noreferrer">Política de seguridad de información</a>
              <a href="https://menorca.pe/politicas-de-cookies">Política de cookies</a>
              <a href="https://menorca.pe/wp-content/uploads/2025/07/politica_de_privacidad.pdf" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
              <a href="https://menorca.pe/wp-content/uploads/2025/05/Politica-de-Cumplimiento-Vers.04-firmada.pdf" target="_blank" rel="noopener noreferrer">Política de cumplimiento</a>
              <a href="https://menorca.pe/files/politica-ssmags.pdf" target="_blank" rel="noopener noreferrer">Política SSMAGS</a>
            </div>

            {/* Columna 4: Redes sociales + Libro de Reclamaciones + DCI */}
            <div className="grid-s-12 grid-m-6 grid-l-3">
              <div>
                <strong className="footer-siguenos">Síguenos:</strong>
                <div className="social__links footer-flex footer-gap-m">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/menorcalotes/" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/menorcainversiones/" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@menorcainversiones" aria-label="TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://pe.linkedin.com/company/menorca-inversiones-s-a-c" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
              <br />
              <div className="footer-flex">
                <a href="https://reclamaciones.menorca.pe/" target="_blank" rel="noopener noreferrer" aria-label="reclamos" className="ldr">
                  Libro de Reclamaciones
                  <img src="https://menorca.pe/wp-content/uploads/2024/09/libro_reclamaciones_menorca.svg" width={55} height={28} alt="reclamos" />
                </a>
                <a href="https://dci.pe/formulario-de-reclamo/" target="_blank" rel="noopener noreferrer" className="dci">
                  <img src="https://menorca.pe/wp-content/uploads/2025/03/DCI-blanco-1.png" alt="dci" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Barra inferior copyright */}
        <div className="footer-copy">
          <div className="footer-container">Todos los derechos reservados ® Menorca 2026</div>
        </div>
      </footer>
    </>
  );
}
