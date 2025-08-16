import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-foreground">
            Hussain <span className="text-primary">Towing Services</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="/locations" className="text-foreground hover:text-primary transition-colors">
            Locations
          </a>
          <a href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm text-muted-foreground">24/7 Emergency</p>
            <p className="font-bold text-lg text-foreground">+91 98765 43210</p>
          </div>
          <Button variant="emergency" size="lg" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;