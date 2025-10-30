import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Eye, Filter } from 'lucide-react';

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const rotobrushFeatures = [
    { icon: Zap, text: 'System 2-w-1: Szczotkowanie + Odciąg' },
    { icon: Shield, text: 'Potężny odciąg 1208 m³/h' },
    { icon: Filter, text: 'Filtry HEPA - najwyższa czystość' },
    { icon: Eye, text: 'Roto-Vision: Kamera inspekcyjna HD' },
  ];

  const bosFeatures = [
    { icon: Shield, text: 'Fińska jakość i niezawodność' },
    { icon: Zap, text: 'Solidna konstrukcja przemysłowa' },
    { icon: Filter, text: 'Zgodność z dyrektywą maszynową WE' },
    { icon: Eye, text: 'Precyzyjne czyszczenie wszystkich typów kanałów' },
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nasze Technologie</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wykorzystujemy najnowocześniejszy sprzęt światowych liderów branży
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Rotobrush</h3>
                  <p className="text-orange-400 font-semibold">USA - BrushBeast System</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Amerykański system Rotobrush BrushBeast to najbardziej zaawansowana technologia
                czyszczenia kanałów wentylacyjnych na świecie. Łączy potężny odciąg z precyzyjnym
                szczotkowaniem w jednym urządzeniu.
              </p>

              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl mb-6 flex items-center justify-center border border-orange-400/30">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-300 font-semibold">Rotobrush BrushBeast</p>
                </div>
              </div>

              <div className="space-y-4">
                {rotobrushFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                  >
                    <feature.icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">BOS CLEANTEC</h3>
                  <p className="text-blue-400 font-semibold">Finlandia - Industrial System</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Fiński system BOS CLEANTEC reprezentuje najwyższą jakość europejskiego inżynieringu.
                Solidność i niezawodność konstrukcji sprawdzają się w najtrudniejszych warunkach
                przemysłowych.
              </p>

              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-6 flex items-center justify-center border border-blue-400/30">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-300 font-semibold">BOS CLEANTEC System</p>
                </div>
              </div>

              <div className="space-y-4">
                {bosFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                  >
                    <feature.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
