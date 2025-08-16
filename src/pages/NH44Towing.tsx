import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, AlertTriangle, Clock, Route } from "lucide-react";

const NH44Towing = () => {
  const nh44Locations = [
    {
      location: "Hyderabad - Outer Ring Road",
      distance: "286km from Nandyal",
      responseTime: "4-5 hours",
      commonIssues: "Heavy traffic, overheating vehicles"
    },
    {
      location: "Kurnool - NH44 Junction", 
      distance: "42km from Nandyal",
      responseTime: "45 minutes",
      commonIssues: "Tire blowouts, mechanical failures"
    },
    {
      location: "Anantapur - Bypass Road",
      distance: "120km from Nandyal", 
      responseTime: "2 hours",
      commonIssues: "Fuel issues, battery problems"
    },
    {
      location: "Bangalore Highway Entry",
      distance: "350km from Nandyal",
      responseTime: "5-6 hours",
      commonIssues: "Long-distance breakdowns, toll area issues"
    }
  ];

  const emergencyTips = [
    "Move vehicle to leftmost lane or shoulder if possible",
    "Switch on hazard lights immediately",
    "Place warning triangle 50-100 meters behind vehicle",
    "Exit vehicle from side away from traffic",
    "Call +91 98765 43210 and share your location",
    "Stay away from vehicle until help arrives"
  ];

  return (
    <>
      <Helmet>
        <title>NH44 Highway Breakdown Service - 24/7 Emergency Towing | Hussain Towing</title>
        <meta name="description" content="Emergency towing service on NH44 highway. Fast response for breakdowns between Hyderabad-Kurnool-Bangalore route. 24/7 availability, strategic positioning along NH44." />
        <meta name="keywords" content="NH44 breakdown service, highway towing NH44, Hyderabad Bangalore highway emergency, NH44 accident recovery, highway vehicle rescue" />
        <link rel="canonical" href="https://hussaintowing.com/nh44-highway-towing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Highway Emergency Towing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            },
            "areaServed": {
              "@type": "Place",
              "name": "NH44 Highway Corridor"
            },
            "offers": {
              "@type": "Offer",
              "name": "24/7 Highway Emergency Response",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-6 font-semibold">
              <AlertTriangle className="h-4 w-4" />
              Emergency Highway Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NH44 Highway <span className="text-primary">Breakdown Service</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              24/7 emergency towing service on NH44 highway. Fast response for vehicle breakdowns on Hyderabad-Kurnool-Bangalore route.
            </p>
            <Button variant="cta-hero" size="lg">
              <Phone className="h-6 w-6 mr-2" />
              Emergency: +91 98765 43210
            </Button>
          </div>
        </section>

        {/* NH44 Coverage */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">NH44 Coverage Map</h2>
              <p className="text-xl text-muted-foreground">
                Strategic positioning for rapid response along the entire NH44 corridor
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {nh44Locations.map((location, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {location.location}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Route className="h-4 w-4 text-muted-foreground" />
                      <span>{location.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{location.responseTime} response</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Common Issues:</strong> {location.commonIssues}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Safety Tips */}
            <div className="bg-orange-50 border-l-4 border-l-orange-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-900">Highway Breakdown Safety Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-orange-900 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Response Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our NH44 Response Statistics</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">15 min</div>
                <div className="text-sm text-muted-foreground">Average call-to-dispatch time</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">45 min</div>
                <div className="text-sm text-muted-foreground">Response time Kurnool sector</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">89%</div>
                <div className="text-sm text-muted-foreground">Successful roadside repairs</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-900">
              Stranded on NH44? Call Immediately!
            </h3>
            <p className="text-lg text-red-800 mb-6">
              Don't risk your safety. Our emergency response team is ready to assist you 24/7 on NH44.
            </p>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-red-600">+91 98765 43210</div>
              <Button variant="destructive" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line Now
              </Button>
              <p className="text-sm text-red-700">
                Available in Hindi, Telugu, English • GPS location sharing via WhatsApp
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NH44Towing;