import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Truck, Clock, Shield, MapPin, Star } from "lucide-react";

const HeavyVehicleTowing = () => {
  return (
    <>
      <Helmet>
        <title>Heavy Vehicle Towing Service - Truck & Bus Towing | Hussain Towing</title>
        <meta name="description" content="Professional heavy vehicle towing in Nandyal. Truck towing, bus recovery, heavy equipment transport. Specialized equipment for commercial vehicles. Call +91 98765 43210." />
        <meta name="keywords" content="heavy vehicle towing, truck towing service, bus recovery, commercial vehicle towing, heavy equipment transport, truck breakdown service" />
        <link rel="canonical" href="https://hussaintowing.com/heavy-vehicle-towing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Heavy Vehicle Towing Service",
            "description": "Professional truck and heavy vehicle towing services",
            "provider": {
              "@type": "Organization",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            },
            "serviceType": "Heavy Vehicle Towing",
            "areaServed": "Andhra Pradesh"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Heavy Vehicle <span className="text-primary">Towing Service</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Specialized towing for trucks, buses, and heavy commercial vehicles. Professional equipment and experienced operators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta-hero" size="lg">
                    <Phone className="h-6 w-6 mr-2" />
                    Call +91 98765 43210
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Get Heavy Vehicle Quote
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Heavy Vehicle Coverage</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Trucks (up to 25T)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Buses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Trailers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Heavy Equipment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Specialized Heavy Vehicle Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional heavy-duty towing with specialized equipment for commercial vehicles and heavy machinery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Commercial Truck Towing</h3>
                  <p className="text-muted-foreground">
                    Heavy-duty tow trucks for commercial vehicles up to 25 tons. Proper loading and securing for safe transport.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Heavy Equipment Transport</h3>
                  <p className="text-muted-foreground">
                    Specialized transport for construction equipment, excavators, and industrial machinery with proper permits.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Emergency Recovery</h3>
                  <p className="text-muted-foreground">
                    24/7 emergency response for commercial vehicle breakdowns and accidents with minimal business disruption.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Heavy Vehicle Capabilities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Heavy-Duty Equipment:</strong> 25-ton capacity tow trucks with hydraulic systems
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Certified Operators:</strong> Trained in heavy vehicle recovery and safety protocols
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Permit Handling:</strong> All necessary permits for inter-state heavy vehicle transport
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Fleet Management:</strong> Dedicated support for commercial fleet breakdowns
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4">Commercial Rates</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Truck Towing (per km):</span>
                      <span className="font-bold">₹45-60</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Heavy Equipment:</span>
                      <span className="font-bold">₹60-80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Surcharge:</span>
                      <span className="font-bold">20%</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Fleet Discount:</span>
                      <span className="text-primary">15% Off</span>
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

export default HeavyVehicleTowing;