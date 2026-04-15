import { useEffect, useRef } from 'react';
import type { CampaignConfig, Premio } from '../../types';
import { RouletteWheel } from './RouletteWheel';

interface RouletteCanvasProps {
  config: CampaignConfig;
  premios: Premio[];
  onPremio: (premio: Premio) => void;
  disabled?: boolean;
  disabledReason?: string;
}

export function RouletteCanvas({ config, premios, onPremio, disabled = false, disabledReason }: RouletteCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<RouletteWheel | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializar la ruleta al montar
  useEffect(() => {
    if (containerRef.current) {
      wheelRef.current = new RouletteWheel(containerRef.current, premios);
    }
  }, []);

  // Actualizar premios cuando cambia la plaza seleccionada
  useEffect(() => {
    wheelRef.current?.updatePremios(premios);
  }, [premios]);

  function handleSpin() {
    if (disabled) return;
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    wheelRef.current?.spin(onPremio);
  }

  return (
    <>
      <div className="roulette-wrapper">
        <div className={`roulette${disabled ? ' roulette--disabled' : ''}`} ref={containerRef}>
          <div
            className="spinner"
            style={{ backgroundImage: `url(${config.ruletaImg})` }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]" />
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
            <img
              src={config.pinImg}
              alt=""
              aria-hidden="true"
              className="w-10 -mt-2 drop-shadow-md"
            />
          </div>
          <button
            className="btn-gira"
            onClick={handleSpin}
            aria-label="Girar ruleta"
            disabled={disabled}
            title={disabled ? 'Primero elige tu ubicación de interés' : undefined}
          >
            <img src={config.botonGiraImg} alt="Gira y gana" />
          </button>
          {disabled && disabledReason && (
            <div className="roulette-disabled-overlay" aria-hidden="true">
              <span>{disabledReason}</span>
            </div>
          )}
        </div>
        {/* Base de soporte */}
        <div className="roulette-base">
          <div className="roulette-base__neck" />
          <div className="roulette-base__foot" />
        </div>
      </div>
      <audio ref={audioRef} src={config.sonidoUrl} preload="none" />
    </>
  );
}
