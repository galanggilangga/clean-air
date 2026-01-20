import { Wind, Phone, Mail, MapPin, Snowflake } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const links = [
    { label: 'O nas', path: '/o-nas' },
    { label: 'Czyszczenie • Serwis', path: '/uslugi' },
    { label: 'Technologie', path: '/technologie' },
    { label: 'Projektowanie • Montaż', path: '/rekuperacja' },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Clean Air Specialists</h3>
                <p className="text-xs text-slate-500">Specjaliści od czystego powietrza</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Profesjonalne czyszczenie systemów wentylacyjnych. Technologie Rotobrush i BOS CLEANTEC.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-slate-200">Nawigacja</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-slate-200">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Wind className="w-4 h-4 text-blue-400" />
                <a href="tel:+48123456789" className="text-slate-400 hover:text-blue-400 transition-colors">
                  +48 123 456 789 <span className="text-xs text-blue-500">Czyszczenie i Serwis</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Snowflake className="w-4 h-4 text-emerald-400" />
                <a href="tel:+48987654321" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  +48 987 654 321 <span className="text-xs text-emerald-500">Projektowanie i Montaż</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href="mailto:kontakt@cleanair.pl" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  kontakt@cleanair.pl
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Polska - cały kraj</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Clean Air Specialists. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
