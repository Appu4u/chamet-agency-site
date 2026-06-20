import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Chamet Agency — Talk to a Real Agent" },
      { name: "description", content: "Reach out to Chamet Agency for host or agent onboarding. We respond within an hour, 24/7, in 5 languages." },
      { property: "og:title", content: "Contact Chamet Agency" },
      { property: "og:description", content: "Real humans, real-time support — get started in under an hour." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Contact us"
        title="Let's get you started."
        intro="Drop us a message — we'll personally onboard you within 24 hours."
      >
        <ContactForm />
      </Section>
    </SiteLayout>
  );
}
