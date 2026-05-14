import React from 'react';
import '../styles/pages/StartupJourney.css';
import { Rocket, Target, Lightbulb, TrendingUp, Users, Award } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb size={32} />,
    title: 'Ideation Phase',
    description: 'Transforming a raw concept into a viable business idea through market research and validation.',
    color: '#3b82f6'
  },
  {
    icon: <Target size={32} />,
    title: 'Strategic Planning',
    description: 'Defining goals, target audience, and a roadmap to achieve sustainable growth.',
    color: '#10b981'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Launch & MVP',
    description: 'Bringing your Minimum Viable Product to life and gathering initial user feedback.',
    color: '#f59e0b'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Scaling Up',
    description: 'Expanding your reach, optimizing operations, and growing your team for massive impact.',
    color: '#8b5cf6'
  }
];

export default function StartupJourney() {
  return (
    <div className="startup-page">
      <section className="startup-hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <span className="section-label">For Future Founders</span>
            <h1 className="section-title">Fuel Your <span className="text-green">Startup Journey</span></h1>
            <p className="section-sub">
              From a single spark of an idea to a thriving enterprise. We provide the mentorship, resources, and platform you need to build the next big thing.
            </p>
            <div className="hero-btns">
              <button className="btn btn-green btn-lg">Start Your Venture</button>
              <button className="btn btn-outline btn-lg">View Success Stories</button>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-roadmap">
        <div className="container">
          <div className="roadmap-grid">
            {steps.map((step, index) => (
              <div key={index} className="roadmap-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="step-number" style={{ background: step.color }}>{index + 1}</div>
                <div className="step-icon" style={{ color: step.color }}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="startup-stats">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item">
              <h2>500+</h2>
              <p>Startups Supported</p>
            </div>
            <div className="stat-item">
              <h2>$10M+</h2>
              <p>Funding Raised</p>
            </div>
            <div className="stat-item">
              <h2>1.2k+</h2>
              <p>Active Mentors</p>
            </div>
            <div className="stat-item">
              <h2>85%</h2>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-box animate-fade-up">
            <h2>Ready to transform your vision?</h2>
            <p>Join our incubator program and get access to exclusive networking and funding opportunities.</p>
            <button className="btn btn-green btn-lg">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
