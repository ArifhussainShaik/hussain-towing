import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const LocationVijayawada = () => {
  return (
    <>
      <Helmet>
        <title>Towing Services Vijayawada - Professional Emergency Towing | Hussain Towing</title>
        <meta name="description" content="Professional towing services from Nandyal to Vijayawada (200km). Call +91 98765 43210 for emergency assistance." />
        <link rel="canonical" href="https://hussaintowing.com/locations/vijayawada" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing Services <span className="text-primary">Vijayawada</span>
            </h1>
            <Button variant="cta-hero" size="lg">
              <Phone className="h-6 w-6 mr-2" />
              Call +91 98765 43210
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LocationVijayawada;