const SPERANT_URL = 'https://apirest.menorca.services/web/crearlead_ruleta';

export interface LeadPayload {
  premio: string;
  plaza: string;
  nombre: string;
  dni: string;
  celular: string;
  email: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export async function enviarLead(data: LeadPayload): Promise<unknown> {
  const payload = {
    lea_cliente_nombre: data.nombre,
    lea_cliente_apellido: '',
    lea_cliente_documento_numero: data.dni,
    lea_cliente_celular: data.celular,
    lea_cliente_email: data.email,
    lea_cliente_mensaje: `Participo en la ruleta y gano: ${data.premio}`,
    lea_proyectos: Number(data.plaza),
    pry_nombre: '',
    utm_source: data.utmSource || 'ruleta',
    utm_medium: data.utmMedium || 'organic',
    utm_campaign: data.utmCampaign || '',
    utm_content: data.utmContent || '',
    utm_term: data.utmTerm || '',
  };

  const response = await fetch(SPERANT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Sperant error: ${response.status}`);
  }

  return response.json();
}
