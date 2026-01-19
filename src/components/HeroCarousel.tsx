import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Award, FileCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local images
import hero1 from '../assets/images/hero-1.webp';
import hero2 from '../assets/images/hero-2.webp';
import hero3 from '../assets/images/hero-3.webp';
import hero4 from '../assets/images/hero-4.webp';
import hero5 from '../assets/images/hero-5.webp';

const slides = [
  {
    image: hero1,
    title: 'Czyste Powietrze',
    highlight: ' w Twoim',
    subtitle: 'Obiekcie',
    description: 'Profesjonalne czyszczenie i dezynfekcja systemów wentylacyjnych dla firm i instytucji',
  },
  {
    image: hero2,
    title: 'Technologia',
    highlight: ' Rotobrush',
    subtitle: 'USA',
    description: 'Amerykański system BrushBeast - najnowocześniejsza technologia czyszczenia wentylacji',
  },
  {
    image: hero3,
    title: 'Certyfikowany',
    highlight: ' Zespół',
    subtitle: '',
    description: 'Wykwalifikowani specjaliści z pełną dokumentacją i certyfikatami',
  },
  {
    image: hero4,
    title: 'Dla Każdej',
    highlight: ' Branży',
    subtitle: '',
    description: 'Biurowce, hotele, szpitale, przemysł, edukacja - wieloletnie doświadczenie',
  },
  {
    image: hero5,
    title: 'Kompleksowa',
    highlight: ' Obsługa',
    subtitle: '',
    description: 'Inspekcja, czyszczenie, dezynfekcja i raport - wszystko w jednym miejscu',
  },
];

// Animation variants for text - different directions for visual interest
const textVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

const descriptionVariants = {
  enter: { y: 20, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startTimer();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Shield, text: 'Certyfikowani' },
    { icon: Zap, text: 'Nowoczesny Sprzęt' },
    { icon: Award, text: 'Gwarancja Jakości' },
    { icon: FileCheck, text: 'Pełna Dokumentacja' },
  ];

  return (
    <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Images - CSS transitions for smooth crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0 
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>
      ))}

      {/* Navigation Arrows - visible on all screens */}
      <button
        onClick={prevSlide}
        className="flex absolute left-2 md:left-8 top-1/3 md:top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="flex absolute right-2 md:right-8 top-1/3 md:top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators - positioned inside hero area */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-gradient-to-r from-indigo-500 to-violet-500'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content with animated text */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Fixed height container to prevent layout shift */}
          <div className="min-h-[180px] md:min-h-[160px] mb-6 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {slides[currentSlide].title}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                    {slides[currentSlide].highlight}
                  </span>{' '}
                  {slides[currentSlide].subtitle}
                </h1>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                variants={descriptionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                className="text-base md:text-lg text-slate-300 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-base md:text-lg font-bold rounded-xl shadow-2xl shadow-indigo-500/25 flex items-center justify-center gap-2 group"
            >
              Bezpłatna Wycena
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/technologie')}
              className="px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md text-white text-base md:text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
            >
              Nasze Technologie
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-12 md:mb-0">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 md:gap-2 p-1.5 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <badge.icon className="w-3 h-3 md:w-4 md:h-4 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-200 text-[10px] md:text-sm font-medium truncate">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
