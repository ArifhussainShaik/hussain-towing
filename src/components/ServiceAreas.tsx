import { MapPin, Route, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceAreas = () => {
  const coverageAreas = [
    {
      city: "Hyderabad",
      distance: "286km",
      highways: "NH44, NH765",
      responseTime: "4-5 hours",
      landmarks: "Hi-Tech City, Old City, ORR"
    },
    {
      city: "Kurnool", 
      distance: "42km",
      highways: "NH40, SH4",
      responseTime: "45 minutes",
      landmarks: "Kurnool Medical College, Tungabhadra Dam"
    },
    {
      city: "Vijayawada",
      distance: "190km", 
      highways: "NH65, NH16",
      responseTime: "2.5 hours",
      landmarks: "Krishna River, Prakasam Barrage"
    },
    {
      city: "Guntur",
      distance: "165km",
      highways: "NH16, SH1",
      responseTime: "2 hours",
      landmarks: "Agricultural Market, Railway Junction"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Coverage Map</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive towing coverage across Andhra Pradesh with 300km radius from Nandyal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coverageAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  {area.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Route className="h-4 w-4 text-muted-foreground" />
                  <span>{area.distance} via {area.highways}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{area.responseTime} response</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Coverage: {area.landmarks}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Emergency Breakdown on NH44 or NH40?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Our tow trucks are strategically positioned for rapid response across major Andhra Pradesh highways
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/80 rounded-lg p-4">
              <div className="font-semibold text-primary">NH44 Corridor</div>
              <div>Hyderabad - Kurnool - Bangalore route</div>
            </div>
            <div className="bg-background/80 rounded-lg p-4">
              <div className="font-semibold text-primary">NH40 Highway</div>
              <div>Nandyal - Kurnool - Kadapa route</div>
            </div>
            <div className="bg-background/80 rounded-lg p-4">
              <div className="font-semibold text-primary">State Highways</div>
              <div>Local roads and rural areas covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;