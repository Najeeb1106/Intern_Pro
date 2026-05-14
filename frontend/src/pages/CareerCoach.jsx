import React from 'react';
import '../styles/pages/CareerCoach.css';
import { Compass, Users, MessageSquare, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const programs = [
  {
    icon: <Briefcase size={24} />,
    title: 'Career Switch',
    description: 'Specialized path for those looking to change their industry or role.'
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Fresh Graduate',
    description: 'Jumpstart your career with our entry-level excellence program.'
  },
  {
    icon: <Trophy size={24} />,
    title: 'Leadership Path',
    description: 'Develop the soft skills needed to manage teams and lead projects.'
  }
];

export default function CareerCoach() {
  return (
    <div className="coach-page">
      <section className="coach-hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <span className="section-label">Personalized Growth</span>
            <h1 className="section-title">Your Personal <span className="text-green">Career Coach</span></h1>
            <p className="section-sub">
              Get 1-on-1 mentorship from industry veterans who have been where you want to go.
            </p>
            <div className="hero-btns">
              <button className="btn btn-green btn-lg">Book Free Discovery Call</button>
              <button className="btn btn-outline btn-lg">Browse Mentors</button>
            </div>
          </div>
        </div>
      </section>

      <section className="coach-features">
        <div className="container">
          <div className="coach-grid">
            {programs.map((p, i) => (
              <div key={i} className="coach-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="p-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <button className="learn-more">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mentors-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our <span className="text-green">Top Mentors</span></h2>
            <p className="section-sub">Experts from top companies around the world.</p>
          </div>
          
          <div className="mentors-grid">
            {[1, 2, 3, 4].map((m) => (
              <div key={m} className="mentor-card animate-fade-up">
                <div className="mentor-img">
                  <img src={`https://i.pravatar.cc/150?u=mentor${m}`} alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h4>{['James Wilson', 'Sonia Gupta', 'Mark Thompson', 'Elena Rodriguez'][m-1]}</h4>
                  <p>{['Senior Engineer @ Meta', 'Product Lead @ Netflix', 'Design Director @ Apple', 'Data Scientist @ Google'][m-1]}</p>
                  <div className="mentor-stats">
                    <span>⭐ 4.9</span>
                    <span>120+ Sessions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-box animate-fade-up">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>How does the matching process work?</h4>
                <p>We use AI to analyze your goals and experience, then suggest the best mentors for your specific needs.</p>
              </div>
              <div className="faq-item">
                <h4>Are sessions recorded?</h4>
                <p>Yes, all sessions are recorded for your review so you can revisit the advice anytime.</p>
              </div>
              <div className="faq-item">
                <h4>What if I'm not satisfied?</h4>
                <p>We offer a 100% money-back guarantee on your first session if you feel it didn't add value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
