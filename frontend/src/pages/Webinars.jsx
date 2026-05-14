import React from 'react';
import '../styles/pages/Webinars.css';
import { Play, Clock, Globe, Star, Video, Calendar } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'Future of Tech: AI & Beyond',
    speaker: 'Dr. Jane Smith',
    role: 'AI Research Head',
    date: 'May 20, 2024',
    time: '6:00 PM PST',
    type: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1591115765373-520b7a2d7a59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Mastering Product Management',
    speaker: 'Robert Brown',
    role: 'Senior PM at Google',
    date: 'May 25, 2024',
    time: '4:30 PM PST',
    type: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Soft Skills for Success',
    speaker: 'Emily Davis',
    role: 'Career Coach',
    date: 'May 10, 2024',
    time: 'Watched by 2.4k',
    type: 'Recorded',
    image: 'https://images.unsplash.com/photo-1475721027187-402ec7575760?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Landing Your First Internship',
    speaker: 'Michael Scott',
    role: 'Founder of InternPro',
    date: 'May 05, 2024',
    time: 'Watched by 5.1k',
    type: 'Recorded',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Webinars() {
  return (
    <div className="webinars-page">
      <section className="webinars-hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <span className="section-label">Live Learning</span>
            <h1 className="section-title">Expert-Led <span className="text-green">Webinars</span></h1>
            <p className="section-sub">Join live sessions with industry leaders or watch recorded sessions at your own pace.</p>
          </div>
        </div>
      </section>

      <section className="webinars-list">
        <div className="container">
          <div className="tabs">
            <button className="tab-btn active">All Sessions</button>
            <button className="tab-btn">Upcoming</button>
            <button className="tab-btn">Recorded</button>
          </div>

          <div className="webinars-grid">
            {webinars.map((webinar, index) => (
              <div key={webinar.id} className="webinar-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="webinar-thumb">
                  <img src={webinar.image} alt={webinar.title} />
                  <div className={`webinar-badge ${webinar.type.toLowerCase()}`}>
                    {webinar.type === 'Upcoming' ? <Globe size={12} /> : <Play size={12} />}
                    {webinar.type}
                  </div>
                </div>
                <div className="webinar-details">
                  <div className="speaker-info">
                    <Star size={16} className="star-icon" />
                    <span>{webinar.speaker} • {webinar.role}</span>
                  </div>
                  <h3>{webinar.title}</h3>
                  <div className="webinar-meta">
                    <span><Calendar size={14} /> {webinar.date}</span>
                    <span><Clock size={14} /> {webinar.time}</span>
                  </div>
                  <button className={`btn btn-lg w-100 ${webinar.type === 'Upcoming' ? 'btn-green' : 'btn-outline'}`}>
                    {webinar.type === 'Upcoming' ? 'Register Now' : 'Watch Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="perks-section">
        <div className="container">
          <div className="perks-grid">
            <div className="perk-card">
              <Video className="perk-icon" />
              <h4>HD Quality</h4>
              <p>Crystal clear video and audio for the best learning experience.</p>
            </div>
            <div className="perk-card">
              <Clock className="perk-icon" />
              <h4>Lifetime Access</h4>
              <p>Watch recorded sessions anytime, anywhere, forever.</p>
            </div>
            <div className="perk-card">
              <Star className="perk-icon" />
              <h4>Certificates</h4>
              <p>Get a certificate of participation for every live webinar you attend.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
