import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, DollarSign, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Heart,
      title: 'Zdrowie i Bezpieczeństwo',
      color: 'from-rose-500 to-pink-500',
      items: [
        'Poprawa jakości powietrza',
        'Redukcja alergenów i pyłów',
        'Eliminacja pleśni i bakterii',
        'Mniejsze ryzyko chorób',
      ],
    },
    {
      icon: DollarSign,
      title: 'Oszczędności',
      color: 'from-emerald-500 to-teal-500',
      items: [
        'Redukcja kosztów energii 20-30%',
        'Dłuższa żywotność HVAC',
        'Mniejsze koszty serwisu',
        'Lepsza wydajność systemu',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Zgodność z Przepisami',
      color: 'from-indigo-500 to-violet-500',
      items: [
        'Wymagania Sanepid',
        'Standardy NADCA',
        'Redukcja ryzyka pożaru',
        'Dokumentacja dla inspekcji',
      ],
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Korzyści z Profesjonalnego Czyszczenia
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Inwestycja w czystość systemu wentylacyjnego przynosi wymierne korzyści
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700/80 transition-all duration-300 h-full border border-slate-700">
                <div className={`w-11 h-11 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
