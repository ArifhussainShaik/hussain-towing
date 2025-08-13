import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Route, Clock, AlertTriangle } from "lucide-react";

const LocationKurnool = () => {
  return (
    <>
      <Helmet>
        <title>Towing Services Kurnool - NH40 Emergency Towing | Hussain Towing</title>
        <meta name="description" content="Professional towing services from Nandyal to Kurnool (60km). NH40 coverage, emergency response. Call +91 98765 43210." />
        <meta name="keywords" content="towing service Kurnool, emergency towing NH40, Kurnool vehicle recovery" />
        <link rel="canonical" href="https://hussaintowing.com/locations/kurnool" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing Services <span className="text-primary">Kurnool</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Fast emergency towing from Nandyal to Kurnool. NH40 coverage with 1-hour response time.
            </p>
            <Button variant="cta-hero" size="lg">
              <Phone className="h-6 w-6 mr-2" />
              Call +91 98765 43210
            </Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Kurnool Coverage</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span><strong>Distance:</strong> 60km from Nandyal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span><strong>Response Time:</strong> 1 hour</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Route className="h-5 w-5 text-primary" />
                    <span><strong>Main Routes:</strong> NH40, NH44</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span><strong>Risk Areas:</strong> NH40 blackspots near city limits</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Service Areas in Kurnool</h3>
                <ul className="space-y-2">
                  <li>• Kurnool City Center</li>
                  <li>• Orvakal Industrial Area</li>
                  <li>• NH40 Corridor</li>
                  <li>• Tungabhadra Dam Area</li>
                  <li>• Outer Ring Road</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LocationKurnool;