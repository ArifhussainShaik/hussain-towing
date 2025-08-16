import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy load non-critical pages for better performance
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Locations = lazy(() => import("./pages/Locations"));
const TowingRates = lazy(() => import("./pages/TowingRates"));
const NH44Towing = lazy(() => import("./pages/NH44Towing"));
const EmergencyTowing = lazy(() => import("./pages/EmergencyTowing"));
const LocationHyderabad = lazy(() => import("./pages/locations/Hyderabad"));
const LocationKurnool = lazy(() => import("./pages/locations/Kurnool"));
const LocationGuntur = lazy(() => import("./pages/locations/Guntur"));
const LocationVijayawada = lazy(() => import("./pages/locations/Vijayawada"));
const LocationAnantapur = lazy(() => import("./pages/locations/Anantapur"));
const LocationTirupati = lazy(() => import("./pages/locations/Tirupati"));
const LocationBangalore = lazy(() => import("./pages/locations/Bangalore"));
const LocationKadapa = lazy(() => import("./pages/locations/Kadapa"));
const LocationOngole = lazy(() => import("./pages/locations/Ongole"));
const LightVehicleTowing = lazy(() => import("./pages/services/LightVehicleTowing"));
const HeavyVehicleTowing = lazy(() => import("./pages/services/HeavyVehicleTowing"));
const AccidentRecovery = lazy(() => import("./pages/services/AccidentRecovery"));
const BatteryJumpstart = lazy(() => import("./pages/services/BatteryJumpstart"));
const FuelDelivery = lazy(() => import("./pages/services/FuelDelivery"));
const BreakdownNH44 = lazy(() => import("./pages/blog/BreakdownNH44"));
const TowingCostsAP = lazy(() => import("./pages/blog/TowingCostsAP"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
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
        </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
