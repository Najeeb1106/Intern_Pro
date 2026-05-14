import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 5%',
    }}>
      <div style={{fontSize:'80px',marginBottom:'24px'}}>🔍</div>
      <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'48px',fontWeight:800,color:'var(--dark)',marginBottom:'14px'}}>
        404
      </h1>
      <h2 style={{fontSize:'24px',fontWeight:700,color:'var(--mid)',marginBottom:'14px'}}>Page Not Found</h2>
      <p style={{fontSize:'16px',color:'var(--muted)',marginBottom:'32px',maxWidth:'400px',lineHeight:1.7}}>
        Oops! The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <button className="btn btn-green btn-lg" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </div>
  );
}
