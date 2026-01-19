import { motion } from 'framer-motion';
import { Video, Wind, Sparkles, FileText, Shield, CheckCircle, Cross, Factory, Warehouse, Utensils, Building2, School } from 'lucide-react';
import heroBg from '../assets/images/hero-6.webp';

export default function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: 'Inspekcja Wideo',
      description: 'Dokładna inspekcja kamerą Roto-Vision Video HD z oświetleniem LED.',
      features: ['Kamera HD', 'Raport ze zdjęciami', 'Ocena zanieczyszczenia'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wind,
      title: 'Czyszczenie Mechaniczne',
      description: 'Rotobrush BrushBeast i BOS CLEANTEC do gruntownego czyszczenia.',
      features: ['Odciąg 1208 m³/h', 'Szczotki obrotowe', 'Filtracja HEPA'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Dezynfekcja',
      description: 'Preparaty certyfikowane EPA/UE eliminujące 99.9% patogenów.',
      features: ['Bezpieczne preparaty', 'Eliminacja bakterii', 'Usuwanie pleśni'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      title: 'Dokumentacja',
      description: 'Pełna dokumentacja z nagraniami wideo i certyfikatem.',
      features: ['Raport PRZED/PO', 'Certyfikat', 'Zalecenia'],
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  const applications = [
    { icon: Cross, title: 'Placówki Medyczne', description: 'Szpitale, kliniki, laboratoria', gradient: 'from-red-500 to-pink-500' },
    { icon: Factory, title: 'Przemysł', description: 'Fabryki, hale produkcyjne', gradient: 'from-orange-500 to-amber-500' },
    { icon: Warehouse, title: 'Logistyka', description: 'Magazyny, centra dystrybucji', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Utensils, title: 'HoReCa', description: 'Hotele, restauracje, bary', gradient: 'from-green-500 to-emerald-500' },
    { icon: Building2, title: 'Biura', description: 'Biurowce, centra handlowe', gradient: 'from-blue-500 to-cyan-500' },
    { icon: School, title: 'Edukacja', description: 'Szkoły, przedszkola, żłobki', gradient: 'from-purple-500 to-pink-500' },
  ];

  const additionalServices = [
    'Czyszczenie central wentylacyjnych',
    'Wymiana filtrów HVAC',
    'Czyszczenie nawiewników',
    'Pomiary wydajności',
    'Audyt energetyczny',
    'Przeglądy okresowe',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBg}
            alt="Usługi wentylacyjne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Usługi & Zastosowania
            </h1>
            <p className="text-lg text-slate-300">
              Kompleksowe czyszczenie wentylacji dla każdej branży
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-10"
          >
            Nasze Usługi
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-700/50 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 border border-slate-600"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Zastosowania</h2>
            <p className="text-slate-400">Profesjonalne czyszczenie dla każdej branży</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${app.gradient} rounded-2xl p-5 h-full flex flex-col items-center justify-center text-center text-white shadow-lg hover:shadow-xl transition-all`}>
                  <app.icon className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-sm mb-1">{app.title}</h3>
                  <p className="text-xs text-white/80">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white text-center mb-8"
          >
            Usługi Dodatkowe
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 bg-slate-700/50 rounded-xl p-4 border border-slate-600"
              >
                <Shield className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
