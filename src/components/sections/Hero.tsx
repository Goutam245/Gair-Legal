import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroTeam1 from "@/assets/hero-team-1.jpg";
import heroTeam2 from "@/assets/hero-team-2.jpg";
import heroTeam3 from "@/assets/hero-team-3.jpg";
import heroTeam4 from "@/assets/hero-team-4.jpg";

const heroSlides = [
  {
    image: heroTeam1,
    alt: "Professional diverse team collaborating in modern office",
  },
  {
    image: heroTeam2,
    alt: "Team discussion around conference table",
  },
  {
    image: heroTeam3,
    alt: "Professional team collaboration",
  },
  {
    image: heroTeam4,
    alt: "Modern premium law office interior",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-medium tracking-wide-custom text-sm uppercase mb-6 drop-shadow-lg"
          >
            Australia's Premier Legal Team
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-bold leading-[1.1] mb-8"
            style={{ textShadow: "0 4px 16px rgba(0, 0, 0, 0.7)" }}
          >
            Culture of{" "}
            <span className="text-accent">Innovation</span>
            <br />& Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/95 text-lg md:text-xl lg:text-[22px] leading-relaxed mb-10 max-w-[700px]"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)" }}
          >
            Legal Provider for Insurers & Employers. Exceeding client expectations with outstanding legal knowledge and representation since 2011.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              to="/expertise" 
              className="inline-flex items-center justify-center h-[52px] px-8 bg-accent text-white font-bold text-lg rounded-[10px] hover:bg-[#0284C7] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Our Expertise
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center h-[52px] px-8 border-2 border-white text-white font-bold text-lg rounded-[10px] hover:bg-white hover:text-[#1A2B4A] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-accent w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
