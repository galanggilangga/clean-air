import { motion } from 'framer-motion';
import { Users, Building2, Award, Target, Eye, Heart, Shield } from 'lucide-react';
import heroBg from '../assets/images/hero-6.webp';
import zespolImg from '../assets/images/hero-3.webp';

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
