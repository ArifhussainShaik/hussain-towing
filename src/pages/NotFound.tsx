import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Wrench, Map, Phone } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-background text-foreground">
        <div className="text-center p-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Here are some helpful links:</h3>
            <div className="flex justify-center gap-4">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Wrench className="h-4 w-4" /> Our Services
              </Link>
              <Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Map className="h-4 w-4" /> Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
