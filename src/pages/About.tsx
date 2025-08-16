import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Award, Clock, MapPin, Users, Truck, Shield } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Hussain Towing Services - Nandyal's Trusted Towing Company</title>
        <meta name="description" content="Learn about Hussain Towing Services - over 5 years of experience providing professional towing and roadside assistance in Nandyal and surrounding areas within 300km radius." />
        <meta name="keywords" content="about Hussain Towing, towing company Nandyal, professional towing services, roadside assistance experience" />
        <link rel="canonical" href="https://hussaintowing.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Hussain Towing Services",
              "foundingDate": "2019",
              "description": "Professional towing and roadside assistance company serving Nandyal and surrounding areas",
              "telephone": "+91 98765 43210",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nandyal",
                "addressRegion": "Andhra Pradesh", 
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">Hussain Towing Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Nandyal's most trusted towing company with over 5 years of experience in professional vehicle recovery and transport services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2019, Hussain Towing Services began with a simple mission: to provide reliable, professional towing services to the people of Nandyal and surrounding areas. What started as a small family business has grown into the region's most trusted emergency response team.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We understand that vehicle breakdowns and accidents can happen at any time, which is why we've built our reputation on fast response times, professional service, and fair pricing. Our team operates 24/7, ensuring help is always just a phone call away.
                </p>
                <Button variant="cta-hero" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +91 98765 43210
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">300km</div>
                    <div className="text-sm text-muted-foreground">Service Radius</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide every interaction and service we provide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Reliability</CardTitle>
                  <CardDescription>
                    When you call us, we'll be there. Fast response times and dependable service, every time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Safety First</CardTitle>
                  <CardDescription>
                    Your safety and your vehicle's protection are our top priorities in every operation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Professionalism</CardTitle>
                  <CardDescription>
                    Trained, uniformed operators who treat your vehicle with care and respect.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Service Area */}
            <div className="bg-muted rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Service Area</h3>
                <p className="text-lg text-muted-foreground">
                  We proudly serve Nandyal and surrounding areas within a 300km radius
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Hyderabad (286km)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kurnool (60km)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Guntur (150km)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Vijayawada (200km)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Anantapur (120km)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Tirupati (250km)</span>
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

export default About;