import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Globe, Star, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/pages/GraduateProgram.css';

const benefits = [
  'Mentorship from industry professionals',
  'Real project experience for 3-6 months',
  'Industry-recognized certificate',
  'LinkedIn profile review & endorsement',
  'Job placement assistance',
  'Access to exclusive job board',
];

const tracks = [
  { icon: '💼', title: 'Software Engineering', company: 'Top Tech Companies', spots: 50 },
  { icon: '📊', title: 'Data Analytics & BI', company: 'Finance & Consulting', spots: 30 },
  { icon: '🤖', title: 'AI & Machine Learning', company: 'AI Startups', spots: 25 },
  { icon: '🌐', title: 'Full-Stack Development', company: 'Product Companies', spots: 40 },
  { icon: '🎯', title: 'Product Management', company: 'SaaS Companies', spots: 20 },
  { icon: '📣', title: 'Digital Strategy', company: 'Marketing Agencies', spots: 35 },
];

export default function GraduateProgram() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="gp-hero">
        <div className="container">
          <div className="section-label">Graduate Program</div>
          <h1 className="section-title">From Graduate to<br/><span style={{color:'var(--green)'}}>Industry Ready</span></h1>
          <p className="section-sub" style={{color:'#94a3b8'}}>A structured 3-6 month program designed specifically for fresh graduates to bridge the gap between academia and industry.</p>
          <div style={{display:'flex',gap:'12px',marginTop:'28px',flexWrap:'wrap'}}>
            <button className="btn btn-green btn-lg" onClick={() => navigate('/internships')}>
              Apply Now <ArrowRight size={18}/>
            </button>
            <button className="btn btn-lg" style={{background:'rgba(255,255,255,0.1)',color:'#fff',border:'1.5px solid rgba(255,255,255,0.2)'}}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="gp-stats">
        {[
          { n: '500+', l: 'Graduates Placed' },
          { n: '95%', l: 'Job Placement Rate' },
          { n: '3x', l: 'Salary Increase Avg.' },
          { n: '6 mo.', l: 'Avg. Time to Hire' },
        ].map(s => (
          <div key={s.l} className="gp-stat">
            <div className="gp-stat-n">{s.n}</div>
            <div className="gp-stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Tracks */}
      <section className="gp-section container">
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div className="section-label" style={{display:'inline-block'}}>Available Tracks</div>
          <h2 className="section-title" style={{marginTop:'8px'}}>Choose Your Path</h2>
        </div>
        <div className="gp-grid">
          {tracks.map(t => (
            <div key={t.title} className="gp-card">
              <div className="gp-icon">{t.icon}</div>
              <h4>{t.title}</h4>
              <p className="gp-company"><Briefcase size={12}/> {t.company}</p>
              <p className="gp-spots"><Star size={12} color="#f59e0b"/> {t.spots} spots available</p>
              <button className="btn btn-green btn-sm" style={{marginTop:'16px',width:'100%'}}
                onClick={() => navigate('/internships')}>
                Apply <ArrowRight size={14}/>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <div className="gp-benefits-bg">
        <div className="container gp-benefits-inner">
          <div>
            <div className="section-label">Why Join?</div>
            <h2 className="section-title">Everything You Need<br/>to Launch Your Career</h2>
            <div className="benefits-list">
              {benefits.map(b => (
                <div key={b} className="benefit-item">
                  <CheckCircle size={18} color="var(--green)"/>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-green" style={{marginTop:'28px'}} onClick={() => navigate('/internships')}>
              Get Started <ArrowRight size={16}/>
            </button>
          </div>
          <div className="gp-benefit-visual">
            <div className="gp-cert-card">
              <GraduationCap size={48} color="var(--green)"/>
              <h3>Certificate of Excellence</h3>
              <p>InternPro.pk Graduate Program</p>
              <div className="cert-badge">Industry Verified</div>
              <div className="cert-meta">
                <Globe size={14}/> Recognized by 500+ companies worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
