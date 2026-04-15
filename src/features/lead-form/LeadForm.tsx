import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { CampaignConfig, Plaza, Premio } from '../../types';
import { enviarLead } from '../../api/lead';
import { getUTMs } from '../../lib/utm';

interface LeadFormProps {
  config: CampaignConfig;
  plaza: Plaza | null;   // ya seleccionada antes de girar
  premio: Premio | null;
  onSuccess: () => void;
}

interface FormValues {
  nombre: string;
  dni: string;
  celular: string;
  email: string;
  terminosCondiciones: boolean;
  politicaPrivacidad: boolean;
  consentimientoClientes: boolean;
}

export function LeadForm({ config, plaza, premio, onSuccess }: LeadFormProps) {
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: 'onSubmit' });

  async function onSubmit(data: FormValues) {
    setServerError('');
    try {
      const utms = getUTMs();
      await enviarLead({
        premio: premio?.texto ?? '',
        plaza: String(plaza?.id ?? ''),
        nombre: data.nombre,
        dni: data.dni,
        celular: data.celular,
        email: data.email,
        utmSource: config.utmSource,
        utmMedium: utms.utm_medium,
        utmCampaign: utms.utm_campaign,
        utmContent: utms.utm_content,
        utmTerm: utms.utm_term,
      });
      onSuccess();
    } catch (err) {
      console.error(err);
      setServerError('Ocurrió un error al enviar. Por favor inténtalo de nuevo.');
    }
  }

  return (
    <form
      id="form-ruleta"
      autoComplete="on"
      className="flex flex-col gap-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Proyecto seleccionado — solo lectura */}
      {plaza && (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-white/70">Proyecto de interés</span>
          <div className="input-dark opacity-80 cursor-default select-none text-gray-500">{plaza.label}</div>
        </div>
      )}

      {/* Nombre */}
      <div className="flex flex-col gap-1">
        <label htmlFor="field-nombre" className="text-sm font-medium text-white/75">
          Nombre completo <span className="text-accent">*</span>
        </label>
        <input
          id="field-nombre"
          type="text"
          autoComplete="given-name"
          placeholder="Tu nombre"
          className="input-dark"
          {...register('nombre', {
            required: 'Ingresa tu nombre',
            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
          })}
        />
        {errors.nombre && <p className="text-xs text-red-300">{errors.nombre.message}</p>}
      </div>

      {/* DNI */}
      <div className="flex flex-col gap-1">
        <label htmlFor="field-dni" className="text-sm font-medium text-white/75">
          DNI <span className="text-accent">*</span>
        </label>
        <input
          id="field-dni"
          type="text"
          inputMode="numeric"
          placeholder="12345678"
          className="input-dark"
          {...register('dni', {
            required: 'Ingresa tu DNI',
            pattern: { value: /^\d{8}$/, message: 'DNI debe tener 8 dígitos' },
          })}
        />
        {errors.dni && <p className="text-xs text-red-300">{errors.dni.message}</p>}
      </div>

      {/* Celular */}
      <div className="flex flex-col gap-1">
        <label htmlFor="field-celular" className="text-sm font-medium text-white/75">
          Celular <span className="text-accent">*</span>
        </label>
        <input
          id="field-celular"
          type="tel"
          inputMode="numeric"
          placeholder="987654321"
          className="input-dark"
          {...register('celular', {
            required: 'Ingresa tu celular',
            pattern: { value: /^\d{9}$/, message: 'Celular debe tener 9 dígitos' },
          })}
        />
        {errors.celular && <p className="text-xs text-red-300">{errors.celular.message}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="field-email" className="text-sm font-medium text-white/75">
          Correo electrónico <span className="text-accent">*</span>
        </label>
        <input
          id="field-email"
          type="email"
          autoComplete="email"
          placeholder="tucorreo@ejemplo.com"
          className="input-dark"
          {...register('email', {
            required: 'Ingresa tu correo',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo no válido' },
          })}
        />
        {errors.email && <p className="text-xs text-red-300">{errors.email.message}</p>}
      </div>

      {/* Checkboxes de consentimiento */}
      <div className="flex flex-col gap-2 mt-1">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
            {...register('terminosCondiciones', { required: 'Debes aceptar los términos y condiciones' })}
          />
          <span className="text-xs text-white/80 leading-snug">
            He leído y acepto los{' '}
            <a href="https://menorca.pe/legal/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:opacity-80">
              Términos y condiciones
            </a>{' '}
            y la{' '}
            <a href="https://menorca.pe/wp-content/uploads/2025/07/politica_de_privacidad.pdf" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:opacity-80">
              Política de Privacidad
            </a>
          </span>
        </label>
        {errors.terminosCondiciones && (
          <p className="text-xs text-red-300 pl-6">{errors.terminosCondiciones.message}</p>
        )}

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
            {...register('politicaPrivacidad', { required: 'Debes aceptar la política de privacidad' })}
          />
          <span className="text-xs text-white/80 leading-snug">
            He leído y acepto el{' '}
            <a href="https://menorca.pe/consentimiento-de-cliente-potencial/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:opacity-80">
              Consentimiento de Clientes potenciales
            </a>
          </span>
        </label>
        {errors.politicaPrivacidad && (
          <p className="text-xs text-red-300 pl-6">{errors.politicaPrivacidad.message}</p>
        )}

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
            {...register('consentimientoClientes')}
          />
          <span className="text-xs text-white/80 leading-snug">
            Autorización a Menorca para fines publicitarios y/o comerciales según política de privacidad
          </span>
        </label>
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-300">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full cursor-pointer rounded-full bg-accent px-6 py-3 text-base font-bold text-gray-900 transition hover:opacity-90 active:scale-95 disabled:opacity-60"
      >
        {isSubmitting ? 'Enviando...' : 'Reclamar mi premio'}
      </button>
    </form>
  );
}
