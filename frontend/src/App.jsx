import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Internships from './pages/Internships';
import About from './pages/About';
import Contact from './pages/Contact';
import GraduateProgram from './pages/GraduateProgram';
import StudentAmbassador from './pages/StudentAmbassador';
import StartupJourney from './pages/StartupJourney';
import Blog from './pages/Blog';
import Webinars from './pages/Webinars';
import MockInterviews from './pages/MockInterviews';
import ResumeBuilder from './pages/ResumeBuilder';
import CareerCoach from './pages/CareerCoach';
import JobPortal from './pages/JobPortal';
import { PrivacyPolicy, TermsOfService, TeachWithUs } from './pages/InfoPages';
import { SignIn, SignUp } from './pages/Auth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Simple placeholder for pages not yet implemented
function ComingSoon({ title }) {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 5%'
    }}>
      <div style={{fontSize:'56px',marginBottom:'20px'}}>🚧</div>
      <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'32px',fontWeight:800,color:'var(--dark)',marginBottom:'12px'}}>{title}</h2>
      <p style={{fontSize:'16px',color:'var(--muted)'}}>This page is coming soon. Check back shortly!</p>
    </div>
  );
}

function Layout({ children, hideFooter }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!hideFooter && <Footer />}
      <Chatbot />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Auth routes — no navbar/footer */}
        <Route path="/signin" element={<><SignIn/><Chatbot/></>} />
        <Route path="/signup" element={<><SignUp/><Chatbot/></>} />
        <Route path="/dashboard" element={<><Dashboard/><Chatbot/></>} />

        {/* Main routes with layout */}
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/internships" element={<Layout><Internships/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/graduate-program" element={<Layout><GraduateProgram/></Layout>} />
        <Route path="/student-ambassador" element={<Layout><StudentAmbassador/></Layout>} />
        <Route path="/startup-journey" element={<Layout><StartupJourney/></Layout>} />
        <Route path="/blog" element={<Layout><Blog/></Layout>} />
        <Route path="/webinars" element={<Layout><Webinars/></Layout>} />
        <Route path="/mock-interviews" element={<Layout><MockInterviews/></Layout>} />
        <Route path="/resume-builder" element={<Layout><ResumeBuilder/></Layout>} />
        <Route path="/career-coach" element={<Layout><CareerCoach/></Layout>} />
        <Route path="/job-portal" element={<Layout><JobPortal/></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy/></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfService/></Layout>} />
        <Route path="/teach" element={<Layout><TeachWithUs/></Layout>} />

        {/* 404 */}
        <Route path="*" element={<Layout><NotFound/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
