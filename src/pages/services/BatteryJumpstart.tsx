import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Battery, Clock, Shield, MapPin, Star } from "lucide-react";

const BatteryJumpstart = () => {
  return (
    <>
      <Helmet>
        <title>Battery Jumpstart Service - Car Battery Help Nandyal | Hussain Towing</title>
        <meta name="description" content="Professional battery jumpstart service in Nandyal. Dead car battery assistance, mobile battery replacement, 24/7 roadside battery help. Call +91 98765 43210." />
        <meta name="keywords" content="car battery service, jumpstart service near me, dead battery help, mobile battery replacement, battery roadside assistance Nandyal" />
        <link rel="canonical" href="https://hussaintowing.com/battery-jumpstart" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Battery Jumpstart Service",
            "description": "Professional car battery jumpstart and replacement service",
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
                  Battery <span className="text-primary">Jumpstart Service</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Fast battery jumpstart and replacement service across Nandyal. Get back on the road quickly with professional battery assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta-hero" size="lg">
                    <Phone className="h-6 w-6 mr-2" />
                    Call +91 98765 43210
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Emergency Battery Help
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Battery Service</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>15-30 minute response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-primary" />
                    <span>Professional jumpstart equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Battery replacement available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Mobile service anywhere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Complete Battery Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional battery services to get you moving again - from jumpstarts to full battery replacement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Battery className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Emergency Jumpstart</h3>
                  <p className="text-muted-foreground">
                    Professional jumpstart service using proper equipment to safely boost your dead car battery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Battery Testing</h3>
                  <p className="text-muted-foreground">
                    Complete battery health check with digital testing equipment to assess remaining battery life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Battery Replacement</h3>
                  <p className="text-muted-foreground">
                    Mobile battery replacement service with quality batteries and professional installation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Battery Service Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Professional Equipment:</strong> Commercial-grade jump boxes and battery testers
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Safety First:</strong> Proper procedures to prevent electrical damage to your vehicle
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Quality Batteries:</strong> Genuine replacement batteries with warranty coverage
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <strong>Quick Response:</strong> Average 15-30 minute arrival time for battery emergencies
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4">Battery Service Rates</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Jumpstart Service:</span>
                      <span className="font-bold">₹200-300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery Testing:</span>
                      <span className="font-bold">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery Replacement:</span>
                      <span className="font-bold">₹2500-8000</span>
                    </div>
                    <hr className="my-2" />
                    <div className="text-xs text-muted-foreground">
                      * Battery prices vary by vehicle type and brand
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Battery Quote
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Signs You Need Battery Service</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Slow engine crank when starting</li>
                  <li>• Dashboard warning lights</li>
                  <li>• Headlights dim when idling</li>
                  <li>• Battery more than 3 years old</li>
                  <li>• Corrosion on battery terminals</li>
                  <li>• Strange smell from battery area</li>
                </ul>
              </div>
              <div className="bg-secondary/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Battery Maintenance Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Keep terminals clean and corrosion-free</li>
                  <li>• Check electrolyte levels monthly</li>
                  <li>• Avoid leaving lights on when parked</li>
                  <li>• Test battery before monsoon season</li>
                  <li>• Secure battery properly to prevent vibration</li>
                  <li>• Replace battery every 3-4 years</li>
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

export default BatteryJumpstart;