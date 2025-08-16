import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, AlertTriangle, Clock, Shield, MapPin, Star } from "lucide-react";

const AccidentRecovery = () => {
  return (
    <>
      <Helmet>
        <title>Accident Vehicle Recovery - Emergency Crash Site Cleanup | Hussain Towing</title>
        <meta name="description" content="Professional accident vehicle recovery in Nandyal. Emergency crash site cleanup, damaged vehicle removal, insurance-approved service. 24/7 response. Call +91 98765 43210." />
        <meta name="keywords" content="accident vehicle removal, crash site cleanup, damaged vehicle recovery, emergency accident service, insurance approved towing" />
        <link rel="canonical" href="https://hussaintowing.com/accident-recovery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Accident Vehicle Recovery",
            "description": "Professional accident vehicle recovery and crash site cleanup",
            "provider": {
              "@type": "Organization",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            },
            "serviceType": "Emergency Recovery Service",
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
                  Accident Vehicle <span className="text-primary">Recovery</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Professional accident recovery and crash site cleanup. Insurance-approved service with proper documentation and safety protocols.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="emergency" size="lg">
                    <Phone className="h-6 w-6 mr-2" />
                    Emergency: +91 98765 43210
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Insurance Claims Help
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Emergency Response</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>24/7 Emergency Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Insurance Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-primary" />
                    <span>Safety Protocol Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>All Highway Coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Professional Accident Recovery Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Immediate response for vehicle accidents with proper safety protocols and insurance compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <AlertTriangle className="h-12 w-12 text-emergency mb-4" />
                  <h3 className="text-xl font-bold mb-3">Emergency Response</h3>
                  <p className="text-muted-foreground">
                    Immediate dispatch to accident sites with proper safety equipment and traffic control measures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Damage Assessment</h3>
                  <p className="text-muted-foreground">
                    Professional damage documentation for insurance claims with detailed photographic evidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Site Cleanup</h3>
                  <p className="text-muted-foreground">
                    Complete accident site cleanup including debris removal and traffic restoration.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Accident Recovery Process</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold mb-1">Emergency Response</h4>
                        <p className="text-muted-foreground text-sm">Immediate dispatch with safety equipment and traffic control</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold mb-1">Site Securing</h4>
                        <p className="text-muted-foreground text-sm">Traffic management and area safety for recovery operations</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold mb-1">Vehicle Recovery</h4>
                        <p className="text-muted-foreground text-sm">Safe removal of damaged vehicles with proper equipment</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-bold mb-1">Documentation</h4>
                        <p className="text-muted-foreground text-sm">Complete insurance documentation and damage assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4">Insurance Benefits</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Pre-approved by major insurers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Direct billing to insurance companies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Detailed damage documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Claims assistance support</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Insurance Claim Help
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-emergency/10 border border-emergency/20 rounded-lg p-8 text-center">
              <AlertTriangle className="h-16 w-16 text-emergency mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Accident? Call Immediately!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Don't wait - immediate response can prevent further damage and ensure proper documentation for insurance claims.
              </p>
              <Button variant="emergency" size="lg">
                <Phone className="h-6 w-6 mr-2" />
                Emergency: +91 98765 43210
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AccidentRecovery;