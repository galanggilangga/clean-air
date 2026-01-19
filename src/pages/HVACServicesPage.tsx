import { motion } from 'framer-motion';
import { 
  Wind, Snowflake, Wrench, ClipboardCheck, Phone, 
  CheckCircle, Shield, ThermometerSun, 
  Calendar, Clock, Award, TrendingUp, Users, MapPin, Building2, Home, Factory
} from 'lucide-react';
import heroBg from '../assets/images/hero-6.webp';
import klimaImg from '../assets/images/hero-7.webp';
import rekuperacjaImg from '../assets/images/hero-8.webp';
import pompyImg from '../assets/images/hero-9.webp';

export default function HVACServicesPage() {
  const services = [
    {
      icon: Snowflake,
      title: 'Klimatyzacja',
      subtitle: 'Chłodzenie i ogrzewanie',
      description: 'Kompleksowa instalacja klimatyzacji dla domów, biur i obiektów przemysłowych. Nowoczesne urządzenia inwerterowe - chłodzenie latem, ogrzewanie zimą z najwyższą efektywnością energetyczną.',
      image: klimaImg,
      features: [
        'Klimatyzatory split i multi-split',
        'Klimatyzacja kanałowa i kasetonowa',
        'Systemy VRF/VRV dla dużych obiektów',
        'Klimatyzacja precyzyjna serwerowni',
      ],
    },
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
    {
      icon: ThermometerSun,
      title: 'Pompy Ciepła',
      subtitle: 'Ekologiczne i ekonomiczne ogrzewanie',
      description: 'Montaż nowoczesnych pomp ciepła powietrze-woda, gruntowych i hybrydowych. Efektywne ogrzewanie i chłodzenie z wykorzystaniem odnawialnych źródeł energii. Wysoki współczynnik COP.',
      image: pompyImg,
      features: [
        'Pompy ciepła powietrze-woda',
        'Pompy ciepła gruntowe i wodne',
        'Systemy hybrydowe z kotłem gazowym',
        'Pomoc w uzyskaniu dofinansowania',
      ],
    },
  ];

  const serviceTypes = [
    {
      icon: Wrench,
      title: 'Montaż',
      description: 'Profesjonalna instalacja klimatyzacji, rekuperacji i pomp ciepła z gwarancją do 5 lat.',
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
            alt="Instalacja klimatyzacji"
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
              <span className="text-emerald-400">Klimatyzacji, Rekuperacji i Pomp Ciepła</span>
            </p>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Klimatyzacja
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Rekuperacja</span>
                <br />Pompy Ciepła
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Kompleksowe usługi klimatyzacyjne, wentylacyjne i grzewcze dla domów, biur i przemysłu. 
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
                <span className="text-emerald-100 text-sm text-center">Bezpośredni numer do działu<br />Klimatyzacji, Rekuperacji i Pomp Ciepła</span>
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
              Kompleksowa obsługa klimatyzacji, rekuperacji i pomp ciepła - od projektu po serwis
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
            <p className="text-emerald-100">Klimatyzacja, rekuperacja i pompy ciepła dla każdego typu obiektu</p>
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

      {/* Main Services */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nasze Specjalizacje
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Trzy główne obszary, w których jesteśmy ekspertami
            </p>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index !== 0 ? 'mt-20' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white rounded-xl px-4 py-2 shadow-lg">
                    <service.icon className="w-6 h-6 text-emerald-600 inline mr-2" />
                    <span className="font-semibold text-slate-900">{service.title}</span>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-emerald-400 font-medium mb-4">{service.subtitle}</p>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
              Współpracujemy z wiodącymi producentami klimatyzacji, rekuperacji i pomp ciepła na świecie
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

      {/* Final CTA - Simple and Elegant */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Potrzebujesz Klimatyzacji, Rekuperacji lub Pompy Ciepła?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Skontaktuj się z nami. Bezpłatna wycena i profesjonalne doradztwo.
            </p>
            
            <div className="flex justify-center">
              <motion.a
                href="tel:+48987654321"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
              >
                <Phone className="w-7 h-7" />
                +48 987 654 321
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kraków i okolice
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Wycena w 24h
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Certyfikowani specjaliści
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
