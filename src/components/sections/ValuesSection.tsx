import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Star } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our dealings. Our commitment to transparency and honesty forms the foundation of every client relationship.",
  },
  {
    icon: Heart,
    title: "Loyalty",
    description:
      "We are dedicated to our clients' success. Our unwavering commitment means we stand by you through every challenge, providing steadfast support and advocacy.",
  },
  {
    icon: Star,
    title: "Dedication",
    description:
      "Excellence is our standard. We approach every matter with meticulous attention to detail and a relentless pursuit of the best possible outcomes.",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-muted section-py">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-wide-custom text-sm uppercase mb-4">
            Our Foundation
          </p>
          <h2 className="text-foreground mb-6">Values-Based Excellence</h2>
          <p className="text-secondary text-lg">
            The firm is founded on outstanding legal knowledge and experience with core values of quality, integrity, loyalty, accountability and dedication to a superior legal service.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent/20 bg-card mb-6">
                <value.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-secondary leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
