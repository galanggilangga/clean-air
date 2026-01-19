import { motion } from 'framer-motion';
import { Search, Shield, Brush, Droplets, FileText, ArrowRight, CheckCircle } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Inspekcja i Diagnostyka',
      description:
        'Przeprowadzamy szczegółową inspekcję wideo systemem Roto-Vision Video, oceniając stan kanałów i stopień zanieczyszczenia.',
      details: [
        'Ocena wizualna systemu',
        'Inspekcja kamerą HD',
        'Dokumentacja stanu przed czyszczeniem',
        'Identyfikacja problemów',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      number: '02',
      title: 'Przygotowanie i Negative Pressure',
      description:
        'Podłączamy potężny system odciągowy i uszczelniamy system, tworząc ciśnienie ujemne dla bezpiecznej pracy.',
      details: [
        'Zabezpieczenie otoczenia',
        'Podłączenie systemu odciągowego',
        'Utworzenie podciśnienia',
        'Izolacja stref roboczych',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brush,
      number: '03',
      title: 'Mechaniczne Czyszczenie Agitacyjne',
      description:
        'Wykorzystujemy Rotobrush BrushBeast (1208 m³/h) i BOS CLEANTEC do gruntownego czyszczenia wszystkich komponentów.',
      details: [
        'Szczotkowanie kanałów',
        'Odciąg zanieczyszczeń HEPA',
        'Czyszczenie central',
        'Czyszczenie nawiewników i kratek',
      ],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Droplets,
      number: '04',
      title: 'Dezynfekcja i Sanityzacja',
      description:
        'Stosujemy certyfikowane preparaty, które eliminują 99.9% bakterii, wirusów, pleśni i innych patogenów.',
      details: [
        'Aplikacja preparatów EPA/UE',
        'Eliminacja bakterii i wirusów',
        'Usuwanie pleśni',
        'Neutralizacja zapachów',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      number: '05',
      title: 'Raport i Dokumentacja',
      description:
        'Dostarczamy pełną dokumentację PRZED i PO z nagraniami wideo oraz Certyfikat czyszczenia dla Państwa archiwum.',
      details: [
        'Raport fotograficzny',
        'Nagranie wideo PRZED/PO',
        'Certyfikat czyszczenia',
        'Zalecenia konserwacyjne',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
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
              Jak Pracujemy?
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Nasz 5-etapowy proces gwarantuje najwyższą jakość czyszczenia systemów wentylacyjnych,
              zgodnie z międzynarodowymi standardami NADCA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${index !== steps.length - 1 ? 'mb-12 pb-12 border-b border-gray-100' : ''}`}
              >
                <div className="grid lg:grid-cols-[120px_1fr] gap-8">
                  {/* Step Number */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <span className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow to next step */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute -bottom-6 left-[60px] transform -translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NADCA Standards */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Zgodność ze Standardami NADCA</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Nasze procedury są zgodne z wytycznymi National Air Duct Cleaners Association (NADCA) -
              międzynarodowego stowarzyszenia branżowego, które wyznacza standardy dla profesjonalnego
              czyszczenia systemów wentylacyjnych.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'ACR - Assessment, Cleaning & Restoration',
                'HVAC Inspection, Maintenance & Restoration',
                'General Specifications for HVAC System Cleaning',
              ].map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                >
                  <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                  <p className="font-medium">{standard}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Gotowy na Profesjonalne Czyszczenie?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Zamów bezpłatną inspekcję i przekonaj się o jakości naszych usług
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-orange-600 text-lg font-bold rounded-xl shadow-2xl flex items-center gap-2 mx-auto group"
            >
              Skontaktuj Się Z Nami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
