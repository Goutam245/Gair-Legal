import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ImpactStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-dark section-py">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-12" />
          <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight">
            "Law Firm of Choice — Exceeding Expectations Since 2011"
          </blockquote>
          <div className="w-16 h-1 bg-accent mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatement;
