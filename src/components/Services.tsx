import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Truck, AlertTriangle, Wrench } from "lucide-react";
import carTowingImage from "@/assets/service-car-towing.jpg";
import heavyDutyImage from "@/assets/service-heavy-duty.jpg";
import emergencyImage from "@/assets/service-emergency.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Light-Duty Towing",
      description: "Cars, motorcycles, and small vehicles. Fast and safe transport to your destination.",
      image: carTowingImage,
      features: ["Flatbed & wheel-lift towing", "No damage guarantee", "Insurance approved"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Recovery",
      description: "24/7 accident recovery and roadside assistance when you need it most.",
      image: emergencyImage,
      features: ["24/7 availability", "Rapid response", "Professional cleanup"]
    },
    {
      icon: Truck,
      title: "Heavy Equipment",
      description: "Construction equipment, large trucks, and commercial vehicle transport.",
      image: heavyDutyImage,
      features: ["Heavy-duty capability", "Specialized equipment", "Commercial rates"]
    },
    {
      icon: Wrench,
      title: "Long-Haul Transport",
      description: "Safe transport across the 250km service area and beyond.",
      image: carTowingImage,
      features: ["Long-distance towing", "Secure transport", "Competitive pricing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional towing and recovery services for every situation. 
            From light-duty cars to heavy industrial equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <service.icon className="absolute top-4 right-4 h-8 w-8 text-primary bg-background/90 p-1.5 rounded" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta-hero" size="lg">
            Get Free Quote Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;