import { useState } from 'react';
import { Search, Filter, MapPin, Clock, Briefcase, ChevronRight, Star, Users, BookOpen } from 'lucide-react';
import '../styles/pages/Internships.css';

const ALL_INTERNSHIPS = [
  { id:1, title:'Machine Learning Intern', company:'TechPK Solutions', location:'Remote', duration:'8 Weeks', domain:'Machine Learning', level:'Beginner', rating:4.9, interns:1240, badge:'🔥 Hot', desc:'Work on real NLP and computer vision projects using Python, TensorFlow & PyTorch.' },
  { id:2, title:'React Developer Intern', company:'CloudX Systems', location:'Remote', duration:'6 Weeks', domain:'Web Development', level:'Beginner', rating:4.8, interns:2400, badge:'', desc:'Build full-stack web applications using React, Node.js, and MongoDB.' },
  { id:3, title:'Flutter App Developer', company:'DigiPak Corp', location:'Remote', duration:'8 Weeks', domain:'Mobile Apps', level:'Intermediate', rating:4.7, interns:890, badge:'', desc:'Develop cross-platform mobile apps using Flutter & Dart with real-world projects.' },
  { id:4, title:'UI/UX Design Intern', company:'Creative Labs', location:'Remote', duration:'6 Weeks', domain:'UI/UX Design', level:'Beginner', rating:4.8, interns:750, badge:'New', desc:'Design beautiful user interfaces using Figma, conduct user research and usability tests.' },
  { id:5, title:'Data Science Intern', company:'Analytics Hub', location:'Remote', duration:'10 Weeks', domain:'Data Science', level:'Intermediate', rating:4.9, interns:980, badge:'🔥 Hot', desc:'Analyze large datasets, build dashboards and apply machine learning to business problems.' },
  { id:6, title:'Cloud & DevOps Intern', company:'SECorp', location:'Remote', duration:'8 Weeks', domain:'Cloud & DevOps', level:'Advanced', rating:4.7, interns:620, badge:'', desc:'Work with AWS, Docker, Kubernetes, and CI/CD pipelines in a real DevOps team.' },
  { id:7, title:'Cybersecurity Intern', company:'SecureNet PK', location:'Remote', duration:'8 Weeks', domain:'Cybersecurity', level:'Intermediate', rating:4.6, interns:440, badge:'', desc:'Learn ethical hacking, penetration testing, and security analysis fundamentals.' },
  { id:8, title:'Digital Marketing Intern', company:'GrowthPK', location:'Remote', duration:'6 Weeks', domain:'Digital Marketing', level:'Beginner', rating:4.7, interns:560, badge:'New', desc:'Run SEO, social media campaigns, and performance marketing on real clients.' },
  { id:9, title:'Backend Node.js Developer', company:'Ignite Labs', location:'Remote', duration:'8 Weeks', domain:'Web Development', level:'Intermediate', rating:4.8, interns:680, badge:'', desc:'Build RESTful APIs and microservices using Node.js, Express and PostgreSQL.' },
  { id:10, title:'Android Developer Intern', company:'AppForge', location:'Remote', duration:'6 Weeks', domain:'Mobile Apps', level:'Beginner', rating:4.5, interns:420, badge:'', desc:'Develop Android applications using Kotlin and Jetpack Compose with a mentor team.' },
  { id:11, title:'Computer Vision Intern', company:'VisionAI PK', location:'Remote', duration:'10 Weeks', domain:'Machine Learning', level:'Advanced', rating:4.9, interns:310, badge:'', desc:'Build real-time object detection and image segmentation systems using YOLO & OpenCV.' },
  { id:12, title:'Graphic Design Intern', company:'PixelCraft', location:'Remote', duration:'4 Weeks', domain:'UI/UX Design', level:'Beginner', rating:4.6, interns:390, badge:'New', desc:'Create stunning visuals, social media graphics and brand assets for real clients.' },
];

