export interface Premio {
  texto: string;
  img: string;
}

export interface Plaza {
  label: string;
  id: number;
  premios: Premio[];
  maxDiscount?: number;
}

export interface CampaignConfig {
  title: string;
  description: string;
  heading: string;
  subheading: string;
  fechaVigencia?: string;
  bgImage?: string;
  ruletaImg: string;
  ganasteImg: string;
  graciasImg: string;
  logoImg?: string;
  pinImg: string;
  botonGiraImg: string;
  sonidoUrl: string;
  utmSource: string;
  premios: Premio[];  // premios globales (fallback si la plaza no tiene los propios)
  plazas: Plaza[];
}
