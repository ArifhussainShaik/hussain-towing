import { Shield, Clock, Users, Award, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Faster Than JustDial Providers",
      description: "Direct contact means no middleman delays. Average 15-minute faster response than directory services.",
      highlight: "15 min faster"
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete vehicle protection during transport. All permits for inter-state towing across AP.",
      highlight: "100% insured"
    },
    {
      icon: Users,
      title: "Local Nandyal Team",
      description: "Based in Nandyal with 5+ years serving AP. We know every highway, shortcut, and service station.",
      highlight: "5+ years local"
    },
    {
      icon: Award,
      title: "Transparent Pricing",
      description: "No hidden charges or surge pricing. Fixed rates based on distance and vehicle type.",
      highlight: "No hidden fees"
    },
    {
      icon: Phone,
      title: "24/7 Real Person Answers",
      description: "Always speak to a real person, not automated systems. Immediate dispatch confirmation.",
      highlight: "Human response"
    },
    {
      icon: MapPin,
      title: "Widest Coverage in AP",
      description: "300km radius from Nandyal covers more area than any other local towing service.",
      highlight: "300km radius"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Hussain Towing Over <span className="text-primary">JustDial Providers?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Direct service means better response times, transparent pricing, and personal accountability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full inline-block mb-2">
                      {advantage.highlight}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Skip the Directory Search - Call Direct!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Why wait for JustDial callbacks when you can reach us directly? Save our number and get immediate assistance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  No commission markup like directory services
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Direct dispatch without intermediary delays
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Personal relationship with local Nandyal team
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <a href="tel:+919876543210" className="text-4xl md:text-5xl font-bold text-primary mb-4 hover:underline">+91 98765 43210</a>
              <Button variant="cta-hero" size="lg" asChild>
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5 mr-2" />
                  Save Our Number Now
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Available 24/7 • Real person always answers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;