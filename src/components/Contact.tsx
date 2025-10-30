import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
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
    hp: '', // honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    // basic honeypot
    if (formData.hp && formData.hp.trim() !== '') {
      // silent success for bots
      return;
    }

    setIsSubmitting(true);

    try {
      const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
      let recaptchaToken: string | undefined;

      if (SITE_KEY) {
        // load grecaptcha if needed
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
      };

      const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
      if (!FORMSPREE) {
        setErrorMessage('Brak skonfigurowanego endpointu Formspree. Ustaw VITE_FORMSPREE_ENDPOINT w zmiennych środowiskowych.');
        setIsSubmitting(false);
        return;
      }

      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccessMessage('Dziękujemy! Skontaktujemy się z Tobą wkrótce.');
        setFormData({ name: '', email: '', phone: '', objectType: '', message: '', gdpr: false, hp: '' });
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMessage(json?.error || 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie później.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Wystąpił błąd podczas wysyłania. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+48 123 456 789' },
    { icon: Mail, label: 'Email', value: 'kontakt@cleanairspecialists.pl' },
    { icon: MapPin, label: 'Lokalizacja', value: 'Polska - Obsługujemy cały kraj' },
    { icon: Clock, label: 'Godziny pracy', value: 'Pon-Pt: 8:00-18:00, Sob: 9:00-14:00' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skontaktuj Się z Nami</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jesteśmy gotowi odpowiedzieć na Twoje pytania i przygotować bezpłatną wycenę
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8">Wyślij Zapytanie</h3>
              {successMessage && (
                <div role="status" aria-live="polite" className="mb-4 p-3 rounded-lg bg-green-600 text-white">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div role="alert" aria-live="assertive" className="mb-4 p-3 rounded-lg bg-red-600 text-white">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* honeypot field for bots - keep hidden */}
                <input
                  type="text"
                  name="hp"
                  value={formData.hp}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden
                  className="hidden"
                />
                <div>
                  <label className="block text-sm font-semibold mb-2">Imię i Nazwisko *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Typ obiektu *</label>
                  <select
                    name="objectType"
                    value={formData.objectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="" className="bg-gray-900">Wybierz typ obiektu</option>
                    <option value="medical" className="bg-gray-900">Placówka Medyczna</option>
                    <option value="industrial" className="bg-gray-900">Przemysł</option>
                    <option value="logistics" className="bg-gray-900">Centrum Logistyczne</option>
                    <option value="horeca" className="bg-gray-900">HoReCa</option>
                    <option value="office" className="bg-gray-900">Biuro / Obiekt Komercyjny</option>
                    <option value="education" className="bg-gray-900">Edukacja / Opieka</option>
                    <option value="other" className="bg-gray-900">Inny</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Wiadomość *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 resize-none"
                    placeholder="Opisz swoje potrzeby..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 focus:ring-2 focus:ring-orange-500"
                  />
                  <label className="text-sm text-gray-300">
                    Zgadzam się na przetwarzanie moich danych osobowych zgodnie z polityką
                    prywatności w celu kontaktu w sprawie zapytania ofertowego. *
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij Zapytanie
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Dane Kontaktowe</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="aspect-video bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-300 font-semibold">Mapa / Ilustracja</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
