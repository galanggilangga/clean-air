import { useState, useEffect } from 'react';
import { Menu, X, Phone, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'O nas', id: 'about' },
    { label: 'Proces', id: 'process' },
    { label: 'Usługi', id: 'services' },
    { label: 'Technologie', id: 'technology' },
    { label: 'Zastosowania', id: 'applications' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <Wind className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Clean Air Specialists
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Profesjonalne Czyszczenie HVAC
              </p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+48123456789" className={`flex items-center gap-2 font-semibold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <Phone className="w-5 h-5" />
              +48 123 456 789
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Bezpłatna Wycena
            </motion.button>
          </div>

          <button
            className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+48123456789" className="flex items-center gap-2 py-2 text-gray-900 font-semibold">
                <Phone className="w-5 h-5" />
                +48 123 456 789
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg"
              >
                Bezpłatna Wycena
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
