import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TabNavigation from '../components/TabNavigation';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function MainLayout() {
  const location = useLocation();
  const isHVACPage = location.pathname === '/klimatyzacja';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <TabNavigation />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      {!isHVACPage && <ContactSection />}
      <Footer />
    </div>
  );
}
