import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Phone, Mail, Send, CheckCircle, AlertCircle, Wind, Snowflake } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objectType: '',
    message: '',
    gdpr: false,
    hp: '',
  });

  // Auto-hide error message after 4 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    if (formData.hp && formData.hp.trim() !== '') {
      return;
    }

    setIsSubmitting(true);

    try {
      const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
      let recaptchaToken: string | undefined;

      if (SITE_KEY) {
        if (!(window as any).grecaptcha) {
          await new Promise<void>((resolve) => {
            const s = document.createElement('script');
            s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
            s.async = true;
            s.onload = () => resolve();
            document.head.appendChild(s);
          });
        }

        try {
          recaptchaToken = await (window as any).grecaptcha.execute(SITE_KEY, { action: 'contact' });
        } catch (err) {
          console.warn('reCAPTCHA execute failed', err);
        }
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        objectType: formData.objectType,
        message: formData.message,
        gdpr: formData.gdpr,
        hp: formData.hp,
        recaptchaToken,
        _replyto: formData.email,
        _subject: `Zapytanie z formularza — ${formData.objectType || 'Ogólne'}`,
      };

      const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
      if (!FORMSPREE) {
        setErrorMessage('Brak skonfigurowanego endpointu Formspree.');
        setIsSubmitting(false);
        return;
      }

      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccessMessage('Dziękujemy! Twoja wiadomość została wysłana. Odezwiemy się wkrótce.');
        setFormData({ name: '', email: '', phone: '', objectType: '', message: '', gdpr: false, hp: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data?.error || 'Wystąpił błąd podczas wysyłania formularza.');
      }
    } catch {
      setErrorMessage('Nie udało się wysłać formularza. Sprawdź połączenie internetowe.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Wind, 
      label: 'Czyszczenie • Serwis', 
      value: '+48 123 456 789', 
      href: 'tel:+48123456789',
      gradient: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-400'
    },
    { 
      icon: Snowflake, 
      label: 'Projektowanie • Doradztwo • Montaż', 
      value: '+48 987 654 321', 
      href: 'tel:+48987654321',
      gradient: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'kontakt@cleanair.pl', 
      href: 'mailto:kontakt@cleanair.pl',
      gradient: 'from-indigo-500 to-violet-500',
      textColor: 'text-indigo-400'
    },
  ];

  const objectTypes = [
    'Budynek biurowy',
    'Centrum handlowe',
    'Hotel / Restauracja',
    'Szpital / Klinika',
    'Zakład przemysłowy',
    'Dom jednorodzinny',
    'Mieszkanie',
    'Inny obiekt',
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Zamów Bezpłatną Wycenę
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Nasi specjaliści przygotują indywidualną ofertę dopasowaną do Twoich potrzeb
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-800 transition-all border border-slate-700 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.textColor}`}>{item.label}</p>
                  <p className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 p-5 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl text-white shadow-xl"
            >
              <h3 className="text-lg font-bold mb-3">Dlaczego warto zadzwonić?</h3>
              <ul className="space-y-2 text-indigo-100 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Bezpłatna konsultacja
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Wycena w 24h
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Elastyczne terminy
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-slate-700">
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800 font-medium">{successMessage}</p>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </motion.div>
              )}

              {/* Honeypot */}
              <input
                type="text"
                name="hp"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                    placeholder="jan@firma.pl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Typ obiektu
                  </label>
                  <select
                    value={formData.objectType}
                    onChange={(e) => setFormData({ ...formData, objectType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
                  >
                    <option value="" className="bg-slate-800">Wybierz typ...</option>
                    {objectTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-white placeholder-slate-400"
                  placeholder="Opisz swoje potrzeby..."
                />
              </div>

              {/* TODO: Uzupełnić własną polityką prywatności
              <div className="mt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.gdpr}
                    onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300">
                    Wyrażam zgodę na przetwarzanie danych osobowych.
                    <a 
                      href="https://uodo.gov.pl/pl/138/2606" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-indigo-400 hover:underline ml-1"
                    >
                      Polityka prywatności
                    </a>
                  </span>
                </label>
              </div>
              */}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Wyślij Zapytanie
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
