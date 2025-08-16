import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Zap, Shield, MapPin, AlertTriangle } from "lucide-react";

const EmergencyTowing = () => {
  const emergencyServices = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "15-minute dispatch commitment",
      details: "Call received → Location confirmed → Tow truck dispatched within 15 minutes"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Round-the-clock emergency service",
      details: "No holidays, no weekends off. Real person answers every emergency call"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Trained emergency response team",
      details: "Certified operators with emergency response training and safety equipment"
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time location sharing",
      details: "Share your exact location via WhatsApp for fastest response time"
    }
  ];

  const emergencyScenarios = [
    {
      scenario: "Highway Breakdown",
      response: "Priority dispatch for highway emergencies",
      time: "30-60 minutes",
      coverage: "NH44, NH40, NH16, NH65"
    },
    {
      scenario: "Accident Recovery",
      response: "Coordinate with police and insurance",
      time: "45-90 minutes", 
      coverage: "All major roads and highways"
    },
    {
      scenario: "Vehicle Fire/Damage",
      response: "Emergency containment and recovery",
      time: "20-45 minutes",
      coverage: "Urban and rural areas"
    },
    {
      scenario: "Flood/Weather Emergency",
      response: "Specialized weather emergency response",
      time: "1-2 hours",
      coverage: "300km radius from Nandyal"
    }
  ];

  return (
    <>
      <Helmet>
        <title>24 Hour Emergency Towing Near Me - Instant Response | Hussain Towing Services</title>
        <meta name="description" content="Emergency towing near me with 15-minute dispatch guarantee. 24/7 availability across Andhra Pradesh. Highway breakdowns, accidents, weather emergencies. Call now!" />
        <meta name="keywords" content="emergency towing near me, 24 hour towing service, instant towing response, highway emergency towing, accident recovery service" />
        <link rel="canonical" href="https://hussaintowing.com/24-hour-emergency-towing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "24 Hour Emergency Towing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": "+91 98765 43210",
              "availableLanguage": ["hi", "te", "en"]
            },
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "opens": "00:00",
              "closes": "23:59",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6 font-semibold">
              <AlertTriangle className="h-4 w-4" />
              Emergency Service Active
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24 Hour Emergency Towing <span className="text-yellow-300">Near Me</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Instant response emergency towing service. 15-minute dispatch guarantee across Andhra Pradesh. Real person answers every call.
            </p>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-yellow-300">+91 98765 43210</div>
              <Button variant="secondary" size="lg" className="bg-yellow-400 text-red-900 hover:bg-yellow-300">
                <Phone className="h-6 w-6 mr-2" />
                Emergency Call Now
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Emergency Response Features</h2>
              <p className="text-xl text-muted-foreground">
                Professional emergency towing designed for critical situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-red-200">
                  <CardHeader>
                    <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-sm text-red-600 font-semibold">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Scenarios */}
            <div className="bg-red-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-red-900">Emergency Response by Scenario</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyScenarios.map((emergency, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-l-red-500">
                    <h4 className="font-bold text-lg mb-2 text-red-900">{emergency.scenario}</h4>
                    <p className="text-sm text-red-800 mb-3">{emergency.response}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="font-semibold text-red-700">Response Time:</span>
                        <div className="text-red-600">{emergency.time}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-red-700">Coverage:</span>
                        <div className="text-red-600">{emergency.coverage}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 15-Minute Guarantee */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Clock className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-900">
              15-Minute Dispatch Guarantee
            </h3>
            <p className="text-lg text-yellow-800 mb-8">
              From the moment you call, our nearest available tow truck will be dispatched within 15 minutes. No delays, no excuses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">1-5 min</div>
                <div className="text-sm text-yellow-800">Call processing & location confirmation</div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5-10 min</div>
                <div className="text-sm text-yellow-800">Nearest truck identification & contact</div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">10-15 min</div>
                <div className="text-sm text-yellow-800">Truck dispatch & arrival time confirmation</div>
              </div>
            </div>
            
            <Button variant="default" size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
              <Phone className="h-5 w-5 mr-2" />
              Test Our Response Time
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EmergencyTowing;