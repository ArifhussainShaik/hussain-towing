import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Car, Clock, Shield, MapPin, Star } from "lucide-react";

const LightVehicleTowing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Light Vehicle Towing Service",
    "description": "Professional car and light vehicle towing services",
    "provider": {
      "@type": "Organization",
      "name": "Hussain Towing Services",
      "telephone": "+91 98765 43210"
    },
    "serviceType": "Towing Service",
    "areaServed": "Andhra Pradesh"
  };

  return (
    <>
      <SEOHead
        title="Light Vehicle Towing Service - Car Towing in Nandyal | Hussain Towing"
        description="Professional car towing service in Nandyal. Light vehicle recovery for cars, SUVs, and small vehicles. 24/7 emergency response across Andhra Pradesh. Call +91 98765 43210."
        keywords="car towing service, light vehicle towing, small vehicle recovery, car breakdown service, SUV towing, emergency car towing Nandyal"
        canonical="https://hussaintowing.com/light-vehicle-towing"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Light Vehicle <span className="text-primary">Towing Service</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Professional car towing and small vehicle recovery across Nandyal and Andhra Pradesh. Safe, fast, and reliable service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta-hero" size="lg" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="h-6 w-6 mr-2" />
                      Call +91 98765 43210
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Get Quote Now
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Light Vehicle Coverage</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Sedans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Hatchbacks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>SUVs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Small Vans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Light Vehicle Towing Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive car towing solutions with modern equipment and experienced drivers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Car className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Emergency Car Breakdown</h3>
                  <p className="text-muted-foreground">
                    Immediate response for car breakdowns on highways and city roads. Safe loading and transport to your preferred destination.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Accident Recovery</h3>
                  <p className="text-muted-foreground">
                    Professional accident vehicle recovery with proper safety protocols. Insurance-approved service documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock service for emergency situations. No extra charges for night or weekend calls.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Why Choose Our Car Towing?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Modern Tow Trucks:</strong> Well-maintained flatbed and wheel-lift tow trucks for safe transport
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Experienced Drivers:</strong> Trained professionals with 5+ years in vehicle recovery
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Transparent Pricing:</strong> Fixed rates based on distance and vehicle type, no hidden charges
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Full Insurance:</strong> Complete vehicle protection during loading, transport, and unloading
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4">Service Coverage</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>300km radius from Nandyal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Average response: 30-45 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Fully licensed and insured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LightVehicleTowing;