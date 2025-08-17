import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Route, Clock, AlertTriangle } from "lucide-react";

const LocationHyderabad = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hussain Towing Services in Hyderabad",
    "description": "Professional 24/7 towing and roadside assistance services in Hyderabad and along the NH44 corridor.",
    "telephone": "+91 98765 43210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "17.3850",
        "longitude": "78.4867"
      },
      "geoRadius": "50000" // 50km radius around Hyderabad
    },
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <>
      <SEOHead
        title="Towing Services Hyderabad - 24/7 Emergency Towing | Hussain Towing"
        description="Professional towing services from Nandyal to Hyderabad (286km). 24/7 emergency response, NH44 coverage, vehicle recovery. Call +91 98765 43210 for immediate assistance."
        keywords="towing service Hyderabad, emergency towing NH44, Hyderabad to Nandyal towing, vehicle recovery Hyderabad"
        canonical="https://hussaintowing.com/locations/hyderabad"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing Services <span className="text-primary">Hyderabad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Professional 24/7 towing services from Nandyal to Hyderabad. Covering NH44 and metro area with fast emergency response.
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
                <h2 className="text-3xl font-bold mb-6">Hyderabad Coverage</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span><strong>Distance:</strong> 286km from Nandyal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span><strong>Response Time:</strong> 4-5 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Route className="h-5 w-5 text-primary" />
                    <span><strong>Main Routes:</strong> NH44, NH765</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span><strong>Risk Areas:</strong> Heavy traffic, NH44 accidents</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Service Areas in Hyderabad</h3>
                <ul className="space-y-2">
                  <li>• City Center & Old City</li>
                  <li>• Hi-Tech City & Gachibowli</li>
                  <li>• Secunderabad & Begumpet</li>
                  <li>• Outer Ring Road (ORR)</li>
                  <li>• NH44 corridor</li>
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

export default LocationHyderabad;