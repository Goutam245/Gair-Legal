import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Mail } from "lucide-react";
import heroImage from "@/assets/sydney-skyline.jpg";

const teamMembers = [
  { name: "Jennifer Gair", role: "Managing Partner", email: "jen.gair@gairlegal.com.au", imageId: 1 },
  { name: "Anthony Cummins", role: "Director", email: "anthony.cummins@gairlegal.com.au", imageId: 2 },
  { name: "Alice Davis", role: "Partner", email: "alice.davis@gairlegal.com.au", imageId: 3 },
  { name: "Stephen Hodges", role: "Partner", email: "stephen.hodges@gairlegal.com.au", imageId: 4 },
  { name: "Christie Blake", role: "Partner", email: "christie.blake@gairlegal.com.au", imageId: 5 },
  { name: "Dennis Kim", role: "Partner", email: "dennis.kim@gairlegal.com.au", imageId: 6 },
  { name: "Nadia Toller", role: "Partner", email: "nadia.toller@gairlegal.com.au", imageId: 7 },
  { name: "Phoebe Singer", role: "Senior Counsel", email: "phoebe.singer@gairlegal.com.au", imageId: 8 },
  { name: "Laura Rist", role: "Senior Counsel", email: "laura.rist@gairlegal.com.au", imageId: 9 },
  { name: "Anthony Pryor", role: "Senior Associate", email: "anthony.pryor@gairlegal.com.au", imageId: 10 },
  { name: "Alisha Dyson", role: "Senior Associate", email: "alisha.dyson@gairlegal.com.au", imageId: 11 },
  { name: "Olivia Leonard", role: "Senior Associate", email: "olivia.leonard@gairlegal.com.au", imageId: 12 },
  { name: "Zac Simons", role: "Senior Associate", email: "zac.simons@gairlegal.com.au", imageId: 13 },
  { name: "Declan O'Connor", role: "Senior Associate", email: "declan.oconnor@gairlegal.com.au", imageId: 14 },
  { name: "Lauren Hose", role: "Associate", email: "lauren.hose@gairlegal.com.au", imageId: 15 },
  { name: "Anastasija Milovic", role: "Associate", email: "anastasija.milovic@gairlegal.com.au", imageId: 16 },
  { name: "Teralli Lundjick", role: "Associate", email: "teralli.lundjick@gairlegal.com.au", imageId: 17 },
];

// Professional headshot placeholder using randomuser.me API for realistic photos
const getHeadshotUrl = (id: number, name: string) => {
  // Use a mix of male and female photos based on common name patterns
  const femaleNames = ['Jennifer', 'Alice', 'Christie', 'Nadia', 'Phoebe', 'Laura', 'Alisha', 'Olivia', 'Lauren', 'Anastasija', 'Teralli'];
  const firstName = name.split(' ')[0];
  const gender = femaleNames.includes(firstName) ? 'women' : 'men';
  // Use consistent IDs for the same person
  return `https://randomuser.me/api/portraits/${gender}/${(id % 50) + 20}.jpg`;
};

const Team = () => {
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
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container-wide pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p 
              className="text-accent font-medium tracking-wide-custom text-sm uppercase mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              Meet Our Experts
            </p>
            <h1 
              className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ textShadow: "0 4px 16px rgba(0,0,0,0.7)" }}
            >
              Our Team
            </h1>
            <p 
              className="text-white/90 text-lg md:text-xl leading-relaxed"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
            >
              Our senior staff are supported by experienced lawyers, graduates, paralegals and administrative professionals. We provide exceptional customer outcomes and service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-background py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-secondary text-lg leading-relaxed">
              Gair Legal is one of NSW's premier law firms. Our highly experienced Partners are leaders in Workers Compensation and are supported by knowledgeable lawyers and support professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={ref} className="bg-background pb-24">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Professional Headshot */}
                <div className="flex justify-center pt-8 pb-4">
                  <div className="relative">
                    <img
                      src={getHeadshotUrl(member.imageId, member.name)}
                      alt={`${member.name} - ${member.role}`}
                      className="w-[180px] h-[180px] rounded-full object-cover border-4 border-muted shadow-lg"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-[180px] h-[180px] rounded-full bg-muted flex items-center justify-center border-4 border-border';
                          fallback.innerHTML = `<span class="font-heading text-4xl font-bold text-secondary/50">${member.name.split(" ").map((n) => n[0]).join("")}</span>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-[#0284C7] transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-foreground text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent text-base font-medium mb-2">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-secondary text-sm hover:text-accent transition-colors inline-block"
                  >
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
