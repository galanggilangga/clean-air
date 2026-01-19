import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Wind, Snowflake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TabNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const tabs = [
    { label: 'Start', path: '/' },
    { label: 'O nas', path: '/o-nas' },
    { label: 'Usługi', path: '/uslugi' },
    { label: 'Technologie', path: '/technologie' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-900/10'
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top bar with logo and contact */}
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25"
            >
              <Wind className="w-5 h-5 text-white" />
            </motion.div>
            <h1 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              Clean Air Specialists
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* Highlighted Klimatyzacja Tab */}
            <NavLink
              to="/klimatyzacja"
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all ml-2 whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25'
                    : 'text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30'
                }`
              }
            >
              <Snowflake className="w-3.5 h-3.5 xl:w-4 xl:h-4 flex-shrink-0" />
              <span className="hidden 2xl:inline">Klimatyzacja • Rekuperacja • Pompy</span>
              <span className="hidden xl:inline 2xl:hidden">Klima • Rekuperacja</span>
              <span className="xl:hidden">Klima</span>
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+48123456789"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+48 123 456 789</span>
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
            >
              Bezpłatna Wycena
            </motion.a>
          </div>

          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-slate-300 hover:bg-white/5'
                    }`
                  }
                >
                  {tab.label}
                </NavLink>
              ))}
              <NavLink
                to="/klimatyzacja"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500'
                      : 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                  }`
                }
              >
                <Snowflake className="w-5 h-5" />
                Klimatyzacja • Rekuperacja • Pompy
              </NavLink>
              <hr className="my-2 border-slate-800" />
              <a
                href="tel:+48123456789"
                className="flex items-center gap-3 px-4 py-3 text-slate-300"
              >
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="font-semibold">+48 123 456 789</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl"
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
