import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-towing.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hussain Towing Services truck providing 24/7 emergency roadside assistance in Nandyal"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* 24/7 Badge */}
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full mb-6 font-semibold">
            <Clock className="h-4 w-4" />
            24/7 Emergency Service
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            24/7 Emergency Towing Service
            <br />
            in <span className="text-primary">Nandyal, Andhra Pradesh</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional car breakdown service covering 300km radius across Andhra Pradesh. 
            Fast emergency roadside assistance - from battery jumpstart to heavy vehicle recovery.
          </p>
          
          {/* Coverage Area */}
          <div className="flex items-center justify-center gap-2 mb-10 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Serving Nandyal & 250km radius</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta-hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-6 w-6 mr-2" />
                Call +91 98765 43210
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              View Services
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm">Emergency Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">300km</div>
              <div className="text-sm">Service Radius</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">5+ Years</div>
              <div className="text-sm">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;