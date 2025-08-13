import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial text-industrial-foreground">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Hussain <span className="text-primary">Towing</span>
            </h3>
            <p className="text-industrial-foreground/80 mb-6 max-w-md">
              Nandyal's most trusted towing service, providing reliable 24/7 emergency 
              response and professional vehicle transport across a 250km radius.
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold text-lg">
              <Phone className="h-5 w-5" />
              24/7 Emergency: +91 98765 43210
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-industrial-foreground/80">
              <li><a href="#services" className="hover:text-primary transition-colors">Light-Duty Towing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Emergency Recovery</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Heavy Equipment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Long-Haul Transport</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-industrial-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@hussaintowing.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nandyal, Andhra Pradesh</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-primary">Emergency: 24/7</p>
                <p>Office: Mon-Sat 8AM-8PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-industrial-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-industrial-foreground/60 text-sm">
              © 2024 Hussain Towing Services. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-industrial-foreground/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-industrial-foreground/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;