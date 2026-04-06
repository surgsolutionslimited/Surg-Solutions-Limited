import { ArrowRight, Workflow, Database, MonitorSmartphone, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicePillars.css';

export default function ServicePillars() {
  const services = [
    {
      id: 'growth-engine',
      title: 'Growth Engine',
      description: 'Your digital sales infrastructure designed to convert traffic into revenue.',
      icon: <LayoutTemplate size={32} />,
      link: '/services'
    },
    {
      id: 'automation',
      title: 'Automated Operations',
      description: 'Remove manual work and let your business run on autopilot with smart workflows.',
      icon: <Workflow size={32} />,
      link: '/services'
    },
    {
      id: 'data',
      title: 'Data & Decision Systems',
      description: 'Know exactly what\'s working and where your growth is coming from.',
      icon: <Database size={32} />,
      link: '/services'
    },
    {
      id: 'scale',
      title: 'Scalable Infrastructure',
      description: 'Scale what works predictably without increasing operational complexity.',
      icon: <MonitorSmartphone size={32} />,
      link: '/services'
    }
  ];

  return (
    <section id="services" className="service-pillars section section-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Core Systems</h2>
          <p>We build interconnected infrastructure to eliminate repetitive work and scale predictably.</p>
        </div>
        
        <div className="pillars-grid">
          {services.map(service => (
            <div key={service.id} className="pillar-card">
              <div className="pillar-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="pillar-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
