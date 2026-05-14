import React from 'react';
import '../styles/pages/ResumeBuilder.css';
import { FileText, Layout, CheckCircle, Download, Pencil, Eye } from 'lucide-react';

const templates = [
  { id: 1, name: 'Modern Professional', type: 'Creative', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Minimalist Clean', type: 'Classic', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Creative Designer', type: 'Graphic', image: 'https://images.unsplash.com/photo-1586282391129-59a998bd717c?q=80&w=400&auto=format&fit=crop' }
];

export default function ResumeBuilder() {
  return (
    <div className="resume-page">
      <section className="resume-hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <span className="section-label">Smart Tools</span>
            <h1 className="section-title">Build a Resume that <span className="text-green">Gets You Hired</span></h1>
            <p className="section-sub">
              Create a professional, ATS-friendly resume in minutes with our intelligent builder.
            </p>
            <div className="hero-btns">
              <button className="btn btn-green btn-lg">Create New Resume</button>
              <button className="btn btn-outline btn-lg">Upload Existing</button>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="steps-container">
            <div className="step-item animate-fade-up">
              <div className="step-circle">1</div>
              <Layout size={32} className="step-icon" />
              <h3>Choose Template</h3>
              <p>Select from a variety of ATS-optimized templates.</p>
            </div>
            <div className="step-item animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="step-circle">2</div>
              <Pencil size={32} className="step-icon" />
              <h3>Fill in Details</h3>
              <p>Add your experience, skills, and education.</p>
            </div>
            <div className="step-item animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="step-circle">3</div>
              <Eye size={32} className="step-icon" />
              <h3>Review & Edit</h3>
              <p>Fine-tune every detail with our smart editor.</p>
            </div>
            <div className="step-item animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="step-circle">4</div>
              <Download size={32} className="step-icon" />
              <h3>Download PDF</h3>
              <p>Get your professional resume in high quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="template-preview">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Popular <span className="text-green">Templates</span></h2>
            <p className="section-sub mx-auto">Handcrafted by industry experts to help you stand out from the crowd.</p>
          </div>
          
          <div className="template-grid">
            {templates.map((temp) => (
              <div key={temp.id} className="template-card animate-fade-up">
                <div className="temp-img">
                  <img src={temp.image} alt={temp.name} />
                  <div className="temp-overlay">
                    <button className="btn btn-green">Use Template</button>
                  </div>
                </div>
                <div className="temp-info">
                  <h4>{temp.name}</h4>
                  <span className="tag">{temp.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ats-check">
        <div className="container">
          <div className="ats-card">
            <div className="ats-content">
              <div className="ats-label">AI Feature</div>
              <h2>Free ATS Score Check</h2>
              <p>Upload your current resume and see how it performs against Applicant Tracking Systems.</p>
              <ul className="ats-features">
                <li><CheckCircle size={18} /> Keyword Optimization</li>
                <li><CheckCircle size={18} /> Formatting Check</li>
                <li><CheckCircle size={18} /> Content Analysis</li>
              </ul>
              <button className="btn btn-green btn-lg">Run ATS Audit</button>
            </div>
            <div className="ats-visual">
              <div className="score-circle">
                <span className="score-num">85</span>
                <span className="score-text">ATS Score</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
