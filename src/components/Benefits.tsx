import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, DollarSign, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Heart,
      title: 'Zdrowie i Bezpieczeństwo',
      color: 'from-red-500 to-pink-500',
      items: [
        'Poprawa jakości powietrza wewnętrznego',
        'Redukcja alergenów i pyłów',
        'Eliminacja pleśni, bakterii i wirusów',
        'Zmniejszenie ryzyka chorób układu oddechowego',
      ],
    },
    {
      icon: DollarSign,
      title: 'Oszczędności i Efektywność',
      color: 'from-green-500 to-emerald-500',
      items: [
        'Redukcja kosztów energii o 20-30%',
        'Wydłużenie żywotności systemu HVAC',
        'Mniejsze koszty napraw i serwisu',
        'Lepsza wydajność klimatyzacji i wentylacji',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Zgodność i Bezpieczeństwo',
      color: 'from-blue-500 to-indigo-500',
      items: [
        'Spełnienie wymagań Sanepid',
        'Zgodność ze standardami NADCA',
        'Redukcja ryzyka pożaru',
        'Pełna dokumentacja dla inspekcji',
      ],
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
            Korzyści z Profesjonalnego Czyszczenia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inwestycja w czystość systemu wentylacyjnego to korzyści na wielu poziomach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${benefit.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
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
