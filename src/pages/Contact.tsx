import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Hussain Towing Services - 24/7 Emergency Towing Nandyal</title>
        <meta name="description" content="Contact Hussain Towing Services for 24/7 emergency towing in Nandyal. Call +91 98765 43210 for immediate assistance. Serving 300km radius including Hyderabad, Kurnool, Guntur." />
        <meta name="keywords" content="contact towing service Nandyal, emergency towing phone number, 24/7 roadside assistance contact, towing service Andhra Pradesh" />
        <link rel="canonical" href="https://hussaintowing.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210",
              "email": "info@hussaintowing.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nandyal",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Su 00:00-23:59"
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
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Need emergency towing or have questions about our services? We're here to help 24/7.
            </p>
            <a href="tel:+919876543210" className="bg-emergency text-emergency-foreground px-6 py-4 rounded-lg inline-flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity">
              <Phone className="h-6 w-6" />
              Emergency: +91 98765 43210
            </a>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-emergency">
                        <Phone className="h-6 w-6" />
                        24/7 Emergency Line
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold">
                        <a href="tel:+919876543210" className="hover:underline">
                          +91 98765 43210
                        </a>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Call anytime for immediate emergency towing and roadside assistance
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-primary" />
                        Email
                      </CardTitle>
                      <CardDescription className="text-lg">
                        info@hussaintowing.com
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        For general inquiries, quotes, and non-emergency requests
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        Service Area
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Nandyal, Andhra Pradesh
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Serving 300km radius including Hyderabad, Kurnool, Guntur, Vijayawada, and surrounding areas
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold text-emergency">Emergency Service:</span>
                          <span>24/7</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Office Hours:</span>
                          <span>Mon-Sat 8AM-8PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Emergency Only</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Our Response Promise</h3>
                  <p className="text-muted-foreground">
                    We aim to reach you within <span className="font-semibold text-primary">30 minutes</span> for emergency calls within Nandyal city limits, and within <span className="font-semibold text-primary">60 minutes</span> for surrounding areas.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-6 w-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below for non-emergency inquiries. For immediate assistance, please call our emergency line.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Your first name" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Your last name" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>

                      <div>
                        <Label htmlFor="location">Your Location</Label>
                        <Input id="location" placeholder="City, area, or landmark" />
                      </div>

                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <select id="service" className="w-full p-3 border border-input rounded-md bg-background">
                          <option value="">Select a service</option>
                          <option value="emergency">Emergency Towing</option>
                          <option value="car-towing">Car Towing</option>
                          <option value="heavy-equipment">Heavy Equipment Towing</option>
                          <option value="roadside">Roadside Assistance</option>
                          <option value="quote">Request Quote</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your situation or inquiry..."
                          rows={4}
                          required
                        />
                      </div>

                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Emergency situations:</strong> Please call our 24/7 emergency line at 
                          <a href="tel:+919876543210" className="font-semibold text-emergency hover:underline">+91 98765 43210</a> instead of using this form.
                        </p>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service Area Map */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Our Service Coverage</h3>
              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground mb-6">
                    We provide comprehensive towing services across a 300km radius from Nandyal, covering major cities and highways in Andhra Pradesh.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Hyderabad (286km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Kurnool (60km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Guntur (150km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Vijayawada (200km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Anantapur (120km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Tirupati (250km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Kadapa (180km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Ongole (220km)</span>
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

export default Contact;