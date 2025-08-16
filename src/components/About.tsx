import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed towing operators with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock emergency service because breakdowns don't follow business hours."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional operators with years of experience in safe vehicle recovery and transport."
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "Serving Nandyal and surrounding areas with reliable, honest, and transparent pricing."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Hussain Towing?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              For over 5 years, Hussain Towing Services has been Nandyal's trusted partner for 
              reliable vehicle recovery and transport. We understand that being stranded is stressful, 
              which is why we focus on fast response times and professional service.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Safety First</h3>
                  <p className="text-muted-foreground">
                    Your vehicle's safety is our priority. We use professional-grade equipment 
                    and follow industry best practices for damage-free towing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rapid Response</h3>
                  <p className="text-muted-foreground">
                    Average response time under 30 minutes within Nandyal city limits. 
                    We know time matters when you're stranded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-industrial transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;