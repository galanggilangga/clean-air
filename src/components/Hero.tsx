import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, FileCheck, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Shield, text: 'Certyfikowani' },
    { icon: Zap, text: 'Najnowsze Technologie' },
    { icon: Award, text: 'Gwarancja' },
    { icon: FileCheck, text: 'Pełna Dokumentacja' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159358/hvac-air-ventilation-heating-159358.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/70 to-blue-900/50"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Profesjonalne Czyszczenie i Dezynfekcja Systemów Wentylacyjnych
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
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
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold rounded-lg shadow-2xl flex items-center justify-center gap-2 group"
            >
              Zamów Bezpłatną Inspekcję
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('technology')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
            >
              Zobacz Technologie
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <badge.icon className="w-8 h-8 text-orange-400" />
                <span className="text-white font-semibold text-sm">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
