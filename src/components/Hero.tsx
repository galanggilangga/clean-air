import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, FileCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt="HVAC System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Profesjonalne Czyszczenie HVAC
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Czyste Powietrze
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"> Dla Twojego</span> Biznesu
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Profesjonalne czyszczenie i dezynfekcja systemów wentylacyjnych 
              z wykorzystaniem technologii <span className="text-indigo-400 font-semibold">Rotobrush</span> i <span className="text-indigo-400 font-semibold">BOS CLEANTEC</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-indigo-500/25 flex items-center justify-center gap-2 group"
              >
                Bezpłatna Wycena
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/technologie')}
                className="px-8 py-4 bg-white/5 backdrop-blur-md text-white text-lg font-semibold rounded-2xl border border-white/20 hover:bg-white/10 transition-colors"
              >
                Nasze Technologie
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <badge.icon className="w-5 h-5 text-indigo-400" />
                  <span className="text-slate-200 text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                alt="HVAC Cleaning"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-xl rounded-2xl p-5 border border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Certyfikat NADCA</p>
                    <p className="text-slate-400 text-sm">Międzynarodowy standard</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl p-5 shadow-xl shadow-indigo-500/25">
                <p className="text-white text-3xl font-bold">20+</p>
                <p className="text-indigo-100 text-sm">Projektów</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
