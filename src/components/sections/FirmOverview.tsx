import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import architectureImage from "@/assets/architecture-modern.jpg";

const FirmOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentiators = [
    "Exceeding client's expectations",
    "Outstanding legal knowledge and representation",
    "Dedicated and experienced legal practitioners",
    "Exceptional client relationships",
    "Expertise in effective dispute resolution",
  ];

  return (
    <section ref={ref} className="section-light section-py overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column - Large Year */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 text-center lg:text-left"
          >
            <div className="relative inline-block">
              <span className="font-heading text-8xl md:text-9xl lg:text-[10rem] font-bold text-accent/10 leading-none">
                2011
              </span>
              <div className="absolute bottom-0 left-0 lg:left-4">
                <p className="text-sm uppercase tracking-wide-custom font-medium text-secondary mb-2">
                  Established
                </p>
                <div className="w-20 h-1 bg-accent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h2 className="text-foreground mb-6">
              Welcome to <span className="text-accent">Gair Legal</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Gair Legal was established in 2011 and has quickly become one of NSW's premier law firms. We are a progressive and highly specialised firm providing strategic and proactive dispute resolutions for insurers and employers.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              Gair Legal acts on behalf of and in partnership with icare, general insurers, corporate and government self-insurers, and small and large corporations. Our reputation for exceptional service has resulted in the firm being nominated by major organisations as the preferred law firm to handle their claims.
            </p>

            <div className="card-elevated p-8 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Our superior reputation is built on:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
            >
              Learn more about us
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirmOverview;
