import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Edison } from "@/components/Edison";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain relative flex min-h-full flex-col overflow-x-hidden">
      <Header />
      <main className="relative z-[2] flex-1">
        <Hero />
        <TrustStrip />
        <Packages />
        <Process />
        <WhyUs />
        <Edison />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
