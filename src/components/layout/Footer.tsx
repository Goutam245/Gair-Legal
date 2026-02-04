import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/gair-legal-logo.jpg";

const offices = [
  {
    name: "Northern Beaches",
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
  },
  {
    name: "Newcastle",
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
  },
  {
    name: "Chatswood",
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne",
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Our Team", href: "/team" },
  { label: "Community & Sustainability", href: "/community" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-accent via-deep-blue to-accent" />

      <div className="container-wide section-py-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src={logo}
                alt="Gair Legal"
                className="h-12 w-auto mb-6 brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Gair Legal is a corporation and not a partnership. Limited Liability by a scheme
              approved under Professional Standards Legislation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Our Offices</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offices.map((office) => (
                <div key={office.name} className="space-y-2">
                  <h5 className="font-medium text-primary-foreground flex items-center gap-2">
                    <MapPin size={14} className="text-accent" />
                    {office.name}
                  </h5>
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <Phone size={12} />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors break-all"
                  >
                    <Mail size={12} />
                    {office.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © Gair Legal {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Website by Magenta Design & Mitchell Creative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
