import { useState } from 'react';
import type { CampaignConfig, Plaza, Premio } from '../../types';
import { RouletteCanvas } from './RouletteCanvas';
import { LeadForm } from '../lead-form/LeadForm';
import { Modal } from '../../components/Modal';
import { FooterMenorca } from '../../components/FooterMenorca';
import { PlazaSelector } from '../../components/PlazaSelector';
import { hasAlreadySpun, markAsSpun } from '../../lib/spinLock';

interface RuletaPageProps {
  config: CampaignConfig;
}

export function RuletaPage({ config }: RuletaPageProps) {
  const [plazaSeleccionada, setPlazaSeleccionada] = useState<Plaza | null>(null);
  const [premioPendiente, setPremioPendiente] = useState<Premio | null>(null);
  const [mostrarGracias, setMostrarGracias] = useState(false);
  const [yaGiro, setYaGiro] = useState(() => hasAlreadySpun(config.utmSource));

  // Premios activos: los de la plaza seleccionada, o el fallback global
  const premiosActivos = plazaSeleccionada?.premios ?? config.premios;

  function handlePremio(premio: Premio) {
    markAsSpun(config.utmSource);
    setYaGiro(true);
    setPremioPendiente(premio);
  }

  function handleFormSuccess() {
    setPremioPendiente(null);
    setMostrarGracias(true);
  }

  return (
    <>
      {/* Hero / Ruleta */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={config.bgImage ? { backgroundImage: `url(${config.bgImage})` } : undefined}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
          <div className="grid min-h-screen grid-cols-1 items-center gap-10 md:grid-cols-2">

            {/* Columna izquierda: textos + selector */}
            <div className="flex flex-col items-center gap-6 text-white md:items-start">
              {config.logoImg && (
                <a href="https://menorca.pe" target="_blank" rel="noopener noreferrer">
                  <img src={config.logoImg} alt="Menorca Collection" className="max-w-[230px]" />
                </a>
              )}
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{config.heading}</h1>
              <p className="max-w-md text-lg text-white/90" style={{ whiteSpace: 'pre-line' }}>
                {config.subheading}
              </p>
              {config.fechaVigencia && (
                <span className="w-fit rounded-full bg-danger px-5 py-2 text-sm font-semibold text-white">
                  {config.fechaVigencia}
                </span>
              )}

              {/* Paso 1: selector de ubicación */}
              <div className="w-full max-w-sm">
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Paso 1 — Elige tu ubicación de interés
                </label>
                <PlazaSelector
                  plazas={config.plazas}
                  value={plazaSeleccionada}
                  onChange={setPlazaSeleccionada}
                  disabled={yaGiro}
                />

                {/* Nombre de plaza activa */}
                {plazaSeleccionada && (
                  <p className="mt-2 text-sm font-medium text-accent">
                    Jugando con premios de: <strong>{plazaSeleccionada.label}</strong>
                    {plazaSeleccionada.maxDiscount && (
                      <span className="ml-2 text-white/60">(hasta S/ {plazaSeleccionada.maxDiscount.toLocaleString()})</span>
                    )}
                  </p>
                )}
              </div>

              {/* Paso 2: instrucción */}
              {plazaSeleccionada && !yaGiro && (
                <p className="text-sm font-semibold text-white/70">
                  Paso 2 — Gira la ruleta y descubre tu premio →
                </p>
              )}

              {/* Ya giró — aviso */}
              {yaGiro && !mostrarGracias && (
                <div className="rounded-xl border border-accent/40 bg-black/30 px-5 py-4 text-sm text-white/90 max-w-sm">
                  <p className="font-bold text-accent mb-1">¡Ya participaste en esta ruleta!</p>
                  <p className="text-white/70">Cada persona puede girar una sola vez. Si ya llenaste el formulario, un asesor se contactará contigo pronto.</p>
                </div>
              )}
            </div>

            {/* Columna derecha: ruleta */}
            <div className="flex items-end justify-center">
              <RouletteCanvas
                config={config}
                premios={premiosActivos}
                onPremio={handlePremio}
                disabled={plazaSeleccionada === null || yaGiro}
                disabledReason={yaGiro ? 'Ya participaste' : 'Elige tu ubicación primero'}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Barra términos */}
      <div className="terminos-bar">
        <div className="terminos-bar__inner">
          <span>*Términos del Juego</span>
        </div>
      </div>

      {/* Footer */}
      <FooterMenorca />

      {/* Modal: reclamar premio */}
      <Modal
        open={premioPendiente !== null}
        labelledBy="modal-premio-title"
        className="max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
          {/* Lado izquierdo — premio */}
          <div className="modal-prize-panel flex flex-col items-center justify-center gap-4 p-8 relative overflow-hidden">
            {/* Estrellas decorativas */}
            <span className="modal-star modal-star--tl">✦</span>
            <span className="modal-star modal-star--tr">✦</span>
            <span className="modal-star modal-star--bl">✦</span>
            <span className="modal-star modal-star--br">✦</span>
            <span className="modal-star modal-star--ml">✦</span>
            <span className="modal-star modal-star--mr">✦</span>
            <img src={config.ganasteImg} alt="Ganaste" className="max-w-[240px] relative z-10" />
            {premioPendiente && (
              <div className="relative z-10 flex flex-col items-center gap-2">
                <img src={premioPendiente.img} alt={premioPendiente.texto} className="max-w-[200px] drop-shadow-xl" />
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-accent text-3xl drop-shadow">★</span>
                  <span className="text-accent text-4xl drop-shadow">★</span>
                  <span className="text-accent text-3xl drop-shadow">★</span>
                </div>
              </div>
            )}
          </div>

          {/* Lado derecho — formulario */}
          <div className="p-8 md:p-10">
            <h4 id="modal-premio-title" className="mb-1 text-xl font-bold text-white">
              Ingresa los datos del participante
            </h4>
            <p className="mb-6 text-sm text-white/60">Completa el formulario para reclamar tu premio</p>
            <LeadForm
              config={config}
              plaza={plazaSeleccionada}
              premio={premioPendiente}
              onSuccess={handleFormSuccess}
            />
          </div>
        </div>
      </Modal>

      {/* Modal: gracias */}
      <Modal
        open={mostrarGracias}
        labelledBy="modal-gracias-title"
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white"
      >
        <div className="flex flex-col items-center gap-6 p-10 text-center">
          <img src={config.graciasImg} alt="Gracias por participar" className="max-w-[280px]" />
          <h4 id="modal-gracias-title" className="max-w-xs text-lg font-semibold text-primary">
            Uno de nuestros asesores te contactará para darte más información sobre tu promoción.
          </h4>
          <a
            href="https://menorca.pe"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:opacity-90 active:scale-95"
          >
            Explora nuestros proyectos
          </a>
        </div>
      </Modal>
    </>
  );
}
