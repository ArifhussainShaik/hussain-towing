import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calculator, CheckCircle } from "lucide-react";

const TowingRates = () => {
  const rateStructure = [
    {
      category: "Light Vehicle Towing",
      vehicles: "Cars, SUVs, Motorcycles",
      baseRate: "₹15-20/km",
      baseCharge: "₹500 (includes first 10km)",
      examples: [
        "Nandyal to Kurnool (42km): ₹1,140",
        "Nandyal to Guntur (165km): ₹2,975",
        "Local towing (within 10km): ₹500"
      ]
    },
    {
      category: "Heavy Vehicle Towing", 
      vehicles: "Trucks, Buses, Equipment",
      baseRate: "₹25-35/km",
      baseCharge: "₹800 (includes first 10km)",
      examples: [
        "Nandyal to Hyderabad (286km): ₹8,350",
        "Nandyal to Vijayawada (190km): ₹5,550",
        "Local heavy towing: ₹800"
      ]
    },
    {
      category: "Emergency Services",
      vehicles: "Battery, Fuel, Lockout",
      baseRate: "₹300-500 service charge",
      baseCharge: "No km charge for roadside fixes",
      examples: [
        "Battery jumpstart: ₹300-500",
        "Fuel delivery: ₹200 + fuel cost",
        "Tire change assistance: ₹400"
      ]
    }
  ];

  const additionalCharges = [
    { service: "Night surcharge (10PM-6AM)", rate: "20% additional" },
    { service: "Holiday/Sunday service", rate: "15% additional" },
    { service: "Off-road recovery", rate: "₹500-1500 extra" },
    { service: "Accident cleanup", rate: "₹1000-3000" },
    { service: "Storage (per day)", rate: "₹200-500" },
    { service: "Inter-state permits", rate: "₹300-800" }
  ];

  return (
    <>
      <Helmet>
        <title>Towing Service Cost Andhra Pradesh - Transparent Rates | Hussain Towing</title>
        <meta name="description" content="Complete towing service cost guide for Andhra Pradesh. Transparent rates: ₹15-20/km light vehicles, ₹25-35/km heavy vehicles. No hidden charges. Get instant quote!" />
        <meta name="keywords" content="towing service cost AP, towing rates Andhra Pradesh, car towing price, heavy vehicle towing cost, emergency towing charges" />
        <link rel="canonical" href="https://hussaintowing.com/towing-rates-andhra-pradesh" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Towing Service Rates",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "15-35",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "15-35",
                "priceCurrency": "INR",
                "unitText": "per kilometer"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing Service <span className="text-primary">Cost in Andhra Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Transparent, competitive rates with no hidden charges. Get instant quotes for all vehicle types across AP.
            </p>
            <Button variant="cta-hero" size="lg">
              <Phone className="h-6 w-6 mr-2" />
              Get Instant Quote: +91 98765 43210
            </Button>
          </div>
        </section>

        {/* Rate Structure */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Rate Structure</h2>
              <p className="text-xl text-muted-foreground">
                Simple, distance-based pricing with no surprise charges
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {rateStructure.map((category, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.vehicles}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{category.baseRate}</div>
                        <div className="text-sm text-muted-foreground">Per kilometer rate</div>
                      </div>
                      <div>
                        <div className="font-semibold">{category.baseCharge}</div>
                        <div className="text-sm text-muted-foreground">Base charge</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Example Costs:</h4>
                        <ul className="space-y-1 text-sm">
                          {category.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Charges */}
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Additional Charges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalCharges.map((charge, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-sm">{charge.service}</span>
                    <span className="font-semibold text-primary">{charge.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rate Calculator CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need an Exact Quote?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Call us with your location and vehicle details for precise pricing. No obligation quotes provided instantly.
            </p>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">+91 98765 43210</div>
              <Button variant="cta-hero" size="lg">
                Call for Instant Quote
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TowingRates;