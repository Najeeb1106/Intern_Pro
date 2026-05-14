import React from 'react';
import '../styles/pages/MockInterviews.css';
import { Bot, MessageSquare, BrainCircuit, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit size={28} />,
    title: 'AI-Powered Analysis',
    description: 'Get real-time feedback on your answers, body language, and tone.'
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Dynamic Questions',
    description: 'Questions adapt based on your responses, just like a real interview.'
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Performance Score',
    description: 'Receive a detailed score report with areas for improvement.'
  }
];

export default function MockInterviews() {
  return (
    <div className="mock-page">
      <section className="mock-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text animate-fade-up">
              <span className="section-label">Practice Makes Perfect</span>
              <h1 className="section-title">Crush Your Next <span className="text-green">Interview</span></h1>
              <p className="section-sub">
                Practice with our advanced AI interviewer and get detailed feedback to improve your confidence and performance.
              </p>
              <div className="hero-btns">
                <button className="btn btn-green btn-lg">Start Free Session</button>
                <button className="btn btn-outline btn-lg">Watch Demo</button>
              </div>
              <div className="trust-badges">
                <ShieldCheck size={16} /> 100% Private • <Zap size={16} /> Instant Results
              </div>
            </div>
            <div className="hero-image animate-fade-up">
              <div className="ai-box">
                <div className="ai-header">
                  <div className="ai-avatar"><Bot size={24} /></div>
                  <div className="ai-status">
                    <span className="status-dot"></span>
                    AI Interviewer Online
                  </div>
                </div>
                <div className="ai-body">
                  <div className="msg bot">"Tell me about a time you handled a difficult situation."</div>
                  <div className="msg user">"In my previous project, I encountered a major bug..."</div>
                  <div className="ai-typing">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mock-features">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mock-content">
        <div className="container">
          <div className="content-box">
            <div className="content-text animate-fade-up">
              <h2>Select Your Interview Role</h2>
              <p>Choose from over 50+ job roles and specialized technical categories.</p>
              
              <div className="role-pills">
                {['Frontend Dev', 'Backend Dev', 'UI/UX Design', 'Data Science', 'Product Manager', 'Marketing', 'Sales'].map(role => (
                  <button key={role} className="role-pill">{role}</button>
                ))}
              </div>
              
              <button className="btn btn-green btn-lg">Choose Your Path</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
