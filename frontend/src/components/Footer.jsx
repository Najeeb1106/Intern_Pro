import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../styles/components/Footer.css';

const SocialIcons = {
  Facebook: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Twitter: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
  Linkedin: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Youtube: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
};

const platformLinks = [
  { label: 'Internships', to: '/internships' },
  { label: 'Graduate Program', to: '/graduate-program' },
  { label: 'Student Ambassador', to: '/student-ambassador' },
  { label: 'Startup Journey', to: '/startup-journey' },
  { label: 'Job Portal', to: '/job-portal' },
];
const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Webinars', to: '/webinars' },
  { label: 'AI Mock Interviews', to: '/mock-interviews' },
  { label: 'Resume Builder', to: '/resume-builder' },
  { label: 'Career Coach', to: '/career-coach' },
  { label: 'Learning Paths', to: '/' },
];
const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Teach with Us', to: '/teach' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>Intern</span><span className="logo-green">Pro</span><span className="logo-muted">.pk</span>
          </Link>
          <p>The ultimate platform designed to turbocharge the IT sector in Pakistan. We bridge talented individuals with the thriving tech industry.</p>
          <div className="footer-contact">
            <div className="contact-row"><Phone size={14}/> +92 300 3xxxxxx</div>
            <div className="contact-row"><Mail size={14}/> hello@internpro.pk</div>
            <div className="contact-row"><MapPin size={14}/> Lahore, Pakistan</div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="social-icon"><SocialIcons.Facebook/></a>
            <a href="#" aria-label="Twitter" className="social-icon"><SocialIcons.Twitter/></a>
            <a href="#" aria-label="LinkedIn" className="social-icon"><SocialIcons.Linkedin/></a>
            <a href="#" aria-label="Instagram" className="social-icon"><SocialIcons.Instagram/></a>
            <a href="#" aria-label="YouTube" className="social-icon"><SocialIcons.Youtube/></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <ul>{platformLinks.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>{resourceLinks.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>{companyLinks.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 InternPro.pk — All rights reserved.</p>
        <p>Made with ❤️ for Pakistani students</p>
      </div>
    </footer>
  );
}
