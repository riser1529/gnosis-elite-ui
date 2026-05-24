import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import { Preloader } from "@/components/gnosis/Preloader";
import { Hero } from "@/components/gnosis/Hero";
import { Footer } from "@/components/gnosis/Footer";
import { HomeSections } from "@/components/gnosis/HomeSections";
import { ContactCTA } from "@/components/gnosis/ContactCTA";

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
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <main className="bg-deep text-foreground">
        <Hero />
        <HomeSections />
        <ContactCTA />
        <Footer />
      </main>
      <Toaster theme="dark" position="top-center" richColors />
    </>
  );
}
