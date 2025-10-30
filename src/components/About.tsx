import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Building2, Award } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Building2, end: 20, suffix: '+', label: 'Zrealizowanych Projektów' },
    { icon: Users, end: 100, suffix: '%', label: 'Zadowolonych Klientów' },
    { icon: Award, end: 3, suffix: '+', label: 'Lat Doświadczenia' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kim Jesteśmy?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Jesteśmy specjalistami w dziedzinie czyszczenia i dezynfekcji przemysłowych systemów
              wentylacyjnych HVAC. Nasza misja to zapewnienie najwyższej jakości powietrza w
              obiektach komercyjnych i przemysłowych.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wykorzystujemy najnowocześniejszy sprzęt <strong>Rotobrush</strong> z USA oraz{' '}
              <strong>BOS CLEANTEC</strong> z Finlandii, które gwarantują skuteczne i bezpieczne
              czyszczenie systemów wentylacyjnych.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nasz zespół to wykwalifikowani i certyfikowani technicy z wieloletnim doświadczeniem,
              którzy realizują projekty zgodnie z międzynarodowymi standardami NADCA.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <CounterCard key={index} {...stat} isInView={isInView} delay={index * 0.2} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">
                    Certyfikowany Zespół Specjalistów
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Technicy przy pracy z Rotobrush i BOS CLEANTEC
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CounterCard({
  icon: Icon,
  end,
  suffix,
  label,
  isInView,
  delay,
}: {
  icon: any;
  end: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
      <div className="text-3xl font-bold text-gray-900 mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
}
