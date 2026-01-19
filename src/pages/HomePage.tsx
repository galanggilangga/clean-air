import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, FileCheck, Zap, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const trustBadges = [
    { icon: Shield, text: 'Certyfikowani' },
    { icon: Zap, text: 'Najnowsze Technologie' },
    { icon: Award, text: 'Gwarancja' },
    { icon: FileCheck, text: 'Pełna Dokumentacja' },
  ];

  const quickLinks = [
    { title: 'Poznaj nasze usługi', description: 'Kompleksowe czyszczenie systemów HVAC', path: '/uslugi', color: 'from-blue-500 to-blue-700' },
    { title: 'Zobacz technologie', description: 'Rotobrush & BOS CLEANTEC', path: '/technologie', color: 'from-emerald-500 to-emerald-700' },
    { title: 'Jak pracujemy?', description: 'Nasz sprawdzony proces', path: '/proces', color: 'from-purple-500 to-purple-700' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159358/hvac-air-ventilation-heating-159358.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/70 to-blue-900/50"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-200 text-sm font-semibold mb-6 border border-white/20">
                🏆 Lider w branży od 10+ lat
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Profesjonalne Czyszczenie
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Systemów Wentylacyjnych
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Gwarantujemy czyste powietrze dzięki technologiom{' '}
              <span className="font-bold text-orange-400">Rotobrush (USA)</span> i{' '}
              <span className="font-bold text-orange-400">BOS CLEANTEC (Finlandia)</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(245, 158, 11, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold rounded-xl shadow-2xl flex items-center justify-center gap-2 group"
              >
                Zamów Bezpłatną Inspekcję
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Zobacz Film
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <badge.icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">{badge.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Odkryj, jak możemy Ci pomóc
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompleksowe rozwiązania dla systemów wentylacyjnych każdego rodzaju
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="block h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${link.color} shadow-lg mb-6`}>
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all gap-2">
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Zrealizowanych projektów' },
              { value: '15+', label: 'Lat doświadczenia' },
              { value: '99%', label: 'Zadowolonych klientów' },
              { value: '24/7', label: 'Wsparcie techniczne' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
