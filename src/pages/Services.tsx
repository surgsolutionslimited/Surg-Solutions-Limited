import { ArrowRight, CheckCircle2, XCircle, LayoutTemplate, Workflow, Database, MonitorSmartphone, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const systemSteps = [
    { title: "Deep System Audit", desc: "We analyze your current operations, find bottlenecks, and map out where you're losing time and revenue." },
    { title: "Strategic Blueprinting", desc: "We design a custom architecture showing exactly how your new growth engine and automations will connect." },
    { title: "Infrastructure Buildout", desc: "We build your high-converting website, setup your CRM, and configure all backend integrations." },
    { title: "Workflow Automation", desc: "We eliminate manual tasks by automating lead capture, follow-ups, and internal team notifications." },
    { title: "Data & Tracking Setup", desc: "We implement advanced analytics so you have a single source of truth for all business decisions." },
    { title: "Scaling & Optimization", desc: "With your foundation solid, we scale your traffic sources predictably without breaking your internal operations." }
  ];

  const outcomes = [
    { metric: "20+", label: "Hours Saved Weekly", icon: <Clock size={24} /> },
    { metric: "100%", label: "Automated Lead Capture", icon: <Workflow size={24} /> },
    { metric: "3x", label: "Increase in Pipeline Velocity", icon: <TrendingUp size={24} /> },
    { metric: "0", label: "Manual Data Entry", icon: <CheckCircle2 size={24} className="down-arrow" /> }
  ];

  return (
    <div className="services-page animate-fade-in">
      {/* Hero Section */}
      <section className="svc-hero section-dark text-center">
        <div className="container">
          <div className="svc-hero-badge">Flagship Offer</div>
          <h1>
            The Complete<br />
            <span className="text-gradient">Growth System Buildout.</span>
          </h1>
          <p className="svc-hero-subtitle">
            A fully integrated infrastructure that attracts leads, automates follow-ups, eliminates manual tasks, and scales your business efficiently.
          </p>
          <div className="svc-hero-actions">
            <Link to="/free-audit" className="btn btn-primary">Book Your Free Audit <ArrowRight size={20} /></Link>
            <button className="btn btn-outline" onClick={() => document.getElementById('our-system')?.scrollIntoView({ behavior: 'smooth' })}>
              See What's Included
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="svc-problem section-gray">
        <div className="container">
          <div className="svc-problem-container">
            <div className="svc-problem-content">
              <h2>Stop Running Your Business on Chaos.</h2>
              <p className="svc-problem-intro">
                Most agencies just give you traffic or a pretty website. But if your backend operations are messy, scaling only creates more stress. You're likely experiencing:
              </p>
              <ul className="svc-pain-points">
                <li>
                  <XCircle className="pain-icon" size={24} /> 
                  <span><strong>Manual Repetition:</strong> Wasting hours every week on data entry, follow-ups, and admin work.</span>
                </li>
                <li>
                  <XCircle className="pain-icon" size={24} /> 
                  <span><strong>Leaky Funnels:</strong> Leads are falling through the cracks because there is no automated nurturing.</span>
                </li>
                <li>
                  <XCircle className="pain-icon" size={24} /> 
                  <span><strong>Data Blindness:</strong> You don't actually know which marketing efforts are generating internal ROI.</span>
                </li>
                <li>
                  <XCircle className="pain-icon" size={24} /> 
                  <span><strong>Unscalable Operations:</strong> If you doubled your leads tomorrow, your internal systems would break.</span>
                </li>
              </ul>
            </div>
            <div className="svc-problem-card">
              <h3>The Cost of Inefficiency</h3>
              <p>
                Every manual task is stealing time away from strategy and growth. If your business relies entirely on human memory and scattered spreadsheets, scaling will always feel like an uphill battle.
              </p>
              <div className="svc-problem-card-footer">
                <strong>It's time to build a predictable machine.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (4 Pillars) */}
      <section className="svc-pillars section" id="core-services">
        <div className="container">
          <div className="section-header text-center">
            <h2>What's Included in the System</h2>
            <p>We replace disjointed services with four interconnected systems to run your business.</p>
          </div>
          
          <div className="svc-pillars-grid">
            <div className="svc-pillar-card">
              <div className="svc-pillar-icon"><LayoutTemplate size={36} /></div>
              <h3>Growth Engine</h3>
              <p>Your digital sales infrastructure designed to convert traffic into revenue.</p>
              <ul className="svc-pillar-features">
                <li><CheckCircle2 size={18} /> High-Converting Website Design</li>
                <li><CheckCircle2 size={18} /> Landing Page Infrastructure</li>
                <li><CheckCircle2 size={18} /> Strategic Funnel Architecture</li>
                <li><CheckCircle2 size={18} /> Conversion-Focused UX</li>
              </ul>
            </div>
            
            <div className="svc-pillar-card highlight">
              <div className="svc-pillar-icon"><Workflow size={36} /></div>
              <h3>Automated Workflows & Ops</h3>
              <p>Remove manual work and let your business run on autopilot.</p>
              <ul className="svc-pillar-features">
                <li><CheckCircle2 size={18} /> Email Automation Sequences</li>
                <li><CheckCircle2 size={18} /> CRM Setup & Pipeline Rules</li>
                <li><CheckCircle2 size={18} /> Deep Nurturing Workflows</li>
                <li><CheckCircle2 size={18} /> API & Zapier Integrations</li>
              </ul>
            </div>
            
            <div className="svc-pillar-card">
              <div className="svc-pillar-icon"><Database size={36} /></div>
              <h3>Data & Decision Systems</h3>
              <p>Provide ultimate clarity on performance and enable smarter decisions.</p>
              <ul className="svc-pillar-features">
                <li><CheckCircle2 size={18} /> Advanced Conversion Tracking</li>
                <li><CheckCircle2 size={18} /> Real-Time Analytics Dashboards</li>
                <li><CheckCircle2 size={18} /> Multi-Touch Attribution</li>
                <li><CheckCircle2 size={18} /> Goal Performance Monitoring</li>
              </ul>
            </div>

            <div className="svc-pillar-card">
              <div className="svc-pillar-icon"><MonitorSmartphone size={36} /></div>
              <h3>Scalable Growth Infrastructure</h3>
              <p>Enable predictable and repeatable scaling without complexity.</p>
              <ul className="svc-pillar-features">
                <li><CheckCircle2 size={18} /> Paid Advertising Frameworks</li>
                <li><CheckCircle2 size={18} /> Precision Retargeting Systems</li>
                <li><CheckCircle2 size={18} /> Offer Testing & Validation</li>
                <li><CheckCircle2 size={18} /> Funnel Optimization Loops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your System Section */}
      <section className="svc-system section-dark" id="our-system">
        <div className="container">
          <div className="section-header text-center">
            <h2>The Implementation Process</h2>
            <p>How we build and deploy your automated growth engine from start to finish.</p>
          </div>
          
          <div className="svc-system-timeline">
            {systemSteps.map((step, index) => (
              <div className="svc-system-step" key={index}>
                <div className="step-number">0{index + 1}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Outcomes Section */}
      <section className="svc-outcomes section">
        <div className="container">
          <div className="svc-outcomes-header text-center">
            <h2>Efficiency & Scale. Zero Fluff.</h2>
            <p>We measure success by hours saved, manual tasks eliminated, and revenue growth.</p>
          </div>
          
          <div className="svc-metrics-grid">
            {outcomes.map((outcome, idx) => (
              <div className="svc-metric-card" key={idx}>
                <div className="metric-icon">{outcome.icon}</div>
                <div className="metric-value">{outcome.metric}</div>
                <div className="metric-label">{outcome.label}</div>
              </div>
            ))}
          </div>
          
          <div className="svc-results-cta text-center mt-xl">
            <Link to="/case-studies" className="btn btn-outline">See Operational Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="svc-final-cta section-gray text-center">
        <div className="container">
          <h2>Ready to Automate Your Growth?</h2>
          <p>Stop doing everything manually. Book your free audit today and let's map out your custom growth system.</p>
          <div className="svc-cta-buttons">
            <Link to="/free-audit" className="btn btn-primary btn-large">Request Your System Audit</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
