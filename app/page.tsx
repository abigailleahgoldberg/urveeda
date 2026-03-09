"use client";
import { useState } from "react";

const NAV_LINKS = [
  { label: "The Framework", href: "#framework" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PILLARS = [
  {
    stage: "S1 — Service",
    name: "FiveStarFixers.com",
    tagline: "The Foundation Engine",
    description:
      "Fix the customer experience before you scale. Engagement audits, mystery shopping, reputation management, and CRO — so every ad dollar converts.",
    outcome: "Engagement Score (0–100) + prioritized 30/60/90 action plan",
    cta: "Request an Assessment",
    href: "https://fivestartfixers.com",
    color: "from-amber-950/30",
  },
  {
    stage: "S2 — Social",
    name: "UGCgenerator.ai",
    tagline: "The Influence Engine",
    description:
      "High-volume influencer distribution at scale — TikTok, Reels, Shorts, Reddit, X. Real creators, agentic distribution, measurable algorithmic lift.",
    outcome: "180K–2M+ views/month depending on program tier",
    cta: "Book a Demo",
    href: "https://ugcgenerator.ai",
    color: "from-violet-950/20",
  },
  {
    stage: "S3 — Search",
    name: "WholesalePressReleases.com",
    tagline: "The Credibility Engine",
    description:
      "Certified newswire distribution to 500+ outlets — Google News, Yahoo Finance, Reuters, Bloomberg. Guaranteed AI engine indexing (ChatGPT, Perplexity, Gemini). DA 95–97 backlinks.",
    outcome: "Own the fact-check moment. Control the narrative.",
    cta: "Submit a Release",
    href: "https://wholesalepressreleases.com",
    color: "from-emerald-950/20",
  },
  {
    stage: "S4 — Screen",
    name: "TargetedGeofencing.com",
    tagline: "The Precision Targeting Engine",
    description:
      "±25 ft event geofencing → IP-to-household matching → non-skippable OTT/CTV delivery on Roku, Hulu, Samsung TV. Bring your message home.",
    outcome: "Measurable foot-traffic lift and geo-conversion reporting",
    cta: "Scope a Campaign",
    href: "https://targetedgeofencing.com",
    color: "from-blue-950/20",
  },
];

const RESULTS = [
  { stat: "526%", label: "Stock price lift", client: "Pharmagreen" },
  { stat: "600%", label: "Lead increase", client: "Georgia MLS" },
  { stat: "600%", label: "Qualified applicants", client: "E-Whiz Global SaaS" },
  { stat: "$12K+", label: "Ad spend saved", client: "Total Lender Solutions" },
  { stat: "35%", label: "Applicant increase", client: "AccuTRANS" },
  { stat: "Law passed", label: "Statewide advocacy", client: "FL Cannabis Action" },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", stage: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          stage: formData.stage,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  }

  return (
    <div style={{ background: "var(--charcoal)" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(14,14,14,0.92)",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--cream)", letterSpacing: "0.04em" }}>
              Ur<span style={{ color: "var(--gold-light)" }}>Veeda</span>
            </span>
          </a>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fog)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--cream)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--fog)")}
              >{l.label}</a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.7rem" }}>Start Here</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero-gradient" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "8rem 2rem 6rem" }}>
        <div className="pill" style={{ marginBottom: "2.5rem" }}>
          <span>S4E Growth Framework</span>
          <span style={{ color: "var(--mist)" }}>Service · Social · Search · Screen</span>
        </div>

        <h1 style={{ fontSize: "clamp(3.2rem, 7vw, 7rem)", color: "var(--cream)", maxWidth: 900, lineHeight: 1.05, marginBottom: "2rem" }}>
          Fix it first.<br />
          <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Then flood the market.</em>
        </h1>

        <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "var(--fog)", maxWidth: 600, lineHeight: 1.8, marginBottom: "3rem", fontWeight: 300 }}>
          UrVeeda is an experience-first growth company. We align your foundation, 
          scale your influence, earn your credibility, and own the living room — 
          systematically, through the S4E Framework.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#framework" className="btn-primary">See the Framework</a>
          <a href="#contact" className="btn-outline">Book a Strategy Call</a>
        </div>

        {/* S4E inline flow */}
        <div style={{ display: "flex", gap: 0, marginTop: "5rem", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {["Service", "Social", "Search", "Screen"].map((s, i) => (
            <div key={s} style={{ padding: "1.2rem 2rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", textAlign: "center" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>S{i + 1}</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--fog)", letterSpacing: "0.05em" }}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────── */}
      <section style={{ padding: "8rem 2rem", maxWidth: 900, margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "1.5rem" }}>The Problem</div>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--cream)", marginBottom: "2rem" }}>
          Most businesses pour budget into a leaking bucket.
        </h2>
        <p style={{ fontSize: "1.1rem", color: "var(--fog)", lineHeight: 2, maxWidth: 700 }}>
          Ads run. Leads don&apos;t convert. Reviews go unanswered. Calls drop. Nobody follows up. 
          Competitors outrank you on Google. Your message never makes it to the living room screen.
        </p>
        <div className="rule" style={{ margin: "2.5rem 0" }} />
        <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", color: "var(--cream)", lineHeight: 2, maxWidth: 700, fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>
          &ldquo;Fix the bucket before you pour the budget.&rdquo;
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mist)" }}>
          — The UrVeeda Principle
        </p>
      </section>

      {/* ── S4E FRAMEWORK ───────────────────────────────────── */}
      <section id="framework" style={{ padding: "8rem 2rem", background: "var(--charcoal-mid)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>The S4E Growth Framework</div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--cream)", marginBottom: "1.5rem" }}>
              Growth that follows how your customers move
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--fog)", maxWidth: 560, margin: "0 auto", lineHeight: 1.9 }}>
              Four stages. Each one amplifies the next. Skip a stage and you waste the others.
            </p>
          </div>

          {/* Framework steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
            {PILLARS.map((p, i) => (
              <div key={p.stage} style={{ background: "var(--charcoal-mid)", padding: "2.5rem 2rem", position: "relative" }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                  {p.stage}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "var(--cream)", marginBottom: "1rem", lineHeight: 1.2 }}>
                  {p.tagline}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--fog)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {p.description}
                </p>
                <div style={{ fontSize: "0.72rem", color: "var(--gold-light)", lineHeight: 1.6, padding: "0.8rem", background: "rgba(184,152,42,0.06)", borderLeft: "2px solid var(--gold)" }}>
                  {p.outcome}
                </div>
                {i < 3 && (
                  <div style={{ position: "absolute", right: -18, top: "50%", transform: "translateY(-50%)", zIndex: 10, color: "var(--gold)", fontSize: "1.2rem", fontWeight: 300 }}>→</div>
                )}
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "3rem", fontSize: "0.8rem", color: "var(--mist)", letterSpacing: "0.1em" }}>
            Every stage powered by <span style={{ color: "var(--gold-light)" }}>UrVeedaOS</span> — capture, nurture, measure, attribute.
          </p>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────── */}
      <section style={{ padding: "8rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>Proven Outcomes</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--cream)" }}>Results that speak for themselves</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
            {RESULTS.map(r => (
              <div key={r.stat} style={{ background: "var(--charcoal)", padding: "3rem 2.5rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1, marginBottom: "0.5rem" }}>{r.stat}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.4rem" }}>{r.label}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--mist)", letterSpacing: "0.05em" }}>{r.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ───────────────────────────────────────── */}
      <section id="portfolio" style={{ padding: "8rem 2rem", background: "var(--charcoal-mid)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>The Portfolio</div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--cream)", marginBottom: "1.5rem" }}>Four engines. One ecosystem.</h2>
            <p style={{ fontSize: "1rem", color: "var(--fog)", maxWidth: 560, margin: "0 auto", lineHeight: 1.9 }}>
              Each brand solves one stage of the S4E Framework. Engage one. Engage all four. Each amplifies the next.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
            {PILLARS.map(p => (
              <div key={p.name} className="card" style={{ padding: "3rem", background: "var(--charcoal-mid)" }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.8rem" }}>{p.stage}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "var(--gold-light)", marginBottom: "0.4rem" }}>{p.name}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--mist)", marginBottom: "1.5rem" }}>{p.tagline}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--fog)", lineHeight: 1.8, marginBottom: "2rem" }}>{p.description}</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.7rem", padding: "0.65rem 1.4rem" }}>{p.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" style={{ padding: "8rem 2rem", maxWidth: 900, margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "1.5rem" }}>About UrVeeda</div>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--cream)", marginBottom: "2.5rem", maxWidth: 700 }}>
          Your wisdom. Your life. Aligned.
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--fog)", lineHeight: 2, marginBottom: "1.5rem" }}>
          <strong style={{ color: "var(--cream)", fontWeight: 500 }}>Ur</strong> — your life. Your ownership. Your legacy.<br />
          <strong style={{ color: "var(--cream)", fontWeight: 500 }}>Veeda</strong> — wisdom. Knowledge. Practical intelligence that drives sustainable growth.
        </p>
        <p style={{ fontSize: "1rem", color: "var(--fog)", lineHeight: 2, marginBottom: "1.5rem" }}>
          UrVeeda is led by David Jones — 15+ year marketing veteran, Energy Leadership Index Master Practitioner, 
          and founder of the S4E Growth Framework. He built this ecosystem because great marketing doesn&apos;t work 
          when the foundation is broken. So he built the systems to fix it first.
        </p>
        <p style={{ fontSize: "1rem", color: "var(--fog)", lineHeight: 2, marginBottom: "3rem" }}>
          Background: Director of Technology & Operating Systems (Sasha&apos;s Secret / Poochmates), Director of 
          Marketing & Automation (Lemonaid Firm), Director of Marketing & Communications (Florida Cannabis Action 
          Network). Certified Positive Psychology Coach.
        </p>
        <a href="#contact" className="btn-outline">Work with David →</a>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "8rem 2rem", background: "var(--charcoal-mid)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>Get Started</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--cream)", marginBottom: "1rem" }}>
            Where does your growth engine break?
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--fog)", marginBottom: "3rem", lineHeight: 1.8 }}>
            Tell us where you are in the S4E journey. We&apos;ll tell you exactly where to start.
          </p>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(184,152,42,0.2)", borderRadius: 2 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "var(--gold-light)", marginBottom: "1rem" }}>Message received.</div>
              <p style={{ color: "var(--fog)" }}>David will review your intake and reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "David Jones" },
                { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
                { id: "company", label: "Company / Organization", type: "text", placeholder: "Acme Corp" },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mist)", marginBottom: "0.6rem" }}>{f.label}</label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={(formData as Record<string, string>)[f.id]}
                    onChange={e => setFormData(prev => ({ ...prev, [f.id]: e.target.value }))}
                    style={{ width: "100%", background: "var(--charcoal)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 1, padding: "0.9rem 1.2rem", color: "var(--cream)", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mist)", marginBottom: "0.6rem" }}>Which S4E stage interests you most?</label>
                <select
                  value={formData.stage}
                  onChange={e => setFormData(prev => ({ ...prev, stage: e.target.value }))}
                  style={{ width: "100%", background: "var(--charcoal)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 1, padding: "0.9rem 1.2rem", color: formData.stage ? "var(--cream)" : "var(--mist)", fontSize: "0.9rem", outline: "none" }}
                >
                  <option value="">Select a stage…</option>
                  <option value="s1_service">S1 — Service (Fix my foundation / reputation)</option>
                  <option value="s2_social">S2 — Social (Scale my influence / UGC)</option>
                  <option value="s3_search">S3 — Search (Win the fact-check / press coverage)</option>
                  <option value="s4_screen">S4 — Screen (Precision household targeting / CTV)</option>
                  <option value="full_s4e">Full S4E (I need the whole system)</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mist)", marginBottom: "0.6rem" }}>Tell us about your situation</label>
                <textarea
                  rows={4}
                  placeholder="What's the biggest growth challenge you're facing right now?"
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  style={{ width: "100%", background: "var(--charcoal)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 1, padding: "0.9rem 1.2rem", color: "var(--cream)", fontSize: "0.9rem", outline: "none", resize: "vertical" }}
                />
              </div>

              <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center", opacity: submitting ? 0.6 : 1 }}>
                {submitting ? "Submitting…" : "Start the Conversation →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ padding: "3rem 2rem", borderTop: "1px solid rgba(255,255,255,0.04)", background: "var(--charcoal)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "var(--cream)", letterSpacing: "0.04em", marginBottom: "0.3rem" }}>
              Ur<span style={{ color: "var(--gold-light)" }}>Veeda</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--mist)", letterSpacing: "0.1em" }}>
              Experience-First Growth · S4E Framework
            </div>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: "FiveStarFixers.com", href: "https://fivestartfixers.com" },
              { label: "UGCgenerator.ai", href: "https://ugcgenerator.ai" },
              { label: "WholesalePressReleases.com", href: "https://wholesalepressreleases.com" },
              { label: "TargetedGeofencing.com", href: "https://targetedgeofencing.com" },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.72rem", color: "var(--mist)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--gold-light)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--mist)")}
              >{l.label}</a>
            ))}
          </div>
          <div style={{ fontSize: "0.68rem", color: "var(--stone)" }}>
            © {new Date().getFullYear()} UrVeeda. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
