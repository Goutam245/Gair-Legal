import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import architectureImage from "@/assets/architecture-modern.jpg";
import sydneyImage from "@/assets/sydney-skyline.jpg";

const differentiators = [
  "Exceeding client's expectations",
  "Outstanding legal knowledge and representation",
  "Dedicated and experienced legal practitioners",
  "Exceptional client relationships",
  "Expertise in effective dispute resolution",
  "Minimising costs and maximising results",
  "Commitment to excellence and a commitment to clients",
  "Modern and secure technology and systems",
  "Sustainable and socially responsible practices",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={sydneyImage}
            alt="Sydney skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="relative z-10 container-wide pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-medium tracking-wide-custom text-sm uppercase mb-4">
              About Our Firm
            </p>
            <h1 className="text-primary-foreground font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Gair Legal
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              One of NSW's premier law firms, providing strategic and proactive dispute resolutions since 2011.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="section-light section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-foreground mb-6">Welcome to Gair Legal</h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Gair Legal was established in 2011 and has quickly become one of NSW's premier law firms. We are a progressive and highly specialised firm providing strategic and proactive dispute resolutions for insurers and employers.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                Gair Legal acts on behalf of and in partnership with icare, general insurers, corporate and government self-insurers, and small and large corporations.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                Gair Legal's reputation for exceptional service has resulted in the firm being nominated by major organisations as the preferred law firm to handle their claims. The firm is founded on outstanding legal knowledge and experience with core values of quality, integrity, loyalty, accountability and dedication to a superior legal service.
              </p>
              <p className="text-secondary leading-relaxed">
                Gair Legal operates out of a number of offices and is a responsible and sustainable business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-elevated p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Gair Legal's superior reputation is built on:
                </h3>
                <ul className="space-y-4">
                  {differentiators.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={architectureImage}
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground max-w-3xl px-6">
              "Integrity, Loyalty, and Dedication"
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
