import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Fuel, Clock, Shield, MapPin, Star } from "lucide-react";

const FuelDelivery = () => {
  return (
    <>
      <Helmet>
        <title>Emergency Fuel Delivery Service - Petrol Delivery Nandyal | Hussain Towing</title>
        <meta name="description" content="Emergency fuel delivery service in Nandyal. Petrol and diesel delivery to your location. 24/7 fuel assistance when you run out of gas. Call +91 98765 43210." />
        <meta name="keywords" content="emergency fuel delivery, petrol delivery service, diesel delivery, fuel assistance Nandyal, emergency gas delivery" />
        <link rel="canonical" href="https://hussaintowing.com/fuel-delivery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Emergency Fuel Delivery Service",
            "description": "Emergency petrol and diesel delivery service",
            "provider": {
              "@type": "Organization",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            },
            "serviceType": "Roadside Assistance",
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
                  Emergency <span className="text-primary">Fuel Delivery</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Ran out of fuel? We deliver petrol and diesel directly to your location across Nandyal and surrounding areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta-hero" size="lg">
                    <Phone className="h-6 w-6 mr-2" />
                    Call +91 98765 43210
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Order Fuel Now
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Fuel Delivery Service</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span>Petrol & Diesel Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>30-45 minute delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Safe handling & transport</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>100km radius coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Emergency Fuel Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional fuel delivery service to get you moving when you're stranded without fuel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Fuel className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Petrol Delivery</h3>
                  <p className="text-muted-foreground">
                    Emergency petrol delivery with certified containers and proper safety protocols for fuel handling.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Fuel className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Diesel Delivery</h3>
                  <p className="text-muted-foreground">
                    Diesel fuel delivery for trucks, buses, and heavy vehicles with appropriate quantity options.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                  <p className="text-muted-foreground">
                    Fast fuel delivery service with average 30-45 minute response time to your exact location.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Fuel Delivery Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Certified Containers:</strong> Approved fuel containers meeting safety standards
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Quality Fuel:</strong> Fresh fuel from authorized dealers with quality guarantee
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Safety First:</strong> Trained personnel with fire safety equipment
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Multiple Quantities:</strong> From 5 liters to 50 liters based on your needs
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4">Fuel Delivery Rates</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Delivery Charge:</span>
                      <span className="font-bold">₹200-400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Petrol (per liter):</span>
                      <span className="font-bold">Market Rate + ₹5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Diesel (per liter):</span>
                      <span className="font-bold">Market Rate + ₹5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minimum Order:</span>
                      <span className="font-bold">5 Liters</span>
                    </div>
                    <hr className="my-2" />
                    <div className="text-xs text-muted-foreground">
                      * Delivery charges vary by distance from fuel station
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Service Coverage Areas</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Nandyal city and suburbs</li>
                  <li>• NH40 and NH44 corridors</li>
                  <li>• Industrial areas and warehouses</li>
                  <li>• Construction sites</li>
                  <li>• Remote locations within 100km</li>
                  <li>• Agricultural areas</li>
                </ul>
              </div>
              <div className="bg-secondary/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Fuel Emergency Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Keep spare fuel container in commercial vehicles</li>
                  <li>• Monitor fuel gauge regularly on long trips</li>
                  <li>• Know fuel station locations on your route</li>
                  <li>• Save our number for fuel emergencies</li>
                  <li>• Plan refueling stops for highway travel</li>
                  <li>• Check fuel quality at unknown stations</li>
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

export default FuelDelivery;