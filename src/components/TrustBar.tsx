import { CloudIcon, CpuIcon, DatabaseIcon, LayersIcon, ZapIcon } from 'lucide-react';
import './TrustBar.css';

export default function TrustBar() {
  const logos = [
    { name: 'TechFlow', icon: <LayersIcon size={24} /> },
    { name: 'Innovate AI', icon: <CpuIcon size={24} /> },
    { name: 'DataScale', icon: <DatabaseIcon size={24} /> },
    { name: 'CloudSync', icon: <CloudIcon size={24} /> },
    { name: 'NexGen B2B', icon: <ZapIcon size={24} /> },
  ];

  return (
    <div className="trust-bar section-gray">
      <div className="container">
        <p className="trust-label text-center">TRUSTED BY INDUSTRY-LEADING ENTERPRISES</p>
        <div className="trust-grid">
          {logos.map((logo, index) => (
             <div key={index} className="trust-brand">
               {logo.icon}
               <span>{logo.name}</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
