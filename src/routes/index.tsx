import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Hero } from "@/components/gnosis/Hero";
import { Footer } from "@/components/gnosis/Footer";
import { HomeSections } from "@/components/gnosis/HomeSections";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { ProgrammeOverview } from "@/components/gnosis/ProgrammeOverview";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gnosis Performance Football Academy | Transition Year Full-Time Course" },
      { name: "description", content: "Elite Transition Year full-time football & performance course. Train like a pro under UEFA Pro certified coaches. Applications open for September 2026 intake." },
      { property: "og:title", content: "Gnosis Performance Football Academy" },
      { property: "og:description", content: "Engineering elite athletes. Mastering the pitch. Apply now for September 2026 intake." },
    ],
  }),
});

function Index() {
  return (
    <>
      <main className="bg-deep text-foreground">
        <Hero />
        <ProgrammeOverview />
        <HomeSections />
        <ContactCTA />
        <Footer />
      </main>
      <Toaster theme="dark" position="top-center" richColors />
    </>
  );
}
