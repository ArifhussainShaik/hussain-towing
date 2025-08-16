import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import TowingRates from "./pages/TowingRates";
import NH44Towing from "./pages/NH44Towing";
import EmergencyTowing from "./pages/EmergencyTowing";
import LocationHyderabad from "./pages/locations/Hyderabad";
import LocationKurnool from "./pages/locations/Kurnool";
import LocationGuntur from "./pages/locations/Guntur";
import LocationVijayawada from "./pages/locations/Vijayawada";
import LocationAnantapur from "./pages/locations/Anantapur";
import LocationTirupati from "./pages/locations/Tirupati";
import LocationBangalore from "./pages/locations/Bangalore";
import LocationKadapa from "./pages/locations/Kadapa";
import LocationOngole from "./pages/locations/Ongole";
import LightVehicleTowing from "./pages/services/LightVehicleTowing";
import HeavyVehicleTowing from "./pages/services/HeavyVehicleTowing";
import AccidentRecovery from "./pages/services/AccidentRecovery";
import BatteryJumpstart from "./pages/services/BatteryJumpstart";
import FuelDelivery from "./pages/services/FuelDelivery";
import BreakdownNH44 from "./pages/blog/BreakdownNH44";
import TowingCostsAP from "./pages/blog/TowingCostsAP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/towing-rates-andhra-pradesh" element={<TowingRates />} />
          <Route path="/nh44-highway-towing" element={<NH44Towing />} />
          <Route path="/24-hour-emergency-towing" element={<EmergencyTowing />} />
          <Route path="/locations/hyderabad" element={<LocationHyderabad />} />
          <Route path="/locations/kurnool" element={<LocationKurnool />} />
          <Route path="/locations/guntur" element={<LocationGuntur />} />
          <Route path="/locations/vijayawada" element={<LocationVijayawada />} />
          <Route path="/locations/anantapur" element={<LocationAnantapur />} />
          <Route path="/locations/tirupati" element={<LocationTirupati />} />
          <Route path="/locations/bangalore" element={<LocationBangalore />} />
          <Route path="/locations/kadapa" element={<LocationKadapa />} />
          <Route path="/locations/ongole" element={<LocationOngole />} />
          <Route path="/light-vehicle-towing" element={<LightVehicleTowing />} />
          <Route path="/heavy-vehicle-towing" element={<HeavyVehicleTowing />} />
          <Route path="/accident-recovery" element={<AccidentRecovery />} />
          <Route path="/battery-jumpstart" element={<BatteryJumpstart />} />
          <Route path="/fuel-delivery" element={<FuelDelivery />} />
          <Route path="/blog/breakdown-nh44-safety-guide" element={<BreakdownNH44 />} />
          <Route path="/blog/towing-costs-andhra-pradesh-guide" element={<TowingCostsAP />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
