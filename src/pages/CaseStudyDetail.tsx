import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Zap } from 'lucide-react';
import './CaseStudyDetail.css';

export default function CaseStudyDetail() {


  const data = {
    client: "FinServe Global",
    industry: "Financial Technology",
    overview: "How we transformed a legacy FinTech's search presence to dominate high-intent enterprise keywords, resulting in a 340% increase in qualified pipeline over 6 months.",
    metric: "+340%",
    metricLabel: "Organic Pipeline Growth",
    challenge: "FinServe Global experienced stagnant organic growth due to a legacy tech stack, bloated site architecture, and falling behind nimble competitors in generative search results. Their CPA on paid channels was skyrocketing, forcing a strategic shift to organic acquisition.",
    strategy: "We engineered a dual-pronged approach: a comprehensive technical teardown to resolve crawl budget issues, paired with an AI Optimization (AIO) content strategy designed to capture top-of-funnel informational queries and bottom-of-funnel transactional intent.",
    execution: [
      "Restructured site taxonomy for semantic relevance.",
      "Deployed 40+ high-authority programmatic SEO pages.",
      "Optimized informational hubs specifically for LLM scraping (AIO).",
      "Resolved 2,000+ technical errors limiting indexation."
    ],
    roi: "Within 6 months, FinServe Global achieved page one rankings for their most competitive transactional keywords. Customer Acquisition Cost (CAC) via organic channels dropped by 65%, while total organic pipeline value increased by 340%."
  };

  return (
    <div className="cs-detail-page animate-fade-in">
      <div className="cs-detail-hero section-dark text-center">
        <div className="container">
          <Link to="/case-studies" className="back-link">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          <div className="cs-detail-meta">
            <span>{data.industry}</span>
          </div>
          <h1>{data.client}</h1>
          <p className="cs-overview">{data.overview}</p>
        </div>
      </div>

      <div className="container cs-main-container">
        <div className="cs-sidebar">
          <div className="cs-metric-highlight">
            <TrendingUp size={48} className="text-primary mb-1" />
            <h2 className="text-primary">{data.metric}</h2>
            <p>{data.metricLabel}</p>
          </div>
          <div className="cs-sidebar-cta">
            <h3>Want Similar Results?</h3>
            <button className="btn btn-primary w-100">Get a Strategy Session</button>
          </div>
        </div>

        <div className="cs-content">
          <section className="cs-section">
            <div className="section-title-wrap">
              <Target className="section-icon" />
              <h2>The Challenge</h2>
            </div>
            <p>{data.challenge}</p>
          </section>

          <section className="cs-section">
            <div className="section-title-wrap">
              <Zap className="section-icon" />
              <h2>The Strategy</h2>
            </div>
            <p>{data.strategy}</p>
          </section>

          <section className="cs-section bg-light-panel">
            <h2>The Execution</h2>
            <ul className="execution-list">
              {data.execution.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="cs-section">
             <h2>The ROI</h2>
             <p>{data.roi}</p>
             
             <div className="cs-chart-placeholder">
               <div className="chart-header">
                 <h4>Quarterly Pipeline Value</h4>
                 <span className="chart-legend"><span className="dot dot-primary"></span> Organic <span className="dot dot-secondary"></span> Paid</span>
               </div>
               <div className="chart-body">
                 <div className="chart-bars">
                   <div className="bar-group">
                     <div className="c-bar paid-bar h-30" title="Q1 Paid"></div>
                     <div className="c-bar org-bar h-20" title="Q1 Organic"></div>
                   </div>
                   <div className="bar-group">
                     <div className="c-bar paid-bar h-40" title="Q2 Paid"></div>
                     <div className="c-bar org-bar h-45" title="Q2 Organic"></div>
                   </div>
                   <div className="bar-group">
                     <div className="c-bar paid-bar h-35" title="Q3 Paid"></div>
                     <div className="c-bar org-bar h-70" title="Q3 Organic"></div>
                   </div>
                   <div className="bar-group">
                     <div className="c-bar paid-bar h-30" title="Q4 Paid"></div>
                     <div className="c-bar org-bar h-100" title="Q4 Organic"></div>
                   </div>
                 </div>
                 <div className="chart-labels">
                   <span>Q1</span>
                   <span>Q2</span>
                   <span>Q3</span>
                   <span>Q4</span>
                 </div>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
