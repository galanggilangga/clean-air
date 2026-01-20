import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wind, Wrench, ClipboardCheck, Phone, 
  CheckCircle, Shield, 
  Calendar, Clock, Award, TrendingUp, Users, MapPin, Building2, Home, Factory,
  X, ChevronLeft, ChevronRight, ZoomIn
} from 'lucide-react';
import heroBg from '../assets/images/hero-6.webp';
import rekuperacjaImg from '../assets/images/hero-8.webp';
import ContactSection from '../components/ContactSection';

// Import local images from implementations
const implementations = Object.values(import.meta.glob('../assets/images/implementations/*.webp', { eager: true, query: '?url', import: 'default' })) as string[];

export default function HVACServicesPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % implementations.length : null));
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + implementations.length) % implementations.length : null));
    }
  };

  const services = [
    {
      icon: Wind,
      title: 'Rekuperacja',
      subtitle: 'Wentylacja mechaniczna z odzyskiem ciepła',
      description: 'Profesjonalny montaż systemów rekuperacji zapewniających świeże, przefiltrowane powietrze przy minimalnych stratach energii. Odzysk ciepła nawet do 95%.',
      image: rekuperacjaImg,
      features: [
        'Centrale rekuperacyjne premium',
        'Projekt i dobór systemu',
        'Instalacja kanałów wentylacyjnych',
        'Automatyka i sterowanie Smart Home',
      ],
    },
  ];

  const serviceTypes = [
    {
      icon: Wrench,
      title: 'Montaż',
      description: 'Profesjonalna instalacja rekuperacji z gwarancją do 5 lat.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: ClipboardCheck,
      title: 'Serwis i Przeglądy',
      description: 'Regularne przeglądy, czyszczenie filtrów i konserwacja dla maksymalnej wydajności.',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Doradztwo i Audyt',
      description: 'Analiza potrzeb, dobór optymalnego rozwiązania i kalkulacja oszczędności energii.',
      color: 'from-cyan-500 to-sky-600',
    },
  ];

  const stats = [
    { value: '100+', label: 'Zrealizowanych projektów', icon: CheckCircle },
    { value: '10+', label: 'Lat doświadczenia', icon: Calendar },
    { value: '24h', label: 'Czas reakcji serwisu', icon: Clock },
  ];

  const clientTypes = [
    { icon: Home, title: 'Domy i mieszkania', description: 'Indywidualne rozwiązania dla klientów prywatnych' },
    { icon: Building2, title: 'Biura i hotele', description: 'Systemy dla obiektów komercyjnych' },
    { icon: Factory, title: 'Przemysł i magazyny', description: 'Rozwiązania dla dużych obiektów' },
  ];

  const benefits = [
    { icon: Shield, text: 'Gwarancja do 5 lat' },
    { icon: Award, text: 'Certyfikat F-gaz' },
    { icon: Calendar, text: 'Elastyczne terminy' },
    { icon: Clock, text: 'Szybka realizacja' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Instalacja rekuperacji"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Floating phone button - center right area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 right-[15%] lg:right-[20%] text-center hidden lg:block"
          >
            <motion.a
              href="tel:+48987654321"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-2xl font-bold rounded-2xl shadow-2xl shadow-emerald-500/40 mb-3"
            >
              <Phone className="w-7 h-7" />
              +48 987 654 321
            </motion.a>
            <p className="text-sm text-white/80 font-medium max-w-[220px] mx-auto">
              Bezpośredni numer do działu<br />
              <span className="text-emerald-400">Rekuperacji</span>
            </p>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Rekuperacja</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Kompleksowe usługi wentylacyjne dla domów, biur i przemysłu. 
                Profesjonalny montaż, serwis i doradztwo od certyfikowanych specjalistów.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                  >
                    <benefit.icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-medium text-white">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Phone Number */}
              <motion.a
                href="tel:+48987654321"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="lg:hidden mt-6 flex flex-col items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg shadow-emerald-500/30"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-white" />
                  <span className="text-xl font-bold text-white">+48 987 654 321</span>
                </div>
                <span className="text-emerald-100 text-sm text-center">Bezpośredni numer do działu<br />Rekuperacji</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Types */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zakres Naszych Usług
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Kompleksowa obsługa rekuperacji - od projektu po serwis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-slate-700/50 rounded-2xl p-6 hover:bg-slate-700 hover:shadow-xl transition-all duration-300 h-full border border-slate-600 hover:border-emerald-500/50">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Obsługujemy Wszystkie Sektory</h3>
            <p className="text-emerald-100">Systemy rekuperacji dla każdego typu obiektu</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all"
              >
                <client.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{client.title}</h4>
                <p className="text-emerald-100 text-sm">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizations Gallery */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nasze Realizacje
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Zobacz jakość naszej pracy w praktyce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementations.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-zoom-in shadow-xl border border-white/5 bg-slate-900"
              >
                <img
                  src={img}
                  alt={`Realizacja ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 border border-white/20">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full z-50 hover:bg-white/10"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button
              onClick={showPrevImage}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all z-50 border border-white/10"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full"
            >
              <img
                src={implementations[selectedImageIndex]}
                alt="Realizacja pełny ekran"
                className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            <button
              onClick={showNextImage}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all z-50 border border-white/10"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 text-sm md:text-base font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
              {selectedImageIndex + 1} / {implementations.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brands - Premium Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Instalujemy i Serwisujemy m.in.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Współpracujemy z wiodącymi producentami rekuperacji na świecie
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Daikin', 'Mitsubishi Electric', 'LG', 'Samsung', 'Viessmann', 
              'Bosch', 'Panasonic', 'Fujitsu', 'Toshiba', 'Vaillant', 
              'NIBE', 'Rotenso', 'Zehnder', 'Brink', 'Pro-Vent'
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800 rounded-xl px-6 py-4 text-center border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-default"
              >
                <p className="font-bold text-white">{brand}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-slate-400 mt-8"
          >
            ...oraz wiele innych marek. Zapytaj nas o konkretny model!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
