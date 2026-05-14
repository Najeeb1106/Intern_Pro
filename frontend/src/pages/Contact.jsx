import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import '../styles/pages/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className="section-label">Contact Us</div>
          <h1 className="section-title">We'd Love to<br/><span style={{color:'var(--green)'}}>Hear from You</span></h1>
          <p className="section-sub" style={{color:'#94a3b8'}}>Have questions about internships, partnerships, or anything else? Our team is here to help.</p>
        </div>
      </div>

      <div className="contact-body container">
        {/* Info Cards */}
        <div className="contact-info">
          {[
            { icon: <Mail size={22}/>, title: 'Email Us', val: 'hello@internpro.pk', sub: 'We reply within 24 hours' },
            { icon: <Phone size={22}/>, title: 'Call Us', val: '+92 300 3xxxxxx', sub: 'Mon-Fri, 9am–6pm PKT' },
            { icon: <MapPin size={22}/>, title: 'Visit Us', val: 'Lahore, Pakistan', sub: 'Virtual office — we\'re remote!' },
            { icon: <Clock size={22}/>, title: 'Support Hours', val: '9am – 9pm PKT', sub: 'All 7 days of the week' },
          ].map(c => (
            <div key={c.title} className="contact-card">
              <div className="contact-card-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p className="contact-val">{c.val}</p>
              <p className="contact-sub">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <CheckCircle size={56} color="var(--green)"/>
              <h3>Message Sent! 🎉</h3>
              <p>Thank you, {form.name}! We'll get back to you within 24 hours.</p>
              <button className="btn btn-green" onClick={() => { setSubmitted(false); setForm({ name:'',email:'',subject:'',message:'' }); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div className="form-header">
                <MessageCircle size={24} color="var(--green)"/>
                <div>
                  <h3>Send a Message</h3>
                  <p>Fill out the form and we'll respond soon.</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Ahmed Khan" value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})} required/>
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="ahmed@example.com" value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})} required/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Inquiry about internship application" value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}/>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea rows={5} placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})} required/>
                </div>
                <button type="submit" className="btn btn-green btn-lg" id="contact-submit-btn"
                  style={{width:'100%'}}>
                  <Send size={16}/> Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
