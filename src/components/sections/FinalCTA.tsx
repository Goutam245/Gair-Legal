import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-light section-py relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-card" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-foreground mb-6">
            Experience Superior Legal Representation
          </h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Partner with Australia's premier legal team for insurers and employers. Let us help you navigate complex legal challenges with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
            >
              Meet Our Team
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
