import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/gair-legal-logo.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Our Team", href: "/team" },
  { label: "Community & Sustainability", href: "/community" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-b border-border/50"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20 lg:h-[88px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Gair Legal - Legal Provider for Insurers & Employers"
                className="h-12 lg:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-base font-medium transition-colors duration-300 relative group ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-[#1A2B4A] hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[3px] bg-accent transition-transform duration-300 origin-left rounded-full ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
              
              {/* Contact Us Button */}
              <Link
                to="/contact"
                className="ml-4 inline-flex items-center gap-2 px-7 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-[#0284C7] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#0A1F44] hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            {/* Close button at top */}
            <div className="flex justify-end p-4 pt-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-[#0A1F44] hover:text-accent transition-colors rounded-lg hover:bg-muted"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center px-8 pb-8 pt-4 gap-2"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="w-full"
                >
                  <Link
                    to={link.href}
                    className={`block w-full text-center text-xl font-semibold py-4 px-6 rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-accent bg-accent/10"
                        : "text-[#1A2B4A] hover:text-accent hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-full mt-4"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-accent text-white font-semibold rounded-lg text-xl hover:bg-[#0284C7] transition-all duration-300"
                >
                  <Phone size={22} />
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
