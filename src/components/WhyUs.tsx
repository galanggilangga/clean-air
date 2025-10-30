import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, GraduationCap, ClipboardCheck, FileCheck } from 'lucide-react';

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: Cpu,
      title: 'Najnowocześniejsze Technologie',
      description:
        'Wykorzystujemy sprzęt Rotobrush BrushBeast oraz BOS CLEANTEC - liderów w branży czyszczenia systemów HVAC.',
    },
    {
      icon: GraduationCap,
      title: 'Certyfikowany, Doświadczony Zespół',
      description:
        'Nasi technicy przeszli specjalistyczne szkolenia i posiadają certyfikaty zgodne z międzynarodowymi standardami.',
    },
    {
      icon: ClipboardCheck,
      title: 'Proces Zgodny z NADCA',
      description:
        'Realizujemy pełny proces: Inspekcja → Czyszczenie → Dezynfekcja → Raport, zgodnie z wytycznymi NADCA.',
    },
    {
      icon: FileCheck,
      title: 'Gwarancja Jakości i Dokumentacja',
      description:
        'Dostarczamy szczegółowy raport PRZED i PO wraz z certyfikatem czyszczenia dla pełnej transparentności.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dlaczego My?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cztery kluczowe powody, dla których warto nam zaufać
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
