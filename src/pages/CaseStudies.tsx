import { useSearchParams } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';
import './CaseStudies.css';

export default function CaseStudies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  let filter = 'All';
  if (filterParam === 'growth') filter = 'Growth Engine';
  else if (filterParam === 'automation') filter = 'Automation';
  else if (filterParam === 'scale') filter = 'Scaling';

  const setFilter = (newFilter: string) => {
    if (newFilter === 'All') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('filter');
      setSearchParams(newParams);
    } else if (newFilter === 'Growth Engine') {
      setSearchParams({ filter: 'growth' });
    } else if (newFilter === 'Automation') {
      setSearchParams({ filter: 'automation' });
    } else if (newFilter === 'Scaling') {
      setSearchParams({ filter: 'scale' });
    }
  };

  const caseStudies = [
    { id: '1', client: 'FinServe Global', industry: 'FinTech', metric: '15hrs', metricLabel: 'Saved Per Week', category: 'Automation', imageFallback: 'linear-gradient(135deg, #0A192F, #112240)' },
    { id: '2', client: 'NexData Systems', industry: 'SaaS', metric: '+300%', metricLabel: 'Lead Conversion', category: 'Growth Engine', imageFallback: 'linear-gradient(135deg, #12cbd0, #0fabae)' },
    { id: '3', client: 'MedTech Innovators', industry: 'Healthcare', metric: 'Fully', metricLabel: 'Automated Pipeline', category: 'Automation', imageFallback: 'linear-gradient(135deg, #475569, #1e293b)' },
    { id: '4', client: 'Logistix Enterprise', industry: 'Logistics', metric: 'Zero', metricLabel: 'Manual Follow-ups', category: 'Automation', imageFallback: 'linear-gradient(135deg, #112240, #0A192F)' },
    { id: '5', client: 'AI Scale Partners', industry: 'Technology', metric: 'Predictable', metricLabel: 'Lead Flow', category: 'Scaling', imageFallback: 'linear-gradient(135deg, #0fabae, #12cbd0)' },
    { id: '6', client: 'EduPlatform B2B', industry: 'E-Learning', metric: '10x', metricLabel: 'ROI on System Build', category: 'Growth Engine', imageFallback: 'linear-gradient(135deg, #1e293b, #475569)' },
  ];

  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <div className="case-studies-page animate-fade-in">
      <section className="cs-page-header section-dark text-center">
        <div className="container">
          <h1>Proven Operational Outcomes</h1>
          <p>Explore how our integrated systems drive efficiency and exponential pipeline growth.</p>
        </div>
      </section>

      <section className="cs-page-content section section-gray">
        <div className="container">
          <div className="cs-filter-bar">
             <button className={`cs-filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All Work</button>
             <button className={`cs-filter-btn ${filter === 'Growth Engine' ? 'active' : ''}`} onClick={() => setFilter('Growth Engine')}>Growth Engine</button>
             <button className={`cs-filter-btn ${filter === 'Automation' ? 'active' : ''}`} onClick={() => setFilter('Automation')}>Automation</button>
             <button className={`cs-filter-btn ${filter === 'Scaling' ? 'active' : ''}`} onClick={() => setFilter('Scaling')}>Scaling</button>
          </div>

          <div className="cs-grid">
            {filteredStudies.map(cs => (
              <CaseStudyCard key={cs.id} {...cs} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
