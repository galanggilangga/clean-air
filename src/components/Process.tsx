import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Shield, Brush, Droplets, FileText } from 'lucide-react';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Search,
      title: 'Inspekcja i Diagnostyka',
      description:
        'Przeprowadzamy szczegółową inspekcję wideo systemem Roto-Vision Video, oceniając stan kanałów i stopień zanieczyszczenia.',
    },
    {
      icon: Shield,
      title: 'Przygotowanie i Negative Pressure',
      description:
        'Podłączamy potężny system odciągowy i uszczelniamy system, tworząc ciśnienie ujemne dla bezpiecznej pracy.',
    },
    {
      icon: Brush,
      title: 'Mechaniczne Czyszczenie Agitacyjne',
      description:
        'Wykorzystujemy Rotobrush BrushBeast (1208 m³/h) i BOS CLEANTEC do gruntownego czyszczenia wszystkich komponentów.',
    },
    {
      icon: Droplets,
      title: 'Dezynfekcja i Sanityzacja',
      description:
        'Stosujemy certyfikowane preparaty, które eliminują 99.9% bakterii, wirusów, pleśni i innych patogenów.',
    },
    {
      icon: FileText,
      title: 'Raport i Dokumentacja',
      description:
        'Dostarczamy pełną dokumentację PRZED i PO z nagraniami wideo oraz Certyfikat czyszczenia dla Państwa archiwum.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jak Pracujemy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nasz 5-etapowy proces gwarantuje najwyższą jakość czyszczenia systemów wentylacyjnych
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
          </div>

          <div className="lg:flex lg:justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-12 lg:mb-0 lg:w-[18%]"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 shadow-xl relative z-10 border-4 border-white"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-500 mx-auto my-6"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
