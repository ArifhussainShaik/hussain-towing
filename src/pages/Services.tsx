import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Car, Truck, Wrench, Clock, Shield, Users } from "lucide-react";
import serviceCar from "@/assets/service-car-towing.webp";
import serviceHeavy from "@/assets/service-heavy-duty.webp";
import serviceEmergency from "@/assets/service-emergency.webp";

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Towing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Hussain Towing Services",
      "telephone": "+91 98765 43210",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nandyal",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "24/7 Emergency Towing",
        "description": "Round-the-clock emergency vehicle recovery and towing services"
      },
      {
        "@type": "Offer", 
        "name": "Light-Duty Car Towing",
        "description": "Safe transport for cars, motorcycles, and light vehicles"
      },
      {
        "@type": "Offer",
        "name": "Heavy Equipment Towing", 
        "description": "Specialized transport for heavy machinery and commercial vehicles"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Car Towing Service, Heavy Vehicle Recovery, Battery Jumpstart - Hussain Towing Services"
        description="Professional car towing service, heavy vehicle recovery, accident vehicle removal, battery jumpstart service in Andhra Pradesh. 24/7 emergency roadside assistance covering 300km radius."
        keywords="car towing service, heavy vehicle recovery, accident vehicle removal, battery jumpstart service, fuel delivery, emergency roadside assistance"
        canonical="https://hussaintowing.com/services"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-primary">Towing Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              From emergency roadside assistance to heavy equipment transport, we provide comprehensive towing solutions across Nandyal and 300km radius.
            </p>
            <Button variant="cta-hero" size="lg" asChild>
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-6 w-6 mr-2" />
                Call +91 98765 43210
              </a>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional towing and recovery services available 24/7 across Andhra Pradesh
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Light-Duty Towing */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 w-full">
                  <img src={serviceCar} alt="Light-duty car towing service" className="absolute inset-0 h-full w-full object-cover"/>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      Light-Duty Towing
                    </CardTitle>
                    <CardDescription>
                      Safe and secure towing for cars, motorcycles, and light commercial vehicles up to 3.5 tons.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 flex-grow">
                      <li>• Cars and SUVs</li>
                      <li>• Motorcycles and scooters</li>
                      <li>• Light commercial vehicles</li>
                      <li>• Damage-free transport</li>
                    </ul>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </div>
              </Card>

              {/* Emergency Recovery */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 w-full">
                    <img src={serviceEmergency} alt="24/7 Emergency recovery service" className="absolute inset-0 h-full w-full object-cover"/>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      Emergency Recovery
                    </CardTitle>
                    <CardDescription>
                      24/7 emergency roadside assistance and accident recovery services across our service area.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 flex-grow">
                      <li>• Accident recovery</li>
                      <li>• Off-road recovery</li>
                      <li>• Jump starts & tire changes</li>
                      <li>• Lockout assistance</li>
                    </ul>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </div>
              </Card>

              {/* Heavy Equipment */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                 <div className="relative h-48 w-full">
                    <img src={serviceHeavy} alt="Heavy equipment towing service" className="absolute inset-0 h-full w-full object-cover"/>
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Heavy Equipment Towing
                    </CardTitle>
                    <CardDescription>
                      Specialized transport for heavy machinery, construction equipment, and commercial vehicles.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4 flex-grow">
                      <li>• Construction machinery</li>
                      <li>• Commercial trucks</li>
                      <li>• Agricultural equipment</li>
                      <li>• Industrial machinery</li>
                    </ul>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Hussain Towing Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">24/7 Availability</h4>
                  <p className="text-muted-foreground">Round-the-clock emergency response when you need us most</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Fully Licensed & Insured</h4>
                  <p className="text-muted-foreground">Complete protection for your vehicle during transport</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Professional Team</h4>
                  <p className="text-muted-foreground">Experienced operators with 5+ years in the industry</p>
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

export default Services;