const DOMAINS = ['All', 'Machine Learning', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Data Science', 'Cloud & DevOps', 'Cybersecurity', 'Digital Marketing'];
const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const levelColors = { Beginner: '#16a34a', Intermediate: '#0284c7', Advanced: '#7c3aed' };
const levelBgs = { Beginner: '#f0fdf4', Intermediate: '#eff6ff', Advanced: '#f5f3ff' };

export default function Internships() {
  const [search, setSearch] = useState('');
  const [domain, setDomain] = useState('All');
  const [level, setLevel] = useState('All Levels');
  const [applied, setApplied] = useState([]);

  const filtered = ALL_INTERNSHIPS.filter(i => {
    const matchSearch = i.title.toLowerCase().includes(search.toLowerCase()) ||
      i.company.toLowerCase().includes(search.toLowerCase()) ||
      i.domain.toLowerCase().includes(search.toLowerCase());
    const matchDomain = domain === 'All' || i.domain === domain;
    const matchLevel = level === 'All Levels' || i.level === level;
    return matchSearch && matchDomain && matchLevel;
  });

  const handleApply = (id) => {
    if (!applied.includes(id)) {
      setApplied([...applied, id]);
    }
  };

  return (
    <div className="internships-page">
      {/* Header */}
      <div className="int-hero">
        <div className="container">
          <div className="section-label">Internship Portal</div>
          <h1 className="section-title">Find Your Perfect<br/><span style={{color:'var(--green)'}}>Internship</span></h1>
          <p className="section-sub">Explore 10,000+ virtual internships across 50+ industry sectors. No experience needed.</p>

          {/* Search */}
          <div className="int-search-bar">
            <Search size={18} color="#94a3b8"/>
            <input
              type="text"
              placeholder="Search internships, companies, or skills..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="btn btn-green" id="search-internships-btn">Search</button>
          </div>

          {/* Stats pills */}
          <div className="int-stats">
            <span><Briefcase size={14}/> {ALL_INTERNSHIPS.length} Active Listings</span>
            <span><Users size={14}/> 10,000+ Interns</span>
            <span><BookOpen size={14}/> 8 Domains</span>
            <span><Star size={14} fill="#f59e0b" color="#f59e0b"/> 4.8 Avg Rating</span>
          </div>
        </div>
      </div>

      <div className="int-body container">
        {/* Sidebar Filters */}
        <aside className="int-sidebar">
          <div className="filter-group">
            <h3><Filter size={14}/> Domain</h3>
            {DOMAINS.map(d => (
              <button key={d}
                className={`filter-btn ${domain === d ? 'active' : ''}`}
                onClick={() => setDomain(d)}>
                {d}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <h3>Level</h3>
            {LEVELS.map(l => (
              <button key={l}
                className={`filter-btn ${level === l ? 'active' : ''}`}
                onClick={() => setLevel(l)}>
                {l}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <h3>Duration</h3>
            {['Any Duration', '4 Weeks', '6 Weeks', '8 Weeks', '10+ Weeks'].map(d => (
              <button key={d} className="filter-btn">{d}</button>
            ))}
          </div>
        </aside>

        {/* Listings */}
        <div className="int-listings">
          <div className="int-listings-header">
            <p><strong>{filtered.length}</strong> internships found</p>
            <select className="sort-select">
              <option>Most Popular</option>
              <option>Newest First</option>
              <option>Rating: High to Low</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <div style={{fontSize:'48px',marginBottom:'16px'}}>🔍</div>
              <h3>No internships found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="int-grid">
              {filtered.map(intern => (
                <div key={intern.id} className="int-card">
                  <div className="int-card-top">
                    <div className="int-company-logo">
                      {intern.company.charAt(0)}
                    </div>
                    <div className="int-meta">
                      <h3 className="int-title">{intern.title}</h3>
                      <p className="int-company">{intern.company}</p>
                    </div>
                    {intern.badge && <span className="int-badge">{intern.badge}</span>}
                  </div>

                  <p className="int-desc">{intern.desc}</p>

                  <div className="int-tags">
                    <span className="int-tag"><MapPin size={11}/> {intern.location}</span>
                    <span className="int-tag"><Clock size={11}/> {intern.duration}</span>
                    <span className="level-pill"
                      style={{color: levelColors[intern.level], background: levelBgs[intern.level]}}>
                      {intern.level}
                    </span>
                  </div>

                  <div className="int-footer">
                    <div className="int-rating">
                      <Star size={13} fill="#f59e0b" color="#f59e0b"/>
                      <span>{intern.rating}</span>
                      <span className="int-interns">· {intern.interns.toLocaleString()} interns</span>
                    </div>
                    <button
                      className={`btn btn-sm ${applied.includes(intern.id) ? 'btn-applied' : 'btn-green'}`}
                      onClick={() => handleApply(intern.id)}
                      id={`apply-btn-${intern.id}`}>
                      {applied.includes(intern.id) ? '✓ Applied' : 'Apply Now'}
                      {!applied.includes(intern.id) && <ChevronRight size={14}/>}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
