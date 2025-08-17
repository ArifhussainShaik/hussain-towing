import { Button } from "@/components/ui/button";
import { Phone, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-20 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
          <div className="bg-primary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Hussain <span className="text-primary">Towing Services</span>
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/locations" className="text-foreground hover:text-primary transition-colors">
            Locations
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
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