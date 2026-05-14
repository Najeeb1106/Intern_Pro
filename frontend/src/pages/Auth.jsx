import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/pages/Auth.css';

import API from '../api';

export function SignIn() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email:'', password:'' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await API.post('/users/login', form);
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-brand">
          <div className="auth-logo">InternPro.pk</div>
          <h2>Pakistan's #1 Virtual Internship Platform</h2>
          <div className="auth-features">
            {['10,000+ Active Interns', '500+ Partner Companies', '50+ Tech Tracks', 'Verified Certificates'].map(f => (
              <div key={f} className="auth-feature"><CheckCircle size={16}/> {f}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-card">
          <div className="auth-card-header">
            <h2>Welcome Back 👋</h2>
            <p>Sign in to continue your internship journey</p>
          </div>

          {error && <div className="auth-error" style={{padding:'10px', background:'#fee2e2', color:'#dc2626', borderRadius:'8px', fontSize:'13px', marginBottom:'20px', textAlign:'center'}}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="ahmed@example.com"
                value={form.email} onChange={e => setForm({...form,email:e.target.value})} required/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-icon-wrap">
                <input type={show ? 'text' : 'password'} placeholder="Your password"
                  value={form.password} onChange={e => setForm({...form,password:e.target.value})} required/>
                <button type="button" className="eye-btn" onClick={() => setShow(!show)}>
                  {show ? <EyeOff size={16}/> : <Eye size={16}/>}
                </button>
              </div>
            </div>
            <div className="auth-forgot"><a href="#">Forgot password?</a></div>
            <button type="submit" className="btn btn-green btn-lg auth-submit" id="signin-btn"
              disabled={loading}>
              {loading ? <span className="typing-dot"/> : <><ArrowRight size={16}/> Sign In</>}
            </button>
          </form>
          <p className="auth-switch">Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up Free</button></p>
        </div>
      </div>
    </div>
  );
}

export function SignUp() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name:'', email:'', password:'', domain:'' });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const domains = ['Machine Learning', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Data Science', 'Cloud & DevOps', 'Cybersecurity', 'Digital Marketing'];

  const handleStep1 = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handleStep2 = async (domain) => {
    setLoading(true);
    setError('');
    try {
      const { data } = await API.post('/users', { ...form, domain });
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('isLoggedIn', 'true');
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setStep(1); // Go back to fix errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-brand">
          <div className="auth-logo">InternPro.pk</div>
          <h2>Join 10,000+ Students Building Their Dream Careers</h2>
          <div className="auth-features">
            {['100% Free to Join', 'No Experience Required', 'Real Project Experience', 'Industry Certificates'].map(f => (
              <div key={f} className="auth-feature"><CheckCircle size={16}/> {f}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-card">
          {/* Progress */}
          <div className="signup-progress">
            {[1,2,3].map(s => (
              <div key={s} className={`prog-step ${step >= s ? 'active' : ''} ${step > s ? 'done' : ''}`}>
                <div className="prog-dot">{step > s ? '✓' : s}</div>
                <div className="prog-label">{['Account','Domain','Done'][s-1]}</div>
              </div>
            ))}
          </div>

          {step === 1 && (
            <>
              <div className="auth-card-header">
                <h2>Create Your Account 🚀</h2>
                <p>Join Pakistan's #1 virtual internship platform</p>
              </div>

              {error && <div className="auth-error" style={{padding:'10px', background:'#fee2e2', color:'#dc2626', borderRadius:'8px', fontSize:'13px', marginBottom:'20px', textAlign:'center'}}>{error}</div>}

              <form onSubmit={handleStep1}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Ahmed Khan" value={form.name}
                    onChange={e => setForm({...form,name:e.target.value})} required/>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="ahmed@example.com" value={form.email}
                    onChange={e => setForm({...form,email:e.target.value})} required/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-icon-wrap">
                    <input type={show?'text':'password'} placeholder="Create a password" value={form.password}
                      onChange={e => setForm({...form,password:e.target.value})} required/>
                    <button type="button" className="eye-btn" onClick={() => setShow(!show)}>
                      {show ? <EyeOff size={16}/> : <Eye size={16}/>}
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn-green btn-lg auth-submit" id="next-step-btn">
                  Continue <ArrowRight size={16}/>
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <div className="auth-card-header">
                <h2>Choose Your Domain 🎯</h2>
                <p>Pick the internship track you're most excited about</p>
              </div>
              <div className="domain-grid">
                {domains.map(d => (
                  <button key={d} className="domain-btn" onClick={() => handleStep2(d)}>{d}</button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <div className="signup-success">
              <div className="success-icon">🎉</div>
              <h2>You're All Set!</h2>
              <p>Welcome to InternPro.pk, <strong>{form.name || 'Intern'}</strong>!</p>
              <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'8px'}}>Your {form.domain} internship journey begins now.</p>
              <button className="btn btn-green btn-lg" style={{marginTop:'24px'}} onClick={() => {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/dashboard');
              }}>
                Go to Dashboard <ArrowRight size={16}/>
              </button>
            </div>
          )}

          {step < 3 && (
            <p className="auth-switch">Already have an account? <button onClick={() => navigate('/signin')}>Sign In</button></p>
          )}
        </div>
      </div>
    </div>
  );
}
