import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Route, Clock, AlertTriangle } from "lucide-react";

const LocationGuntur = () => {
  return (
    <>
      <Helmet>
        <title>Towing Services Guntur - NH16 Emergency Towing | Hussain Towing</title>
        <meta name="description" content="Professional towing services from Nandyal to Guntur (150km). NH16 coverage, 2.5 hour response. Call +91 98765 43210." />
        <meta name="keywords" content="towing service Guntur, emergency towing NH16, Guntur vehicle recovery" />
        <link rel="canonical" href="https://hussaintowing.com/locations/guntur" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing Services <span className="text-primary">Guntur</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Reliable towing from Nandyal to Guntur. NH16 coastal route coverage with professional service.
            </p>
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

export default LocationGuntur;