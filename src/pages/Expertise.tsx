import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { HardHat, FileWarning, Scale, Briefcase, Building2, Car } from "lucide-react";

import workersCompImage from "@/assets/service-workers-comp.jpg";
import injuryImage from "@/assets/service-injury.jpg";
import catastrophicImage from "@/assets/service-catastrophic.jpg";
import employmentImage from "@/assets/service-employment.jpg";
import publicLiabilityImage from "@/assets/service-public-liability.jpg";
import motorImage from "@/assets/service-motor.jpg";
import heroImage from "@/assets/architecture-modern.jpg";

const practiceAreas = [
  {
    id: "workers-compensation",
    title: "Workers Compensation",
    icon: HardHat,
    image: workersCompImage,
    description:
      "We make it a priority to understand and meet the needs of the workers compensation insurer and their insured. Gair Legal acts as an advocate in contested disputes and we proactively pursue strategic, cost effective and commercially sound resolution of claims.",
    details:
      "We are leaders in this area of law and have a reputation of defending and resolving the more difficult and complex matters. Gair Legal provides comprehensive matter management and reporting to insurers and employers. We provide value added services and support, focusing on the reduction and avoidance of workers compensation claims and associated costs.",
  },
  {
    id: "work-injury",
    title: "Work Injury Damages & Recoveries",
    icon: FileWarning,
    image: injuryImage,
    description:
      "Expert handling of work injury damages claims including Section 66 lump sum claims, Section 67 pain and suffering claims, and common law work injury damages.",
    details:
      "Our team has extensive experience in managing complex work injury matters, ensuring the best possible outcomes for our insurer and employer clients. We provide strategic advice on liability and quantum, and work collaboratively with our clients to achieve cost-effective resolutions.",
  },
  {
    id: "catastrophic",
    title: "Catastrophic Injuries & Death Claims",
    icon: Scale,
    image: catastrophicImage,
    description:
      "Comprehensive support for complex catastrophic injury matters and fatal claims requiring sensitive and expert handling.",
    details:
      "We understand the gravity and complexity of catastrophic injury and death claims. Our experienced team provides compassionate yet rigorous legal representation, ensuring appropriate outcomes while maintaining sensitivity to all parties involved.",
  },
  {
    id: "employment",
    title: "Employment Law / Workplace Health & Safety",
    icon: Briefcase,
    image: employmentImage,
    description:
      "Expert advice on employment law matters including unfair dismissal, discrimination claims, workplace investigations, and WHS compliance.",
    details:
      "Our employment law practice covers the full spectrum of workplace legal issues. We assist employers with compliance, defend claims, conduct workplace investigations, and provide strategic advice on managing employment relationships and workplace safety obligations.",
  },
  {
    id: "public-liability",
    title: "Public Liability",
    icon: Building2,
    image: publicLiabilityImage,
    description:
      "Defending and managing public liability claims with strategic insight and commercial awareness.",
    details:
      "We represent insurers and self-insured organisations in public liability matters, from slip and falls to complex product liability claims. Our team provides pragmatic advice focused on achieving the best commercial outcomes.",
  },
  {
    id: "motor-vehicle",
    title: "Motor Vehicle",
    icon: Car,
    image: motorImage,
    description:
      "Expert representation in motor vehicle accident claims under CTP schemes and related liability matters.",
    details:
      "Our motor vehicle practice handles claims across all Australian jurisdictions. We provide strategic advice on liability, manage claims efficiently, and achieve timely resolutions for our insurer clients.",
  },
];

const Expertise = () => {
  const [activeArea, setActiveArea] = useState(practiceAreas[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const selectedArea = practiceAreas.find((area) => area.id === activeArea)!;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern architecture"
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
              Practice Areas
            </p>
            <h1 className="text-primary-foreground font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gair Legal Expertise
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Gair Legal has proven expertise in a range of legal fields utilising highly competent and experienced lawyers. We can guide you through complex legal issues to find an effective and cost-efficient business solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Navigation */}
      <section ref={ref} className="section-light section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <nav className="space-y-2 sticky top-32">
                {practiceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area.id)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center gap-4 ${
                      activeArea === area.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-card hover:bg-muted text-foreground"
                    }`}
                  >
                    <area.icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        activeArea === area.id ? "text-accent-foreground" : "text-accent"
                      }`}
                    />
                    <span className="font-medium">{area.title}</span>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Content Area */}
            <motion.div
              key={activeArea}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="card-elevated overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={selectedArea.image}
                    alt={selectedArea.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <selectedArea.icon className="w-10 h-10 text-accent mb-4" />
                    <h2 className="text-primary-foreground text-2xl md:text-3xl font-heading font-bold">
                      {selectedArea.title}
                    </h2>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-secondary text-lg leading-relaxed mb-6">
                    {selectedArea.description}
                  </p>
                  <p className="text-secondary leading-relaxed">
                    {selectedArea.details}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
