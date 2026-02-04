import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/architecture-modern.jpg";

const categories = [
  {
    id: "pro-bono",
    title: "Pro Bono Work",
    content:
      "Gair Legal is committed to being a responsible firm and provides a positive social and economic contribution to the community. We provide pro bono legal assistance and the use of our office facilities for pro bono clients.",
  },
  {
    id: "environment",
    title: "Environment/Sustainability",
    content:
      "Gair Legal is committed to sustainable practices throughout our operations. We actively work to reduce our environmental footprint through paperless processes, energy-efficient offices, and sustainable procurement practices.",
  },
  {
    id: "charities",
    title: "Charities",
    content:
      "We support a range of charitable organisations and community initiatives. Our team regularly participates in fundraising activities and volunteer programs that make a positive difference in our communities.",
  },
  {
    id: "diversity",
    title: "Diversity and Inclusion",
    content:
      "Gair Legal is committed to fostering a diverse and inclusive workplace. We believe that diverse perspectives lead to better outcomes for our clients and a more enriching work environment for our team.",
  },
  {
    id: "privacy",
    title: "Privacy Notice",
    content:
      "We take privacy seriously and are committed to protecting the personal information of our clients and stakeholders. Our privacy practices comply with all applicable Australian privacy laws and regulations.",
  },
];

const Community = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const selectedCategory = categories.find((cat) => cat.id === activeCategory)!;

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
              Our Commitment
            </p>
            <h1 className="text-primary-foreground font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Community & Sustainability
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Gair Legal actively supports the community and is committed to sustainable work and life practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
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
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-card hover:bg-muted text-foreground"
                    }`}
                  >
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Content Area */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="card-elevated p-8 lg:p-12">
                <h2 className="text-foreground text-2xl md:text-3xl font-heading font-bold mb-6">
                  {selectedCategory.title}
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                  {selectedCategory.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
