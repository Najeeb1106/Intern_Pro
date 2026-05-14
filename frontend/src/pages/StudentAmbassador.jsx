import { useNavigate } from 'react-router-dom';
import { Star, Users, Globe, ArrowRight, CheckCircle, Award } from 'lucide-react';
import '../styles/pages/StudentAmbassador.css';

const perks = [
  { icon: '💰', title: 'Earn While You Learn', desc: 'Get paid for every successful referral and community contribution.' },
  { icon: '🏆', title: 'Ambassador Certificate', desc: 'Exclusive verified certificate recognized by top employers.' },
  { icon: '🎯', title: 'Leadership Experience', desc: 'Develop real leadership and community management skills.' },
  { icon: '🌐', title: 'National Network', desc: 'Connect with 10,000+ interns from all over Pakistan.' },
  { icon: '📣', title: 'Brand Recognition', desc: 'Get featured on our website, social media, and press releases.' },
  { icon: '🚀', title: 'Career Boost', desc: 'Stand out to employers with proven community leadership.' },
];

const steps = [
  { num:'01', title:'Apply Online', desc:'Submit a quick application form. No prior experience needed — just passion!' },
  { num:'02', title:'Get Onboarded', desc:'Join exclusive training, ambassador community and get your starter kit.' },
  { num:'03', title:'Lead & Grow', desc:'Host events, onboard interns, create content, and earn rewards.' },
];

export default function StudentAmbassador() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sa-hero">
        <div className="container">
          <div className="section-label">Student Ambassador Program</div>
          <h1 className="section-title">Become the Voice of<br/><span style={{color:'var(--green)'}}>InternPro.pk</span></h1>
          <p className="section-sub" style={{color:'#94a3b8',maxWidth:'540px'}}>
            Lead, inspire, and grow your network as an official InternPro.pk Student Ambassador. Make an impact while boosting your own career.
          </p>
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <button className="btn btn-green btn-lg" onClick={() => navigate('/signup')}>
              Apply Now <ArrowRight size={18}/>
            </button>
            <div className="sa-hero-stat"><Star size={14} fill="#f59e0b" color="#f59e0b"/> 500+ Active Ambassadors</div>
          </div>
        </div>
      </div>

      {/* Perks */}
      <section className="sa-section container">
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div className="section-label" style={{display:'inline-block'}}>Why Join?</div>
          <h2 className="section-title" style={{marginTop:'8px'}}>Ambassador Perks</h2>
        </div>
        <div className="perks-grid">
          {perks.map(p => (
            <div key={p.title} className="perk-card">
              <div className="perk-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Join */}
      <div style={{background:'var(--light)',padding:'80px 5%'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <div className="section-label" style={{display:'inline-block'}}>How to Join</div>
            <h2 className="section-title" style={{marginTop:'8px'}}>3 Simple Steps</h2>
          </div>
          <div className="sa-steps">
            {steps.map(s => (
              <div key={s.num} className="sa-step-card">
                <div className="sa-step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sa-cta">
        <Award size={48} color="rgba(255,255,255,0.3)"/>
        <h2>Ready to Make an Impact?</h2>
        <p>Join 500+ student ambassadors leading Pakistan's tech future</p>
        <button className="btn btn-lg" style={{background:'#fff',color:'var(--green)',marginTop:'20px'}}
          onClick={() => navigate('/signup')}>
          Become an Ambassador <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
}
