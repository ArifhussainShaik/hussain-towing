import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your towing service rates in Andhra Pradesh?",
      answer: "Our rates are distance-based: ₹15-20/km for light vehicles, ₹25-35/km for heavy vehicles. No hidden charges. Base charge of ₹500 includes first 10km. Night surcharge: 20% (10PM-6AM)."
    },
    {
      question: "How quickly can you respond to emergencies on NH44?",
      answer: "Emergency response times: Nandyal area (15-30 min), Kurnool (45 min), Hyderabad (4-5 hours). We have strategic positioning along NH44 for faster highway response."
    },
    {
      question: "Do you provide battery jumpstart and fuel delivery?",
      answer: "Yes! Battery jumpstart: ₹300-500. Fuel delivery: ₹200 service charge + fuel cost. Available 24/7 across our 300km service radius."
    },
    {
      question: "What's the maximum weight you can tow?",
      answer: "Light vehicles: Up to 3.5 tons. Heavy equipment: Up to 25 tons with specialized equipment. Construction machinery, buses, trucks - we handle it all."
    },
    {
      question: "Do you tow vehicles involved in accidents?",
      answer: "Yes, we specialize in accident recovery. We work with police, insurance companies, and handle proper documentation. Debris cleanup included."
    },
    {
      question: "Is payment accepted after service completion?",
      answer: "Yes, payment after service. We accept cash, UPI, bank transfer. For corporate clients, we offer credit terms with GST invoicing."
    },
    {
      question: "Do you provide inter-state towing from AP to other states?",
      answer: "Yes, we provide inter-state towing from Andhra Pradesh to Karnataka, Telangana, Tamil Nadu. All necessary permits handled by our team."
    },
    {
      question: "What if my car breaks down in a remote village?",
      answer: "Our 300km radius covers remote areas too. We'll locate you via WhatsApp location sharing and reach even off-highway locations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Common questions about our towing services and rates
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-primary/10 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Call us directly for immediate answers about rates, coverage, or emergency assistance
          </p>
          <div className="text-2xl font-bold text-primary">+91 98765 43210</div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;