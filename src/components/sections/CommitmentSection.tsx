import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const commitments = [
  "Minimising costs and maximising results",
  "Commitment to excellence and a commitment to clients",
  "Modern and secure technology and systems",
  "Sustainable and socially responsible practices",
  "Exceeding client's expectations",
  "Outstanding legal knowledge and representation",
];

const CommitmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-deep-blue section-py relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium tracking-wide-custom text-sm uppercase mb-4">
              Our Promise
            </p>
            <h2 className="text-deep-blue-foreground mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-deep-blue-foreground/80 text-lg leading-relaxed">
              At Gair Legal, we are committed to delivering exceptional legal services that exceed expectations. Our dedication to excellence drives everything we do, from strategic case management to client communication.
            </p>
          </motion.div>

          {/* Right Content - Commitments List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-4">
              {commitments.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-deep-blue-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
