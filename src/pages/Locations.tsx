import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Route, AlertTriangle } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Hyderabad",
      distance: "286km",
      time: "4-5 hours",
      highways: ["NH44", "NH765"],
      population: "10M+",
      description: "Major metropolitan city and tech hub of Telangana",
      accidents: "High traffic density, NH44 accidents frequent",
      slug: "hyderabad"
    },
    {
      name: "Kurnool",
      distance: "60km", 
      time: "1 hour",
      highways: ["NH40", "NH44"],
      population: "500K+",
      description: "Major district headquarters and commercial center",
      accidents: "NH40 blackspots near city limits",
      slug: "kurnool"
    },
    {
      name: "Guntur",
      distance: "150km",
      time: "2.5 hours", 
      highways: ["NH16", "NH544"],
      population: "750K+",
      description: "Important agricultural and educational hub",
      accidents: "NH16 coastal route accidents",
      slug: "guntur"
    },
    {
      name: "Vijayawada", 
      distance: "200km",
      time: "3 hours",
      highways: ["NH16", "NH65"],
      population: "1.5M+",
      description: "Major river port city and commercial center",
      accidents: "Bridge approach areas, heavy vehicle accidents",
      slug: "vijayawada"
    },
    {
      name: "Anantapur",
      distance: "120km",
      time: "2 hours",
      highways: ["NH44", "NH205"],
      population: "400K+", 
      description: "District headquarters near Karnataka border",
      accidents: "Rural highway stretches, night visibility issues",
      slug: "anantapur"
    },
    {
      name: "Tirupati",
      distance: "250km",
      time: "4 hours",
      highways: ["NH40", "NH71"],
      population: "400K+",
      description: "Famous pilgrimage destination and temple city",
      accidents: "Pilgrim traffic, ghat section accidents",
      slug: "tirupati"
    },
    {
      name: "Bangalore",
      distance: "280km",
      time: "4.5 hours", 
      highways: ["NH44", "NH207"],
      population: "12M+",
      description: "IT capital of India, major metropolitan area",
      accidents: "Interstate highway accidents, heavy commercial traffic",
      slug: "bangalore"
    },
    {
      name: "Kadapa",
      distance: "180km",
      time: "3 hours",
      highways: ["NH40", "NH167"],
      population: "350K+",
      description: "District headquarters with mining industry",
      accidents: "Mining vehicle accidents, rural road issues",
      slug: "kadapa"
    },
    {
      name: "Ongole",
      distance: "220km", 
      time: "3.5 hours",
      highways: ["NH16"],
      population: "200K+",
      description: "Coastal district headquarters and port city",
      accidents: "Coastal highway accidents, weather-related issues",
      slug: "ongole"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Towing Service Locations - 300km Coverage from Nandyal | Hussain Towing</title>
        <meta name="description" content="Hussain Towing Services covers 300km radius from Nandyal including Hyderabad, Kurnool, Guntur, Vijayawada, Anantapur, Tirupati, Bangalore. 24/7 emergency towing across Andhra Pradesh." />
        <meta name="keywords" content="towing service locations, Hyderabad towing, Kurnool towing, Guntur towing, Vijayawada towing, Andhra Pradesh towing coverage" />
        <link rel="canonical" href="https://hussaintowing.com/locations" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ServiceArea",
            "name": "Hussain Towing Services Coverage Area",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates", 
                "latitude": "15.4833",
                "longitude": "78.4833"
              },
              "geoRadius": "300000"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
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
              Service <span className="text-primary">Locations</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Professional towing services across a 300km radius from Nandyal, covering major cities and highways in Andhra Pradesh and beyond.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold">
              <MapPin className="h-5 w-5" />
              300km Coverage Radius
            </div>
          </div>
        </section>

        {/* Coverage Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Coverage Area</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From emergency roadside assistance to long-distance vehicle transport, we serve major cities, towns, and highways across Andhra Pradesh and neighboring states.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">300km</div>
                  <CardTitle className="text-lg">Service Radius</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">9</div>
                  <CardTitle className="text-lg">Major Cities</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <CardTitle className="text-lg">Emergency Response</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <CardTitle className="text-lg">Years Experience</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Card key={location.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{location.name}</CardTitle>
                      <Badge variant="outline">{location.distance}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {location.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Route className="h-4 w-4 text-primary" />
                        <span><strong>Travel Time:</strong> {location.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span><strong>Highways:</strong> {location.highways.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-muted-foreground">{location.accidents}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <a href={`/locations/${location.slug}`} className="flex items-center gap-1">
                          View Details
                        </a>
                      </Button>
                      <Button variant="emergency" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Highway Coverage */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-8">Major Highway Coverage</h3>
              <div className="bg-muted rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Route className="h-5 w-5 text-primary" />
                      NH40 (Mumbai-Chennai)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Major east-west highway with known accident blackspots near Dhone and Kurnool. Heavy commercial traffic route.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Route className="h-5 w-5 text-primary" />
                      NH44 (Delhi-Chennai)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      India's longest highway passing through Hyderabad. High-speed corridor with frequent breakdowns and accidents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Route className="h-5 w-5 text-primary" />
                      NH16 (Kolkata-Chennai)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Coastal highway connecting Guntur and Vijayawada. Weather-sensitive route with monsoon-related incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Response Promise */}
            <div className="bg-emergency/10 border border-emergency/20 rounded-lg p-8 mt-16 text-center">
              <Clock className="h-12 w-12 text-emergency mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Response Time Promise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-bold text-emergency text-lg">≤ 30 minutes</div>
                  <div className="text-muted-foreground">Nandyal city limits</div>
                </div>
                <div>
                  <div className="font-bold text-emergency text-lg">≤ 60 minutes</div>
                  <div className="text-muted-foreground">Within 100km radius</div>
                </div>
                <div>
                  <div className="font-bold text-emergency text-lg">≤ 2 hours</div>
                  <div className="text-muted-foreground">Full 300km coverage area</div>
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

export default Locations;