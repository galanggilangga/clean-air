import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologyPage from './pages/TechnologyPage';
import HVACServicesPage from './pages/HVACServicesPage';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StartPage />} />
          <Route path="o-nas" element={<AboutPage />} />
          <Route path="uslugi" element={<ServicesPage />} />
          <Route path="technologie" element={<TechnologyPage />} />
          <Route path="rekuperacja" element={<HVACServicesPage />} />
        </Route>
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
