import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    name: "Northern Beaches Office",
    address: ["Suite 1, 635 Pittwater Road", "Dee Why NSW 2099", "P.O. Box 1277"],
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
  },
  {
    name: "Newcastle Office",
    address: ["Suite 14, 123 Scott Street", "Newcastle NSW 2300"],
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
  },
  {
    name: "Chatswood Office",
    address: ["Level 5, South Tower", "Suite 503, 1-5 Railway Street", "Chatswood NSW 2067"],
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne Office",
    address: ["Level 50, 120 Collins Street", "Melbourne VIC 3000"],
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Our Locations
          </p>
          <h2 className="text-foreground mb-6">
            Client Relationships Are Our Priority
          </h2>
          <p className="text-secondary text-lg">
            With four offices across New South Wales and Victoria, we're positioned to serve clients throughout Australia.
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-elevated p-6 border border-transparent hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-semibold text-foreground">
                  {office.name.replace(" Office", "")}
                </h3>
              </div>

              <div className="space-y-1 mb-4">
                {office.address.map((line, i) => (
                  <p key={i} className="text-secondary text-sm">
                    {line}
                  </p>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <a
                  href={`tel:${office.phone}`}
                  className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  <Phone size={14} />
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors break-all"
                >
                  <Mail size={14} />
                  <span className="text-xs">{office.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="btn-primary">
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
