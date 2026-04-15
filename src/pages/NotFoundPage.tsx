import { FooterMenorca } from '../components/FooterMenorca';

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <main className="not-found-main">
        <div className="not-found-content">
          {/* Ilustración simple */}
          <div className="not-found-illustration" aria-hidden="true">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="76" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="8 6" />
              <circle cx="80" cy="80" r="52" fill="#f3f4f6" />
              <text x="80" y="92" textAnchor="middle" fontSize="42" fontWeight="800" fill="#026d32" fontFamily="sans-serif">?</text>
            </svg>
          </div>

          <div className="not-found-code">404</div>

          <h1 className="not-found-title">Página no encontrada</h1>

          <p className="not-found-desc">
            La dirección que ingresaste no existe o fue movida.<br />
            Pero tu suerte te está esperando en la ruleta.
          </p>

          <div className="not-found-actions">
            <a href="/feria" className="not-found-btn-primary">
              Ir a la ruleta
            </a>
            <a href="https://menorca.pe" target="_blank" rel="noopener noreferrer" className="not-found-btn-secondary">
              Visitar menorca.pe
            </a>
          </div>
        </div>
      </main>
      <FooterMenorca />
    </div>
  );
}
