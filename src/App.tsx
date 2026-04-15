import type { CampaignConfig } from './types';
import { RuletaPage } from './features/roulette/RuletaPage';

interface AppProps {
  config: CampaignConfig;
}

export function App({ config }: AppProps) {
  return <RuletaPage config={config} />;
}
