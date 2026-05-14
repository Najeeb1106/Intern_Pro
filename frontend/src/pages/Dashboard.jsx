import { useState, useEffect } from 'react';
import { User, Briefcase, Award, TrendingUp, Bell, PieChart, GraduationCap, Laptop, Settings, LogOut, ChevronRight, MapPin, Mail, Phone, Camera, Search, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import '../styles/pages/Dashboard.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/150?u=guest");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get('/users/profile');
        setUserData(data);
        if (data.profilePic) setProfilePic(data.profilePic);
      } catch (err) {
        console.error('Failed to fetch profile', err);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userInfo');
        navigate('/signin');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    navigate('/');
    window.location.reload();
  };

  if (loading) {
    return (
      <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f8fafc'}}>
        <div style={{textAlign:'center'}}>
          <Loader2 className="animate-spin" size={48} color="#16a34a" style={{marginBottom:'16px'}}/>
          <p style={{color:'var(--muted)', fontWeight:500}}>Syncing your progress...</p>
        </div>
      </div>
    );
  }

  const handleProfileUpdate = async () => {
    try {
      const { data } = await API.put('/users/profile', userData);
      setUserData(data);
      alert('Profile updated successfully! ✨');
    } catch (err) {
      console.error('Failed to update profile', err);
      alert('Failed to update profile. Please try again.');
    }
  };

  const userName = userData?.name || "Intern";

  const handlePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;
        setProfilePic(base64String);
        try {
          await API.put('/users/profile', { ...userData, profilePic: base64String });
          alert('Profile picture updated! 📸');
        } catch (err) {
          console.error('Failed to update profile picture', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            {/* Welcome Card */}
            <div className="welcome-card">
              <img src={profilePic} alt="Profile" className="welcome-img" />
              <div className="welcome-text">
                <p style={{fontSize:'13px',color:'var(--muted)',marginBottom:'4px'}}>Thursday, May 14, 2026</p>
                <h2>Good Morning, {userName}! 👋</h2>
                <p>✨ Your consistency is building something extraordinary! ✨</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {[
                { icon: <TrendingUp size={20} color="#16a34a"/>, val: '67%', label: 'Completion Rate', bg: '#f0fdf4' },
                { icon: <Award size={20} color="#ca8a04"/>, val: '12', label: 'Total Badges', bg: '#fefce8' },
                { icon: <Briefcase size={20} color="#7c3aed"/>, val: '5', label: 'Interviews Done', bg: '#f5f3ff' },
                { icon: <PieChart size={20} color="#0284c7"/>, val: '4.8/5', label: 'Avg Rating', bg: '#f0f9ff' },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-icon-wrap" style={{background: s.bg}}>{s.icon}</div>
                  <div className="stat-val">{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="dash-grid">
              <div className="dash-card">
                <h3>Recent Activities</h3>
                <div className="activity-list">
                  {[
                    { title: 'Applied for Machine Learning Intern', time: '2 hours ago', icon: '📝' },
                    { title: 'Completed React Assessment', time: 'Yesterday', icon: '✅' },
                    { title: 'Updated Profile Bio', time: '2 days ago', icon: '👤' },
                  ].map((a, i) => (
                    <div key={i} className="activity-item">
                      <span className="activity-icon">{a.icon}</span>
                      <div className="activity-info">
                        <h4>{a.title}</h4>
                        <p>{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dash-card">
                <h3><TrendingUp size={18}/> Mock Interviews</h3>
                <div className="stat-val" style={{fontSize:'32px'}}>5</div>
                <p className="stat-label">Total Completed</p>
                <button className="btn btn-green btn-sm" style={{marginTop:'20px', width:'100%'}} onClick={() => setActiveTab('Mock Interview')}>
                  Start New Practice
                </button>
              </div>
            </div>
          </>
        );
      case 'Profile':
        return (
          <div className="profile-settings">
            <div className="dash-card">
              <div className="profile-header-edit">
                <div className="profile-avatar-edit">
                  <img src={profilePic} alt="Profile" />
                  <label htmlFor="pic-upload" className="avatar-edit-btn">
                    <Camera size={16}/>
                    <input type="file" id="pic-upload" hidden accept="image/*" onChange={handlePicChange} />
                  </label>
                </div>
                <div className="profile-info-edit">
                  <h2>{userName}</h2>
                  <p>Full Stack Developer | AI Enthusiast</p>
                  <div className="profile-badges-mini">
                    <span className="badge-pill">Professional</span>
                    <span className="badge-pill">Verified</span>
                  </div>
                </div>
              </div>

              <div className="settings-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" value={userData?.name || ''} 
                      onChange={e => setUserData({...userData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" value={userData?.email || ''} disabled />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+92 3xx xxxxxxx" value={userData?.phone || ''}
                      onChange={e => setUserData({...userData, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Current Domain</label>
                    <input type="text" value={userData?.domain || ''} disabled />
                  </div>
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea placeholder="Tell us about yourself..." rows={4} value={userData?.bio || ''}
                    onChange={e => setUserData({...userData, bio: e.target.value})}></textarea>
                </div>
                <div className="form-actions">
                  <button className="btn btn-green" onClick={handleProfileUpdate}>Save Changes</button>
                  <button className="btn btn-outline" onClick={() => window.location.reload()}>Reset</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Internships':
        return (
          <div className="internship-module">
            <div className="module-header">
              <h2>My Internships</h2>
              <button className="btn btn-green btn-sm" onClick={() => navigate('/internships')}>Browse More</button>
            </div>
            <div className="internship-list">
              {[
                { title: 'Frontend Developer', company: 'TechFlow', status: 'Ongoing', progress: 45, date: 'May 1, 2026' },
                { title: 'UI/UX Designer', company: 'DesignCo', status: 'Completed', progress: 100, date: 'Apr 10, 2026' },
                { title: 'Backend Intern', company: 'Systemic', status: 'Pending', progress: 0, date: 'Pending' },
              ].map((item, i) => (
                <div key={i} className="dash-card internship-item" style={{marginBottom:'20px'}}>
                  <div className="intern-row">
                    <div className="intern-info">
                      <h3>{item.title}</h3>
                      <p>{item.company} • Joined on {item.date}</p>
                    </div>
                    <div className={`status-tag ${item.status.toLowerCase()}`}>{item.status}</div>
                  </div>
                  <div className="progress-wrap" style={{marginTop:'20px'}}>
                    <div className="progress-info">
                      <span>Course Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{width: `${item.progress}%`}}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Mock Interview':
        return (
          <div className="interview-module">
            <div className="dash-card welcome-interview" style={{background:'linear-gradient(135deg, #4f46e5, #7c3aed)', color:'#fff', marginBottom:'32px'}}>
              <div className="welcome-text">
                <h2 style={{color:'#fff'}}>Prepare for your next big break! 🚀</h2>
                <p style={{color:'rgba(255,255,255,0.8)'}}>Practice with our AI-powered mock interviewer and get real-time feedback.</p>
                <button className="btn btn-white" style={{marginTop:'20px'}}>Start Interview Session</button>
              </div>
            </div>
            <div className="dash-grid">
              <div className="dash-card">
                <h3>Interview History</h3>
                <div className="history-list">
                  {[
                    { role: 'Frontend Engineer', date: 'May 12', score: '8.5/10' },
                    { role: 'Python Developer', date: 'May 08', score: '7.2/10' },
                  ].map((h, i) => (
                    <div key={i} className="history-item" style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>
                      <div>
                        <div style={{fontWeight:600}}>{h.role}</div>
                        <div style={{fontSize:'12px', color:'var(--muted)'}}>{h.date}</div>
                      </div>
                      <div className="score-pill">{h.score}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dash-card">
                <h3>Interview Tips</h3>
                <ul style={{fontSize:'14px', color:'var(--muted)', paddingLeft:'16px', lineHeight:'1.8'}}>
                  <li>Master your self-introduction.</li>
                  <li>Research the company culture.</li>
                  <li>Practice STAR method for behaviors.</li>
                  <li>Be ready with technical examples.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'Job Portal':
        return (
          <div className="job-portal-module">
            <div className="module-header" style={{display:'flex', justifyContent:'space-between', marginBottom:'32px'}}>
              <h2>Explore Opportunities</h2>
              <div className="search-box-mini">
                <Search size={16}/>
                <input type="text" placeholder="Search jobs..." />
              </div>
            </div>
            <div className="job-grid" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'24px'}}>
              {[
                { title: 'Software Engineer', type: 'Full-time', loc: 'Remote', salary: '$5k - $8k' },
                { title: 'Marketing Executive', type: 'Part-time', loc: 'Lahore', salary: '50k - 80k PKR' },
                { title: 'Graphic Designer', type: 'Contract', loc: 'Karachi', salary: '40k - 60k PKR' },
                { title: 'Data Analyst', type: 'Full-time', loc: 'Islamabad', salary: '90k - 120k PKR' },
              ].map((j, i) => (
                <div key={i} className="dash-card job-item-dash">
                  <div style={{fontWeight:700, fontSize:'16px', marginBottom:'4px'}}>{j.title}</div>
                  <div style={{fontSize:'13px', color:'var(--muted)', marginBottom:'12px'}}>{j.loc} • {j.type}</div>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span style={{color:'var(--green)', fontWeight:600}}>{j.salary}</span>
                    <button className="btn btn-green btn-xs">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="dash-card" style={{textAlign:'center', padding:'80px 20px'}}>
            <div style={{fontSize:'48px', marginBottom:'20px'}}>🚀</div>
            <h2>{activeTab} Module</h2>
            <p style={{color:'var(--muted)'}}>This module is currently being finalized. Check back soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="dash-sidebar-logo" onClick={() => navigate('/')} style={{cursor:'pointer'}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:'20px'}}>
            <span style={{color:'var(--dark)'}}>Intern</span>
            <span style={{color:'var(--green)'}}>Pro</span>
          </div>
        </div>
        <nav className="dash-nav">
          <div className={`dash-nav-item ${activeTab === 'Overview' ? 'active' : ''}`} onClick={() => setActiveTab('Overview')}>
            <TrendingUp size={18}/> Overview
          </div>
          <div className={`dash-nav-item ${activeTab === 'Profile' ? 'active' : ''}`} onClick={() => setActiveTab('Profile')}>
            <User size={18}/> Profile Settings
          </div>
          <div className="dash-nav-sep">Main Menu</div>
          <div className={`dash-nav-item ${activeTab === 'Internships' ? 'active' : ''}`} onClick={() => setActiveTab('Internships')}>
            <Briefcase size={18}/> My Internships
          </div>
          <div className={`dash-nav-item ${activeTab === 'Mock Interview' ? 'active' : ''}`} onClick={() => setActiveTab('Mock Interview')}>
            <Laptop size={18}/> Mock Interview
          </div>
          <div className={`dash-nav-item ${activeTab === 'Job Portal' ? 'active' : ''}`} onClick={() => setActiveTab('Job Portal')}>
            <Briefcase size={18}/> Job Portal
          </div>
          <div className={`dash-nav-item ${activeTab === 'Course LMS' ? 'active' : ''}`} onClick={() => setActiveTab('Course LMS')}>
            <GraduationCap size={18}/> Course LMS
          </div>
        </nav>
        <div className="dash-sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18}/> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="dash-main">
        <header className="dash-header">
          <div className="dash-breadcrumb">Dashboard / {activeTab}</div>
          <div className="dash-header-right">
            <div className="dash-user">
              <span>Hi, {userName?.split(' ')[0] || 'User'}</span>
              <div className="dash-icon-btn"><Bell size={18}/> <span className="dash-notif-dot"/></div>
              <img src={userData?.profilePic || profilePic} alt="Profile" className="dash-avatar" onClick={() => setActiveTab('Profile')} style={{cursor:'pointer'}} />
            </div>
          </div>
        </header>

        <div className="dash-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
