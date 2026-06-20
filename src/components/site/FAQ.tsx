import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is Chamet Agency free to join?", a: "Yes — joining as a host or agent is completely free. We only earn when you earn." },
  { q: "Who can become a Chamet host?", a: "Anyone 18 or older with a valid ID, smartphone, and stable internet can apply. Both men and women are welcome." },
  { q: "How fast are payouts?", a: "Payouts are processed every Monday. Funds typically arrive within 24–72 hours depending on your method." },
  { q: "Do I need experience to be an agent?", a: "No. Our onboarding covers recruitment, host management, and growth strategies step by step." },
  { q: "Which countries do you operate in?", a: "We support hosts and agents in 18+ countries across South Asia, MENA, LATAM, and Europe." },
  { q: "Can I host on Chamet and ChillChat together?", a: "Yes — many of our top earners stream on both apps to maximise audience and income." },
  { q: "Is my information kept private?", a: "Absolutely. We follow strict KYC handling and never share personal data with third parties." },
  { q: "How do I contact a real human?", a: "Use the contact form on this page or message us on WhatsApp — we usually reply within an hour." },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`f-${i}`} className="border-border">
          <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
