import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Remove + and spaces
  const message = "Hi! I need emergency towing assistance. Please help me.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="default"
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-4 h-auto animate-pulse"
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        Get Instant Quote
      </Button>
    </div>
  );
};

export default WhatsAppButton;