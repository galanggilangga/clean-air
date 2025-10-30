import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Wind, Sparkles } from 'lucide-react';
import BeforeAfter from './BeforeAfter';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Video,
      title: 'Inspekcja Wideo Systemów Wentylacyjnych',
      description:
        'Przeprowadzamy dokładną inspekcję wideo przy użyciu kamery Roto-Vision Video, która pozwala na precyzyjną ocenę stanu wnętrza kanałów.',
      features: [
        'Kamera HD z oświetleniem LED',
        'Dokumentacja wideo PRZED czyszczeniem',
        'Szczegółowy raport ze zdjęciami',
        'Ocena stopnia zanieczyszczenia',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wind,
      title: 'Czyszczenie Mechaniczne Kanałów',
      description:
        'Wykorzystujemy technologie Rotobrush BrushBeast i BOS CLEANTEC do mechanicznego usunięcia zanieczyszczeń ze wszystkich komponentów systemu.',
      features: [
        'Potężny system odciągowy (1208 m³/h)',
        'Szczotki obrotowe dopasowane do kanałów',
        'Czyszczenie central, krat, nawiewników',
        'Filtracja HEPA zebranych zanieczyszczeń',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Dezynfekcja i Sanityzacja',
      description:
        'Końcowy etap to profesjonalna dezynfekcja całego systemu preparatami certyfikowanymi EPA/UE, eliminującymi patogeny i nieprzyjemne zapachy.',
      features: [
        'Preparaty EPA/UE - bezpieczne dla ludzi',
        'Eliminacja 99.9% bakterii i wirusów',
        'Usuwanie pleśni i grzybów',
        'Neutralizacja nieprzyjemnych zapachów',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nasze Usługi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowe rozwiązania dla systemów wentylacyjnych HVAC
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <service.icon className="w-20 h-20 text-white" />
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Before / After showcase placed after services */}
        <div className="mt-12">
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}
