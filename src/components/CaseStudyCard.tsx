import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
  id: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  category: string;
  imageFallback: string;
}

export default function CaseStudyCard({ id, client, industry, metric, metricLabel, category, imageFallback }: CaseStudyCardProps) {
  return (
    <div className="cs-card">
       <div className="cs-card-hero" style={{ background: imageFallback }}>
         <div className="cs-card-metric">
           <span className="metric-value">{metric}</span>
           <span className="metric-label">{metricLabel}</span>
         </div>
       </div>
       <div className="cs-card-content">
         <div className="cs-card-meta">
           <span className="cs-industry">{industry}</span>
           <span className="cs-category">{category}</span>
         </div>
         <h3 className="cs-client">{client}</h3>
         <Link to={`/case-studies/${id}`} className="cs-link">
           Read the Data <ArrowRight size={16} />
         </Link>
       </div>
    </div>
  );
}
