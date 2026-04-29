import { MessageCircle, CheckCircle2 } from 'lucide-react';
import chuksHeadshot from '../../assets/Chuks Headshot.svg';
import './About.css';

const skills = [
  { title: 'SEO & AIO', desc: 'Search engine and AI answer engine optimisation — getting you found on Google and in AI search.' },
  { title: 'Google Ads', desc: 'Search and display campaign strategy and management that drives qualified leads.' },
  { title: 'Meta Ads', desc: 'Facebook and Instagram paid campaigns targeted to the right audience at the right time.' },
  { title: 'Web Development', desc: 'Fast, conversion-focused websites that work as your 24/7 digital sales tool.' },
];

const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'We talk through your business, goals, and current situation — no forms, no pitch.',
  },
  {
    num: '02',
    title: 'Custom proposal',
    desc: 'I build a tailored system recommendation designed specifically for your business and your market.',
  },
  {
    num: '03',
    title: 'Build & deliver',
    desc: 'I handle everything — design, campaigns, automation — so you stay focused on running your business.',
  },
];

import SEO from '../SEO';

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chuks",
    "jobTitle": "Founder & Digital Growth Strategist",
    "worksFor": {
      "@type": "Organization",
      "name": "Surg Solutions",
      "url": "https://surgsolutions.com"
    },
    "url": "https://surgsolutions.com/about",
    "description": "Digital growth strategist helping service businesses build systems that attract and convert clients — website design, SEO, paid ads, and automation."
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Surg Solutions",
    "url": "https://surgsolutions.com",
    "founder": {
      "@type": "Person",
      "name": "Chuks"
    },
    "description": "Surg Solutions builds complete digital growth systems — websites, SEO, ads, and automation — for service businesses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  }
];

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      <SEO
        title="About Us"
        description="Learn more about Surg Solutions and our founder, Chuks. We build scalable, reliable growth systems to attract and convert clients."
        canonical="/about"
        schema={aboutSchema}
      />

      {/* Founder Intro */}
      <section className="about-hero section-dark">
        <div className="container">
          <div className="about-hero-inner">
            <div className="about-avatar">
              <img src={chuksHeadshot} alt="Chuks — Founder of Surg Solutions" width="400" height="400" loading="lazy" decoding="async" />
            </div>
            <div className="about-intro-text">
              <span className="about-tag">Founder, Surg Solutions</span>
              <h1>Hi, I'm Chuks.</h1>
              <p>
                Digital growth strategist. I help businesses build systems that attract and convert clients — without the manual hustle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="about-story section section-light">
        <div className="container">
          <div className="about-story-inner">
            <div className="about-story-tag">My Story</div>
            <div className="about-story-note">
              <strong>Key message:</strong> I don't sell services. I build systems.
            </div>
            <div className="about-story-body">
              <p>
                I started Surg Solutions because I kept seeing the same problem: great businesses, doing great work, but invisible online. They were relying on referrals and word of mouth — which worked, until it didn't. One slow month, and suddenly everything felt fragile.
              </p>
              <p>
                I realised the issue wasn't effort. It was the absence of a <em>system</em>. No reliable way to attract clients, no automation to follow up leads, no visibility into what was actually working. Just hustle — and hope.
              </p>
              <p>
                So I built Surg Solutions around a single idea: replace that unpredictability with a real growth system. One that brings in clients consistently, runs the repetitive stuff automatically, and gives you clear data on what's performing. Something that keeps working whether you're in the office or not.
              </p>
              <p>
                I work with service businesses and trades that are ready to stop chasing and start attracting. If that sounds like you, let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Credentials */}
      <section className="about-skills section section-gray">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2>Skills & Expertise</h2>
            <p>Everything I build is grounded in real, measurable disciplines — not guesswork.</p>
          </div>
          <div className="about-skills-grid">
            {skills.map((s) => (
              <div key={s.title} className="about-skill-card">
                <CheckCircle2 size={22} className="about-skill-icon" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="about-process section section-light">
        <div className="container">
          <div className="about-process-inner">
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <h2>How I Work</h2>
              <p>A short, honest look at what working together actually looks like — so there are no surprises before we start.</p>
            </div>
            <div className="about-steps">
              {steps.map((step) => (
                <div key={step.num} className="about-step">
                  <div className="about-step-num">{step.num}</div>
                  <div className="about-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section-gray text-center">
        <div className="container">
          <div className="about-cta-inner">
            <h2>Want to work together?</h2>
            <p>The best way to start is a quick conversation. No forms, no funnels — just a direct message.</p>
            <a
              href="https://wa.link/a2gatg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={20} /> Message me on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
