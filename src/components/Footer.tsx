import { Wind, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Clean Air Specialists</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesjonalne czyszczenie i dezynfekcja systemów wentylacyjnych HVAC. Technologie
              Rotobrush (USA) i BOS CLEANTEC (Finlandia).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              {['about', 'process', 'services', 'technology', 'applications', 'contact'].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {section === 'about' && 'O nas'}
                      {section === 'process' && 'Proces'}
                      {section === 'services' && 'Usługi'}
                      {section === 'technology' && 'Technologie'}
                      {section === 'applications' && 'Zastosowania'}
                      {section === 'contact' && 'Kontakt'}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Nasze Usługi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Inspekcja wideo systemów</li>
              <li>Czyszczenie mechaniczne</li>
              <li>Dezynfekcja i sanityzacja</li>
              <li>Dokumentacja i raporty</li>
              <li>Konsultacje techniczne</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-orange-400" />
                <a href="tel:+48123456789" className="text-gray-400 hover:text-orange-400 transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-orange-400" />
                <a
                  href="mailto:kontakt@cleanairspecialists.pl"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  kontakt@cleanairspecialists.pl
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Polska - Obsługujemy cały kraj</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Clean Air Specialists. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm">
              {/* Policy and Terms removed per request */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
