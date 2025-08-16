import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Route } from "lucide-react";

const CoverageMap = () => {
  const locations = [
    { name: "Hyderabad", distance: "286km", time: "4-5 hours", direction: "northeast" },
    { name: "Kurnool", distance: "60km", time: "1 hour", direction: "north" },
    { name: "Guntur", distance: "180km", time: "2.5 hours", direction: "east" },
    { name: "Vijayawada", distance: "200km", time: "3 hours", direction: "east" },
    { name: "Anantapur", distance: "120km", time: "2 hours", direction: "south" },
    { name: "Tirupati", distance: "280km", time: "4 hours", direction: "southeast" },
    { name: "Bangalore", distance: "300km", time: "4.5 hours", direction: "south" },
    { name: "Kadapa", distance: "180km", time: "2.5 hours", direction: "southeast" },
    { name: "Ongole", distance: "250km", time: "3.5 hours", direction: "east" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Service <span className="text-primary">Coverage Area</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            300km radius from Nandyal covering all major cities and highways in Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Service Coverage Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 h-80 overflow-hidden">
                  {/* Central Nandyal */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm z-10 relative">
                      Nandyal
                    </div>
                    {/* Coverage radius circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary/30 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Location markers */}
                  {locations.map((location, index) => {
                    const positions = [
                      "top-4 right-8", "top-8 left-4", "top-12 right-12", 
                      "top-16 right-4", "bottom-16 left-8", "bottom-8 right-16",
                      "bottom-4 left-12", "bottom-12 left-16", "top-20 right-20"
                    ];
                    
                    return (
                      <div 
                        key={location.name}
                        className={`absolute ${positions[index]} bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold`}
                        title={`${location.name} - ${location.distance}`}
                      >
                        {location.name.substring(0, 2)}
                      </div>
                    );
                  })}
                  
                  {/* Connecting lines */}
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-primary origin-left"
                        style={{ 
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg)` 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300km</div>
                <div className="text-sm text-muted-foreground">Service Radius</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 max-h-80 overflow-y-auto">
              {locations.map((location) => (
                <div key={location.name} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{location.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Route className="h-3 w-3" />
                      {location.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {location.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-lg p-6">
              <h4 className="font-bold mb-3">Coverage Highlights</h4>
              <ul className="space-y-2 text-sm">
                <li>• Complete NH40 and NH44 highway coverage</li>
                <li>• All major industrial areas and airports</li>
                <li>• Rural and remote location access</li>
                <li>• Inter-state transport with proper permits</li>
                <li>• Emergency response to any location within radius</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;