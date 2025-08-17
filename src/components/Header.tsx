import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Truck, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-20 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
          <div className="bg-primary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Hussain <span className="text-primary">Towing</span>
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="emergency" size="lg" asChild>
            <a href="tel:+919876543210" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Menu</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-xl py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
