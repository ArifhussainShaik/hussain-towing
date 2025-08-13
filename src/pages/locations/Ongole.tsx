import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const LocationOngole = () => {
  return (
    <>
      <Helmet>
        <title>Towing Services Ongole - Emergency Towing | Hussain Towing</title>
        <meta name="description" content="Professional towing services from Nandyal to Ongole (220km). Call +91 98765 43210." />
        <link rel="canonical" href="https://hussaintowing.com/locations/ongole" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing Services <span className="text-primary">Ongole</span>
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

export default LocationOngole;