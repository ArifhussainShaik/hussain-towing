import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MapPin } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Kurnool",
      rating: 5,
      review: "Car broke down on NH40 at midnight. Hussain Towing arrived in 40 minutes and safely transported my vehicle to Kurnool. Professional service at fair price.",
      service: "Emergency Car Towing",
      date: "Jan 2024"
    },
    {
      name: "Priya Construction",
      location: "Hyderabad", 
      rating: 5,
      review: "Needed heavy excavator transported from Hyderabad to Nandyal. Excellent handling of expensive equipment. Will use again for all our machinery transport.",
      service: "Heavy Equipment Transport",
      date: "Dec 2023"
    },
    {
      name: "Venkat Reddy",
      location: "Vijayawada",
      rating: 5,
      review: "Battery died near Vijayawada. Quick jumpstart service got me back on road within 15 minutes. Much faster than calling directory services!",
      service: "Battery Jumpstart",
      date: "Jan 2024"
    },
    {
      name: "Ahmed Logistics",
      location: "Guntur",
      rating: 5,
      review: "Reliable partner for our fleet. Hussain Towing handles all our breakdowns across AP. Transparent pricing and always professional.",
      service: "Fleet Support",
      date: "Ongoing since 2022"
    },
    {
      name: "Lakshmi Transport",
      location: "Anantapur",
      rating: 5,
      review: "Truck accident recovery on Anantapur highway. Team handled the situation professionally with proper cleanup. Insurance approved their work immediately.",
      service: "Accident Recovery",
      date: "Nov 2023"
    },
    {
      name: "Srinivas Family",
      location: "Tirupati",
      rating: 5,
      review: "Family trip to Tirupati - car wouldn't start at hotel. Hussain team arranged quick repair and helped us continue our pilgrimage. Excellent customer care!",
      service: "Roadside Assistance", 
      date: "Dec 2023"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real reviews from satisfied customers across Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary font-medium">{testimonial.service}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Join 500+ Satisfied Customers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">156</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Customers Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;