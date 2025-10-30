import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cross, Factory, Warehouse, Utensils, Building2, School } from 'lucide-react';

export default function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const applications = [
    {
      icon: Cross,
      title: 'Placówki Medyczne',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Factory,
      title: 'Przemysł',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Warehouse,
      title: 'Centra Logistyczne',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Utensils,
      title: 'HoReCa',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Building2,
      title: 'Biura i Obiekty Komercyjne',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: School,
      title: 'Edukacja i Opieka',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="applications" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Zastosowania</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesjonalne czyszczenie systemów HVAC dla każdej branży
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${app.gradient} rounded-2xl p-8 h-48 flex flex-col items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <app.icon className="w-16 h-16 mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-center relative z-10">{app.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
