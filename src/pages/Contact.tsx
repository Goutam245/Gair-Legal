import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/sydney-skyline.jpg";

const offices = [
  {
    name: "Northern Beaches Office",
    addresses: [
      "Suite 1, 635 Pittwater Road, Dee Why NSW 2099",
      "Suite 6 & 7, 635 Pittwater Road, Dee Why NSW 2099",
      "P.O. Box 1277",
    ],
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
  },
  {
    name: "Newcastle Office",
    addresses: [
      "Suite 14, 123 Scott Street, Newcastle NSW 2300",
      "Suite 1, 123 Scott Street, Newcastle NSW 2300",
    ],
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
  },
  {
    name: "Chatswood Office",
    addresses: [
      "Level 5, South Tower",
      "Suite 503, 1-5 Railway Street, Chatswood NSW 2067",
    ],
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne Office",
    addresses: ["Level 50, 120 Collins Street, Melbourne VIC 3000"],
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
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
              Get In Touch
            </p>
            <h1 className="text-primary-foreground font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Client relationships are our priority. Contact our offices in Sydney Northern Beaches, Newcastle, Chatswood and Melbourne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section ref={ref} className="section-light section-py">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated p-8 hover:shadow-dramatic transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-foreground">
                    {office.name}
                  </h2>
                </div>

                <div className="space-y-4 mb-6">
                  {office.addresses.map((address, i) => (
                    <p key={i} className="text-secondary">
                      {address}
                    </p>
                  ))}
                </div>

                <div className="pt-6 border-t border-border space-y-3">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    {office.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section-py-sm">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-foreground mb-6">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Our team of experienced legal professionals is here to help. Contact us today to schedule a consultation.
            </p>
            <a
              href="mailto:sydneyoffice@gairlegal.com.au"
              className="btn-primary inline-block"
            >
              Email Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
