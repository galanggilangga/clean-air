import { motion } from 'framer-motion';
import { Users, Building2, Award, Target, Eye, Heart, Shield, Zap, Filter, CheckCircle, Search, Brush, Droplets, FileText } from 'lucide-react';
import heroBg from '../assets/images/hero-6.webp';
import zespolImg from '../assets/images/hero-3.webp';
import rotobrushImg from '../assets/images/rotobrush.png';
import boscleantecImg from '../assets/images/boscleantec.png';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function AboutPage() {
  const stats = [
    { icon: Building2, value: '20+', label: 'Zrealizowanych Projektów' },
    { icon: Users, value: '100%', label: 'Zadowolonych Klientów' },
    { icon: Award, value: '3+', label: 'Lat Doświadczenia' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Profesjonalizm',
      description: 'Każdy projekt realizujemy z najwyższą starannością, dbając o każdy szczegół.',
    },
    {
      icon: Eye,
      title: 'Transparentność',
      description: 'Dokumentujemy cały proces - przed i po czyszczeniu, zapewniając pełną przejrzystość.',
    },
    {
      icon: Heart,
      title: 'Troska o zdrowie',
      description: 'Nasze usługi poprawiają jakość powietrza, chroniąc zdrowie pracowników i klientów.',
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo',
      description: 'Stosujemy certyfikowane technologie i preparaty, bezpieczne dla ludzi i środowiska.',
    },
  ];

  const rotobrushFeatures = [
    { icon: Zap, text: 'System 2-w-1: Szczotkowanie + Odciąg' },
    { icon: Shield, text: 'Potężny odciąg 1208 m³/h' },
    { icon: Filter, text: 'Filtry HEPA - najwyższa czystość' },
    { icon: Eye, text: 'Roto-Vision: Kamera inspekcyjna HD' },
  ];

  const bosFeatures = [
    { icon: Shield, text: 'Fińska jakość i niezawodność' },
    { icon: Zap, text: 'Solidna konstrukcja przemysłowa' },
    { icon: Filter, text: 'Zgodność z dyrektywą maszynową WE' },
    { icon: Eye, text: 'Precyzyjne czyszczenie wszystkich typów kanałów' },
  ];

  const rotobrushSpecs = [
    { label: 'Wydajność odciągu', value: '1208 m³/h' },
    { label: 'Moc silnika', value: '1,5 kW' },
    { label: 'Długość węża', value: 'do 15m' },
    { label: 'Średnica szczotek', value: '150-600mm' },
  ];

  const bosSpecs = [
    { label: 'Typ', value: 'Przemysłowy' },
    { label: 'Certyfikacja', value: 'CE / WE' },
    { label: 'Zastosowanie', value: 'Kanały okrągłe i prostokątne' },
    { label: 'Wydajność', value: 'Wysokowydajna' },
  ];

  const steps = [
    { icon: Search, number: '01', title: 'Inspekcja', description: 'Kamera HD ocenia stan kanałów', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, number: '02', title: 'Przygotowanie', description: 'System podciśnienia i zabezpieczenia', color: 'from-blue-500 to-cyan-500' },
    { icon: Brush, number: '03', title: 'Czyszczenie', description: 'Rotobrush + BOS CLEANTEC', color: 'from-orange-500 to-amber-500' },
    { icon: Droplets, number: '04', title: 'Dezynfekcja', description: 'Preparaty eliminujące 99.9% patogenów', color: 'from-green-500 to-emerald-500' },
    { icon: FileText, number: '05', title: 'Raport', description: 'Dokumentacja PRZED/PO + certyfikat', color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kim Jesteśmy?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Jesteśmy zespołem pasjonatów czystego powietrza, specjalizujących się w profesjonalnym 
              czyszczeniu i dezynfekcji przemysłowych systemów wentylacyjnych.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-slate-700/50 rounded-2xl border border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-indigo-400 mb-2">{stat.value}</p>
                <p className="text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Nasza Misja</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Naszą misją jest zapewnienie najwyższej jakości powietrza w obiektach komercyjnych 
                i przemysłowych poprzez profesjonalne czyszczenie i dezynfekcję systemów wentylacyjnych.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Wykorzystujemy najnowocześniejszy sprzęt <strong className="text-white">Rotobrush</strong> z USA oraz{' '}
                <strong className="text-white">BOS CLEANTEC</strong> z Finlandii, które gwarantują skuteczne i bezpieczne 
                czyszczenie systemów wentylacyjnych.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Nasz zespół to wykwalifikowani i certyfikowani technicy z wieloletnim doświadczeniem, 
                którzy realizują projekty zgodnie z międzynarodowymi standardami.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
                <img 
                  src={zespolImg} 
                  alt="Certyfikowany Zespół Specjalistów" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rotobrush Section */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Rotobrush</h2>
                  <p className="text-orange-400 font-semibold">USA - BrushBeast System</p>
                </div>
              </div>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Amerykański system Rotobrush BrushBeast to najbardziej zaawansowana technologia
                czyszczenia kanałów wentylacyjnych na świecie. Łączy potężny odciąg z precyzyjnym
                szczotkowaniem w jednym urządzeniu, gwarantując najwyższą skuteczność.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {rotobrushSpecs.map((spec, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                    <p className="text-sm text-slate-400 mb-1">{spec.label}</p>
                    <p className="text-xl font-bold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {rotobrushFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 rounded-lg p-4"
                  >
                    <feature.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600">
                <img 
                  src={rotobrushImg} 
                  alt="Rotobrush BrushBeast" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOS CLEANTEC Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center border border-slate-700">
                <img 
                  src={boscleantecImg} 
                  alt="BOS CLEANTEC" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold">BOS CLEANTEC</h2>
                  <p className="text-indigo-400 font-semibold">Finlandia - Przemysłowa Jakość</p>
                </div>
              </div>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Fiński system BOS CLEANTEC to synonim niezawodności i przemysłowej jakości.
                Sprzęt spełnia najwyższe europejskie standardy i jest idealny do czyszczenia
                dużych obiektów przemysłowych i komercyjnych.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {bosSpecs.map((spec, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-slate-700">
                    <p className="text-sm text-slate-400 mb-1">{spec.label}</p>
                    <p className="text-xl font-bold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {bosFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-slate-700"
                  >
                    <feature.icon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Our Technology */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Dlaczego Nasze Technologie?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Łączymy amerykańską innowacyjność z europejską precyzją
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { title: 'Najwyższa Skuteczność', description: 'Usuwamy 99.9% zanieczyszczeń' },
              { title: 'Bezpieczeństwo', description: 'Certyfikaty CE i normy UE' },
              { title: 'Dokumentacja', description: 'Inspekcja wideo PRZED i PO' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-slate-700/50 rounded-2xl border border-slate-600"
              >
                <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Jak Pracujemy?</h2>
            <p className="text-slate-400">5-etapowy proces zgodny ze standardami NADCA</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-5 h-full flex flex-col items-center text-center text-white shadow-lg`}>
                  <span className="text-2xl font-bold opacity-50 mb-2">{step.number}</span>
                  <step.icon className="w-8 h-8 mb-2" />
                  <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-white/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* NADCA Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 mb-4">Zgodność ze standardami</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['ACR Standard', 'HVAC Inspection', 'NADCA Guidelines'].map((std, i) => (
                <div key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white text-sm font-medium">
                  {std}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zobacz Efekty Naszej Pracy
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Porównanie stanu kanału wentylacyjnego przed i po profesjonalnym czyszczeniu
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />
          </div>

          {/* Stats below slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
          >
            {[
              { value: '99.9%', label: 'Usunięte zanieczyszczenia' },
              { value: '100%', label: 'Dokumentacja foto/video' },
              { value: '2 lata', label: 'Gwarancja jakości' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-indigo-400">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Nasze Wartości</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Zasady, którymi kierujemy się każdego dnia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-700 transition-all duration-300 border border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
