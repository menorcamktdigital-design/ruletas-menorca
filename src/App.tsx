import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RuletaPage } from './features/roulette/RuletaPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { config as feriaConfig } from '../feria/config';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/feria" replace />} />
        <Route path="/feria" element={<RuletaPage config={feriaConfig} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
