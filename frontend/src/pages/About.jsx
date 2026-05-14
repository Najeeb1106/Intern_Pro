import { useNavigate } from 'react-router-dom';
import { Target, Heart, Globe, Award, Users, Zap, ArrowRight } from 'lucide-react';
import '../styles/pages/About.css';

const team = [
  { name: 'Bilal Ahmed', role: 'CEO & Co-Founder', initials: 'BA', color: '#16a34a' },
  { name: 'Sana Malik', role: 'CTO', initials: 'SM', color: '#0284c7' },
  { name: 'Farrukh Naz', role: 'Head of Partnerships', initials: 'FN', color: '#7c3aed' },
  { name: 'Aisha Raza', role: 'Lead Designer', initials: 'AR', color: '#dc2626' },
  { name: 'Umar Khan', role: 'Head of Curriculum', initials: 'UK', color: '#d97706' },
  { name: 'Nadia Shah', role: 'Community Manager', initials: 'NS', color: '#0891b2' },
];

const values = [
  { icon: <Target size={24}/>, title: 'Mission-Driven', desc: 'Every feature we build is focused on one thing: making you job-ready.' },
  { icon: <Heart size={24}/>, title: 'Student First', desc: 'We exist for students. Your success is our KPI.' },
  { icon: <Globe size={24}/>, title: 'Remote-Native', desc: 'Work from anywhere in Pakistan. Geography is not a barrier.' },
  { icon: <Award size={24}/>, title: 'Quality Assured', desc: 'Every internship track is reviewed by industry experts.' },
  { icon: <Users size={24}/>, title: 'Community', desc: 'Join 10,000+ interns building, learning, and growing together.' },
  { icon: <Zap size={24}/>, title: 'Rapid Growth', desc: 'Our graduates see an avg. 3x career advancement in 6 months.' },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="about-hero">
        <div className="container">
          <div className="section-label">About Us</div>
          <h1 className="section-title">Built for Pakistan's<br/><span style={{color:'var(--green)'}}>Next Generation</span></h1>
          <p className="section-sub" style={{maxWidth:'560px',color:'#94a3b8'}}>
            InternPro.pk was founded with a simple belief: every talented student in Pakistan deserves a fair shot at building a world-class tech career — regardless of where they live.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="about-story container">
        <div className="story-content">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">From a Dorm Room to<br/>Pakistan's #1 Platform</h2>
          <p>In 2022, our founders noticed a painful gap: thousands of talented CS and IT students graduating every year, but unable to land their first job due to lack of real experience. Traditional internships were limited to a few cities and required connections most students didn't have.</p>
          <p style={{marginTop:'16px'}}>InternPro.pk was born to break that cycle. We built a fully virtual platform where any student — from Quetta to Karachi, from Gilgit to Gujranwala — could access real projects, mentor guidance, and a verified certificate that employers actually recognize.</p>
          <p style={{marginTop:'16px'}}>Today, we've helped 10,000+ interns land jobs at top companies across Pakistan and abroad. And we're just getting started.</p>
          <button className="btn btn-green" style={{marginTop:'28px'}} onClick={() => navigate('/internships')}>
            Join Our Community <ArrowRight size={16}/>
          </button>
        </div>
        <div className="story-visual">
          <div className="story-stat-card">
            <div className="story-stat-grid">
              {[
                { n:'2022', l:'Founded' },
                { n:'10K+', l:'Interns' },
                { n:'500+', l:'Partners' },
                { n:'50+', l:'Tracks' },
              ].map(s => (
                <div key={s.l} className="story-stat">
                  <div className="story-stat-num">{s.n}</div>
                  <div className="story-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <div className="about-values-bg">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <div className="section-label" style={{display:'inline-block'}}>Our Values</div>
            <h2 className="section-title" style={{marginTop:'8px'}}>What We Believe In</h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="container about-team">
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div className="section-label" style={{display:'inline-block'}}>Our Team</div>
          <h2 className="section-title" style={{marginTop:'8px'}}>The People Behind InternPro</h2>
        </div>
        <div className="team-grid">
          {team.map(m => (
            <div key={m.name} className="team-card">
              <div className="team-avatar" style={{background:`${m.color}20`,color:m.color}}>
                {m.initials}
              </div>
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join 10,000+ students building their dream career on InternPro.pk</p>
        <button className="btn btn-green btn-lg" onClick={() => navigate('/internships')}>
          Explore Internships <ArrowRight size={18}/>
        </button>
      </div>
    </div>
  );
}
