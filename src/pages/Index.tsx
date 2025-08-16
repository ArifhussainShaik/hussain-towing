import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>24 Hour Towing Service Nandyal - Emergency Roadside Assistance Andhra Pradesh | Hussain Towing Services</title>
        <meta name="description" content="24/7 emergency towing service in Nandyal, Andhra Pradesh. Professional car breakdown service AP wide. Fast response, 300km radius coverage. Call +91 98765 43210 now!" />
        <meta name="keywords" content="24 hour towing service Nandyal, emergency roadside assistance Andhra Pradesh, car breakdown service AP, towing service near me, vehicle recovery Nandyal" />
        <link rel="canonical" href="https://hussaintowing.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hussain Towing Services",
            "image": "https://hussaintowing.com/hero-towing.jpg",
            "@id": "https://hussaintowing.com",
            "url": "https://hussaintowing.com",
            "telephone": "+91 98765 43210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nandyal",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "518501",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 15.4774,
              "longitude": 78.4837
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 15.4774,
                "longitude": 78.4837
              },
              "geoRadius": "300000"
            },
            "service": [
              {
                "@type": "Service",
                "name": "24 Hour Emergency Towing",
                "description": "Round-the-clock emergency vehicle recovery and towing services"
              },
              {
                "@type": "Service",
                "name": "Car Towing Service",
                "description": "Professional car towing and transport services"
              },
              {
                "@type": "Service",
                "name": "Heavy Vehicle Recovery",
                "description": "Specialized heavy equipment and commercial vehicle recovery"
              },
              {
                "@type": "Service",
                "name": "Battery Jumpstart Service",
                "description": "Emergency battery jumpstart and roadside assistance"
              }
            ],
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "156"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <ServiceAreas />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
