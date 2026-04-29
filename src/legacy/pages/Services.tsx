import { Globe, Search, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'website',
    icon: <Globe size={36} />,
    title: 'Website Design & Development',
    desc: 'Your website is the foundation of every other system. We build fast, mobile-first, conversion-focused websites that work as a 24/7 sales tool — not just a digital brochure.',
    tags: ['5-page standard', 'WhatsApp integration', 'Contact forms', 'On-page SEO', 'Mobile-first'],
  },
  {
    id: 'seo',
    icon: <Search size={36} />,
    title: 'SEO & Answer Engine Optimisation',
    desc: 'We optimise your site to appear on Google and in AI-powered search tools like ChatGPT and Perplexity. When someone searches for your service, you show up.',
    tags: ['Technical SEO', 'Local SEO', 'AIO / AI search', 'Google Business Profile', 'Keyword targeting'],
  },
  {
    id: 'ads',
    icon: <TrendingUp size={36} />,
    title: 'Google Ads & Meta Ads',
    desc: 'We set up and manage targeted ad campaigns that put your business in front of the right people at the right time — people actively looking for what you offer.',
    tags: ['Google Search Ads', 'Facebook Ads', 'Instagram Ads', 'Campaign setup', 'Monthly management'],
  },
  {
    id: 'automation',
    icon: <Zap size={36} />,
    title: 'Growth Automation',
    desc: 'We build the automated systems that keep your business running smoothly — lead notifications, review requests, monthly performance reports, and more.',
    tags: ['Lead notifications', 'Review requests', 'Review reply system', 'Monthly reports'],
  },
];

import SEO from '../SEO';

export default function Services() {
  return (
    <div className="services-page animate-fade-in">
      <SEO 
        title="Our Services" 
        description="We build complete growth systems. Explore our Website Design, SEO & AIO, Ads Management, and Automation services."
        canonical="/services"
      />

      {/* Hero */}
      <section className="svc-hero section-dark text-center">
        <div className="container">
          <h1>
            Everything Your Business Needs to<br />
            <span className="text-gradient">Grow Online — In One Place.</span>
          </h1>
          <p className="svc-hero-subtitle">
            We don't sell individual services. We build complete growth systems. Here's what each component does and why it matters.
          </p>
        </div>
      </section>

      {/* 4 Services */}
      <section className="svc-list section section-light">
        <div className="container">
          <div className="svc-items">
            {services.map((svc, idx) => (
              <div key={svc.id} className={`svc-item ${idx % 2 === 1 ? 'svc-item--reverse' : ''}`}>
                <div className="svc-item-icon-wrap">
                  <div className="svc-item-icon">{svc.icon}</div>
                </div>
                <div className="svc-item-content">
                  <h2>{svc.title}</h2>
                  <p>{svc.desc}</p>
                  <div className="svc-tags">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="svc-tag">
                        <CheckCircle2 size={13} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundled Offer Callout */}
      <section className="svc-bundle section-gray">
        <div className="container">
          <div className="svc-bundle-card">
            <div className="svc-bundle-badge">Our Flagship Offer</div>
            <h2>The Business Growth System</h2>
            <p>
              All four components built together as one integrated system. This is how we get the best results — not individual services stitched together, but a complete system designed to work as one.
            </p>
            <ul className="svc-bundle-list">
              <li><CheckCircle2 size={18} /> Website design &amp; development</li>
              <li><CheckCircle2 size={18} /> SEO &amp; Answer Engine Optimisation</li>
              <li><CheckCircle2 size={18} /> Google Ads &amp; Meta Ads management</li>
              <li><CheckCircle2 size={18} /> Growth automation &amp; reporting</li>
            </ul>
            <Link to="/audit" className="btn btn-primary">
              Get Free Growth Audit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
