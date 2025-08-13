import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Help Now</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Emergency? Call us directly. Need a quote? Fill out the form and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-emergency text-emergency-foreground">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Phone className="h-6 w-6" />
                  Emergency Hotline
                </CardTitle>
                <CardDescription className="text-emergency-foreground/80 text-lg">
                  24/7 Emergency Response
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-4">+91 98765 43210</div>
                <Button variant="outline" className="bg-white text-emergency border-white hover:bg-emergency-foreground hover:text-emergency">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@hussaintowing.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Nandyal, Andhra Pradesh</p>
                </CardContent>
              </Card>

              <Card className="sm:col-span-2">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="text-muted-foreground">
                    <p className="font-semibold text-primary">Emergency: 24/7</p>
                    <p>Office: Mon-Sat 8:00 AM - 8:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>
                Tell us about your towing needs and we'll provide a free estimate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Service Needed</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Light-duty car towing</option>
                  <option>Heavy equipment transport</option>
                  <option>Emergency recovery</option>
                  <option>Long-haul transport</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Location Details</label>
                <Input placeholder="Pick-up location" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Additional Details</label>
                <Textarea 
                  placeholder="Describe your vehicle, situation, or any special requirements..."
                  rows={4}
                />
              </div>
              
              <Button variant="cta-hero" className="w-full">
                Send Quote Request
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                For immediate emergencies, please call our 24/7 hotline directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;