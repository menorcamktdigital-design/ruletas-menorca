import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../src/assets/styles/main.css';
import { App } from '../../src/App';
import { config } from './config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App config={config} />
  </StrictMode>,
);
