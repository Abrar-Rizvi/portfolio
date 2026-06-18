import Hero from "@/Components/Hero";
import Work from "@/Components/Work";
import About from "@/Components/About";
import Craft from "@/Components/MyStack";
import WorkIndex from "@/Components/WorkIndex";
import Experience from "@/Components/Experience";
import { Contact } from "@/Components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Craft />
      <WorkIndex />
      <Experience />

      {/* ── Interstitial Quote ── */}
      <section style={{ background: '#111111', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(24px, 3.5vw, 44px)',
            lineHeight: 1.2,
            color: 'rgba(244,235,208,0.75)',
            margin: 0,
            maxWidth: '680px',
          }}>
            The next system I build starts with a conversation about what fails first.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
