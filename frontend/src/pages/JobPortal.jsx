import { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, ChevronRight, Building2 } from 'lucide-react';
import '../styles/pages/JobPortal.css';

const JOB_DATA = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechFlow Solutions',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    posted: '2 days ago',
    logo: 'TF',
    category: 'Engineering'
  },
  {
    id: 2,
    title: 'UI/UX Product Designer',
    company: 'CreativePulse',
    location: 'Lahore, PK',
    type: 'Contract',
    salary: '$50k - $70k',
    posted: '5 hours ago',
    logo: 'CP',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Backend Engineer (Node.js)',
    company: 'CloudScale AI',
    location: 'Karachi, PK',
    type: 'Full-time',
    salary: '$90k - $130k',
    posted: '1 day ago',
    logo: 'CS',
    category: 'Engineering'
  },
  {
    id: 4,
    title: 'Digital Marketing Manager',
    company: 'GrowthHackers',
    location: 'Remote',
    type: 'Full-time',
    salary: '$60k - $90k',
    posted: '3 days ago',
    logo: 'GH',
    category: 'Marketing'
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'InsightAnalytics',
    location: 'Islamabad, PK',
    type: 'Remote',
    salary: '$100k - $150k',
    posted: '1 week ago',
    logo: 'IA',
    category: 'Data Science'
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'SecureSystems',
    location: 'Lahore, PK',
    type: 'Full-time',
    salary: '$110k - $160k',
    posted: '4 days ago',
    logo: 'SS',
    category: 'Engineering'
  }
];

export default function JobPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Data Science', 'Product'];

  const filteredJobs = JOB_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || job.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="job-portal-page">
      <section className="job-hero">
        <div className="container">
          <div className="section-label" style={{color:'rgba(255,255,255,0.8)'}}>Career Opportunities</div>
          <h1 className="section-title" style={{color:'white'}}>Find Your Next <br/> <span style={{color:'var(--primary-light)'}}>Dream Job</span></h1>
          <p className="section-sub" style={{color:'rgba(255,255,255,0.7)', maxWidth:'600px', margin:'0 auto'}}>
            Explore thousands of job opportunities from top companies in Pakistan and across the globe. Your career journey starts here.
          </p>

          <div className="job-search-container">
            <div className="search-input-group">
              <Search size={20} color="#94a3b8"/>
              <input 
                type="text" 
                placeholder="Job title or keyword" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="search-input-group">
              <MapPin size={20} color="#94a3b8"/>
              <input type="text" placeholder="Location" defaultValue="Remote" />
            </div>
            <button className="search-btn">
              Search Jobs
            </button>
          </div>

          <div className="job-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="job-content container">
        <div className="section-header" style={{marginBottom:'32px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h2 style={{fontSize:'24px', fontWeight:'700'}}>Recent Openings</h2>
            <p style={{color:'var(--muted)'}}>Showing {filteredJobs.length} available positions</p>
          </div>
          <button className="btn btn-outline" style={{display:'flex', alignItems:'center', gap:8}}>
            <Filter size={16}/> Filter Results
          </button>
        </div>

        <div className="job-grid">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div className="company-logo">{job.logo}</div>
                <div className={`job-badge badge-${job.type.toLowerCase().replace('-', '')}`}>
                  {job.type}
                </div>
              </div>
              
              <div>
                <h3 className="job-title">{job.title}</h3>
                <div className="company-name">
                  <Building2 size={14}/> {job.company}
                </div>
              </div>

              <div className="job-meta">
                <span><MapPin size={14}/> {job.location}</span>
                <span><Clock size={14}/> {job.posted}</span>
              </div>

              <div className="job-footer">
                <div className="job-salary">{job.salary}</div>
                <button className="apply-btn">
                  Apply Now <ChevronRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div style={{textAlign:'center', padding:'80px 0'}}>
            <h3>No jobs found matching your criteria.</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </section>
    </div>
  );
}
