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
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: GraduationCap,
      title: 'Certyfikowany Zespół',
      description:
        'Nasi technicy przeszli specjalistyczne szkolenia i posiadają certyfikaty zgodne z międzynarodowymi standardami.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: ClipboardCheck,
      title: 'Proces Zgodny z NADCA',
      description:
        'Realizujemy pełny proces: Inspekcja → Czyszczenie → Dezynfekcja → Raport, zgodnie z wytycznymi NADCA.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: FileCheck,
      title: 'Gwarancja i Dokumentacja',
      description:
        'Dostarczamy szczegółowy raport PRZED i PO wraz z certyfikatem czyszczenia dla pełnej transparentności.',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Dlaczego My?
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Cztery kluczowe powody, dla których warto nam zaufać
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-slate-700/50 rounded-2xl p-5 hover:bg-slate-700 transition-all duration-300 h-full border border-slate-600">
                <div className={`w-11 h-11 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
