import { motion } from 'framer-motion';
import { Cross, Factory, Warehouse, Utensils, Building2, School, CheckCircle, ArrowRight } from 'lucide-react';

export default function ApplicationsPage() {
  const applications = [
    {
      icon: Cross,
      title: 'Placówki Medyczne',
      description: 'Szpitale, kliniki, gabinety lekarskie, laboratoria. Czyste powietrze jest kluczowe dla zdrowia pacjentów i personelu.',
      features: [
        'Redukcja ryzyka infekcji szpitalnych',
        'Zgodność z wymogami Sanepid',
        'Sterylność sal operacyjnych',
        'Ochrona wrażliwych pacjentów',
      ],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Factory,
      title: 'Przemysł',
      description: 'Fabryki, hale produkcyjne, centra przetwórcze. Zapewniamy czyste powietrze dla procesów produkcyjnych i pracowników.',
      features: [
        'Poprawa jakości produkcji',
        'Ochrona zdrowia pracowników',
        'Zgodność z normami BHP',
        'Redukcja ryzyka pożaru',
      ],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Warehouse,
      title: 'Centra Logistyczne',
      description: 'Magazyny, centra dystrybucji, hale logistyczne. Utrzymujemy odpowiednią jakość powietrza w dużych przestrzeniach.',
      features: [
        'Efektywna wentylacja dużych przestrzeni',
        'Kontrola wilgotności',
        'Ochrona towarów',
        'Komfort pracowników',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Utensils,
      title: 'HoReCa',
      description: 'Hotele, restauracje, kawiarnie, bary. Czyste powietrze to podstawa komfortu gości i bezpieczeństwa żywności.',
      features: [
        'Eliminacja zapachów kuchennych',
        'Zgodność z normami sanitarnymi',
        'Komfort gości',
        'Czystość przestrzeni kuchennych',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Building2,
      title: 'Biura i Obiekty Komercyjne',
      description: 'Biurowce, centra handlowe, banki. Zdrowe środowisko pracy przekłada się na produktywność i zadowolenie pracowników.',
      features: [
        'Lepsza produktywność pracowników',
        'Redukcja absencji chorobowej',
        'Oszczędność energii',
        'Certyfikacja BREEAM/LEED',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: School,
      title: 'Edukacja i Opieka',
      description: 'Szkoły, przedszkola, żłobki, domy opieki. Ochrona zdrowia dzieci i osób starszych jest naszym priorytetem.',
      features: [
        'Ochrona zdrowia dzieci',
        'Redukcja alergenów',
        'Zapobieganie rozprzestrzenianiu chorób',
        'Zgodność z przepisami oświatowymi',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const benefits = [
    'Poprawa jakości powietrza wewnętrznego',
    'Redukcja kosztów energii o 20-30%',
    'Zgodność z przepisami Sanepid',
    'Wydłużenie żywotności systemu HVAC',
    'Redukcja alergenów i zanieczyszczeń',
    'Pełna dokumentacja dla inspekcji',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159358/hvac-air-ventilation-heating-159358.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zastosowania
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Profesjonalne czyszczenie systemów HVAC dla każdej branży.
              Dostosowujemy nasze usługi do specyficznych potrzeb każdego sektora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${app.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <app.icon className="w-20 h-20 text-white" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>
                  <ul className="space-y-2">
                    {app.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for all */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Korzyści Dla Każdej Branży
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Niezależnie od sektora, profesjonalne czyszczenie HVAC przynosi wymierne korzyści
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-lg"
              >
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-amber-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Działasz w Innej Branży?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami - dostosujemy nasze usługi do Twoich specyficznych potrzeb
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-orange-600 text-lg font-bold rounded-xl shadow-2xl flex items-center gap-2 mx-auto group"
            >
              Zapytaj o Wycenę
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
