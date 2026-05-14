import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase } from 'lucide-react';
import '../styles/components/Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Internship', to: '/internships' },
  { label: 'Graduate Program', to: '/graduate-program' },
  { label: 'Student Ambassador', to: '/student-ambassador' },
  { label: 'Startup Journey', to: '/startup-journey' },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Blog', to: '/blog' },
      { label: 'Webinars', to: '/webinars' },
      { label: 'AI Mock Interviews', to: '/mock-interviews' },
      { label: 'Resume Builder', to: '/resume-builder' },
      { label: 'Career Coach', to: '/career-coach' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    
    // Check login status
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-intern">Intern</span>
          <span className="logo-pro">Pro</span>
          <span className="logo-pk">.pk</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="nav-dropdown-wrapper"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <button className="nav-link-btn">
                  {link.label} <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    {link.dropdown.map((item) => (
                      <NavLink key={item.to} to={item.to} className="dropdown-item"
                        onClick={() => setDropdownOpen(false)}>
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* CTA Buttons */}
        <div className="nav-cta">
          {isLoggedIn ? (
            <>
              <button className="btn btn-outline btn-sm" onClick={() => navigate('/dashboard')}>
                Dashboard
              </button>
              <button className="btn btn-green btn-sm" onClick={() => navigate('/job-portal')}>
                <Briefcase size={14} /> Job Portal
              </button>
              <div className="nav-user-profile" onClick={() => navigate('/dashboard')}>
                <img src="https://i.pravatar.cc/150?u=najeeb" alt="Profile" />
              </div>
            </>
          ) : (
            <>
              <button className="btn btn-outline btn-sm" onClick={() => navigate('/signin')}>
                Sign In
              </button>
              <button className="btn btn-green btn-sm" onClick={() => navigate('/job-portal')}>
                <Briefcase size={14} /> Job Portal
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="mobile-group">
                <span className="mobile-group-label">{link.label}</span>
                {link.dropdown.map((item) => (
                  <NavLink key={item.to} to={item.to} className="mobile-link"
                    onClick={() => setMobileOpen(false)}>
                    — {item.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} className="mobile-link"
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </NavLink>
            )
          )}
          <div className="mobile-cta">
            {isLoggedIn ? (
              <>
                <button className="btn btn-outline" onClick={() => { navigate('/dashboard'); setMobileOpen(false); }}>
                  Dashboard
                </button>
                <button className="btn btn-green" onClick={() => { navigate('/job-portal'); setMobileOpen(false); }}>
                  Job Portal
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline" onClick={() => { navigate('/signin'); setMobileOpen(false); }}>
                  Sign In
                </button>
                <button className="btn btn-green" onClick={() => { navigate('/job-portal'); setMobileOpen(false); }}>
                  Job Portal
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
