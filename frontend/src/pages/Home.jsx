import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Star, TrendingUp, Users, Award, Building2 } from 'lucide-react';
import '../styles/pages/Home.css';

const tracks = [
  { icon: '🤖', title: 'Machine Learning', desc: 'Build AI models, work with data pipelines and deploy ML solutions.', count: '1.2K interns' },
  { icon: '🌐', title: 'Web Development', desc: 'Full-stack projects using modern frameworks like React & Node.js.', count: '2.4K interns' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Develop Android & iOS apps with Flutter and React Native.', count: '890 interns' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Design user-centered products using Figma and industry tools.', count: '750 interns' },
  { icon: '📊', title: 'Data Science', desc: 'Analyze datasets, build dashboards and derive business insights.', count: '980 interns' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Azure, Docker, CI/CD pipelines and cloud infrastructure.', count: '620 interns' },
  { icon: '🔐', title: 'Cybersecurity', desc: 'Ethical hacking, pen testing and security analysis fundamentals.', count: '440 interns' },
  { icon: '📣', title: 'Digital Marketing', desc: 'SEO, social media strategy and performance marketing campaigns.', count: '560 interns' },
];

const testimonials = [
  { name: 'Ahmed Khan', city: 'Karachi', initials: 'AK', stars: 5, text: '"Thanks to InternPro.pk, I built real ML projects and landed a job as a Data Scientist at a Dubai-based startup within 3 months."' },
  { name: 'Sara Raza', city: 'Lahore', initials: 'SR', stars: 5, text: '"The AI chatbot support was incredible — always available. The structured learning path took me from zero to Flutter developer in 8 weeks."' },
  { name: 'Usman Malik', city: 'Islamabad', initials: 'UM', stars: 5, text: '"The mentorship program changed my life. I now work remotely for a US tech company — all thanks to the skills I gained here."' },
];

const partners = ['PITB', 'NICS', 'CloudX', 'TechPK', 'DigiPak', 'SECorp', 'Ignite', 'P@SHA'];

const steps = [
  { num: '01', title: 'Sign Up & Choose a Domain', desc: 'Explore a wide range of internships across various industries, tailored to your skills and interests.', tags: ['Fast Setup', 'Guided Steps', 'Free'] },
  { num: '02', title: 'Complete Your Application', desc: 'Submit a short form and secure your internship opportunity in minutes — no experience required.', tags: ['Instant Review', 'Verified'] },
  { num: '03', title: 'Earn Your Certificate', desc: 'Finish your internship, gain real hands-on experience and receive a verified digital certificate.', tags: ['Industry Cert', 'LinkedIn Badge'] },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg-gradient"/>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"/>
              🚀 Pakistan's #1 Virtual Internship Platform
            </div>
            <h1 className="hero-h1">
              Build Skills.<br/>Get Experience.<br/>
              <span className="hero-accent">Land Your Job.</span>
            </h1>
            <p className="hero-p">
              Stop waiting for opportunities. Start building real skills with Pakistan's fastest-growing virtual internship platform. Your dream tech career begins here — no experience required.
            </p>
            <div className="hero-actions">
              <button className="btn btn-green btn-lg" onClick={() => navigate('/internships')}>
                Start Free Today <ArrowRight size={18}/>
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => navigate('/internships')}>
                <Play size={16}/> Explore Internships
              </button>
            </div>
            <div className="hero-stats">
              {[
                { num: '10K+', label: 'Active Interns' },
                { num: '500+', label: 'Partner Companies' },
                { num: '50+', label: 'Tech Tracks' },
              ].map(s => (
                <div key={s.label} className="hero-stat">
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="mock-card">
              <div className="mock-header">
                <div className="avatar-green">AK</div>
                <div>
                  <div style={{fontSize:'14px',fontWeight:600}}>Ahmed Khan</div>
                  <div style={{fontSize:'12px',color:'#64748b'}}>Machine Learning Intern</div>
                </div>
                <span className="status-badge">Active</span>
              </div>
              <div className="track-pills">
                <span className="track-pill">🤖 ML</span>
                <span className="track-pill">🐍 Python</span>
                <span className="track-pill">📊 Data Science</span>
              </div>
              <div style={{fontSize:'12px',color:'#64748b',marginTop:'8px'}}>Progress: Week 3 of 8</div>
              <div className="prog-bar"><div className="prog-fill" style={{width:'37%'}}/></div>
            </div>

            <div className="mock-card">
              <div style={{fontSize:'13px',fontWeight:600,marginBottom:'12px'}}>Upcoming Task Deadline</div>
              <div className="deadline-row">
                <span>Build Chatbot API</span>
                <span style={{color:'#dc2626',fontWeight:600}}>2 days left</span>
              </div>
              <div className="deadline-row">
                <span>Submit NLP Report</span>
                <span style={{color:'#f59e0b',fontWeight:600}}>5 days left</span>
              </div>
            </div>

            <div className="mock-mini-row">
              <div className="mock-mini">
                <div className="mock-mini-num">87%</div>
                <div className="mock-mini-label">Completion Rate</div>
              </div>
              <div className="mock-mini">
                <div className="mock-mini-num">4.9⭐</div>
                <div className="mock-mini-label">Mentor Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="partners-bar">
        <p>Collaborated with Trusted Worldwide Partners</p>
        <div className="partners-logos">
          {partners.map(p => <div key={p} className="partner-name">{p}</div>)}
        </div>
      </div>

      {/* TRACKS */}
      <section className="section tracks-section">
        <div className="section-header-row">
          <div>
            <div className="section-label">Trending Tracks</div>
            <h2 className="section-title">Your Dream Internship<br/>is One Click Away!</h2>
            <p className="section-sub">Choose from 10+ in-demand tech tracks and start building real-world skills today.</p>
          </div>
          <button className="btn btn-outline" onClick={() => navigate('/internships')}>
            View All Tracks <ArrowRight size={14}/>
          </button>
        </div>
        <div className="tracks-grid">
          {tracks.map(t => (
            <div key={t.title} className="track-card" onClick={() => navigate('/internships')}>
              <div className="track-icon">{t.icon}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
              <div className="track-count"><Users size={11}/> {t.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div className="hiw-bg">
        <div className="container hiw-inner">
          <div style={{textAlign:'center'}}>
            <div className="section-label" style={{display:'inline-block'}}>How It Works</div>
            <h2 className="section-title" style={{marginTop:'8px'}}>Start Fast. Learn Smart.<br/>Get Job-Ready.</h2>
          </div>
          <div className="steps-grid">
            {steps.map(s => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="step-tags">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS BAND */}
      <div className="stats-band">
        {[
          { n: '10,000+', l: 'Active Internships', icon: <TrendingUp size={24}/> },
          { n: '500+', l: 'Partner Companies', icon: <Building2 size={24}/> },
          { n: '10,000+', l: 'Success Stories', icon: <Users size={24}/> },
          { n: '50+', l: 'Industry Sectors', icon: <Award size={24}/> },
        ].map(s => (
          <div key={s.l} className="stat-big">
            <div className="stat-big-icon">{s.icon}</div>
            <div className="stat-big-num">{s.n}</div>
            <div className="stat-big-label">{s.l}</div>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-label">Trusted by Thousands</div>
        <h2 className="section-title">Join Thousands of Achievers.<br/>Connect, Learn, Succeed.</h2>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testi-card">
              <div className="stars-row">
                {Array.from({length:t.stars}).map((_,i) => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b"/>)}
              </div>
              <p>{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div style={{fontSize:'14px',fontWeight:600}}>{t.name}</div>
                  <div style={{fontSize:'12px',color:'#64748b'}}>{t.city}, Pakistan</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="cta-section">
        <div className="cta-glow"/>
        <h2>Unlock New Opportunities<br/>With Top-tier Internships.</h2>
        <p>Take the first step toward a successful tech career with InternPro.pk.</p>
        <div className="cta-btns">
          <button className="btn btn-green btn-lg" onClick={() => navigate('/internships')}>
            Get Started Now <ArrowRight size={18}/>
          </button>
          <button className="btn btn-lg cta-outline" onClick={() => navigate('/internships')}>
            Explore Internships
          </button>
        </div>
      </div>
    </div>
  );
}
