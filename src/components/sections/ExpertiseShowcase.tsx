import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HardHat, FileWarning, Scale, Briefcase, Building2, Car } from "lucide-react";

import workersCompImage from "@/assets/service-workers-comp.jpg";
import injuryImage from "@/assets/service-injury.jpg";
import catastrophicImage from "@/assets/service-catastrophic.jpg";
import employmentImage from "@/assets/service-employment.jpg";
import publicLiabilityImage from "@/assets/service-public-liability.jpg";
import motorImage from "@/assets/service-motor.jpg";

const services = [
  {
    title: "Workers Compensation",
    description: "Strategic and cost-effective resolution of workers compensation claims.",
    icon: HardHat,
    image: workersCompImage,
    href: "/expertise#workers-compensation",
  },
  {
    title: "Work Injury Damages & Recoveries",
    description: "Expert handling of work injury damages and recovery claims.",
    icon: FileWarning,
    image: injuryImage,
    href: "/expertise#work-injury",
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    description: "Comprehensive support for complex catastrophic injury matters.",
    icon: Scale,
    image: catastrophicImage,
    href: "/expertise#catastrophic",
  },
  {
    title: "Employment Law / WHS",
    description: "Workplace health & safety and employment law expertise.",
    icon: Briefcase,
    image: employmentImage,
    href: "/expertise#employment",
  },
  {
    title: "Public Liability",
    description: "Defending and managing public liability claims effectively.",
    icon: Building2,
    image: publicLiabilityImage,
    href: "/expertise#public-liability",
  },
  {
    title: "Motor Vehicle",
    description: "Expert representation in motor vehicle accident claims.",
    icon: Car,
    image: motorImage,
    href: "/expertise#motor-vehicle",
  },
];

const ExpertiseShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-light section-py">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-wide-custom text-sm uppercase mb-4">
            Practice Areas
          </p>
          <h2 className="text-foreground mb-6">Gair Legal Expertise</h2>
          <p className="text-secondary text-lg">
            We can guide you through complex legal issues to find an effective and cost-efficient business solution.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={service.href} className="service-card group block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="service-card-content">
                  <service.icon
                    className="w-8 h-8 text-accent mb-4 opacity-90"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;
