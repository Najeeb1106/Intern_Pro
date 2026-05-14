import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import '../styles/components/Chatbot.css';

const SYSTEM = `You are a friendly and helpful virtual internship support assistant for InternPro.pk, Pakistan's leading virtual internship platform.
Help interns with: applying for internships, understanding tasks/deadlines, learning paths, certificates, and career advice.
Keep responses concise (2-4 sentences), friendly, and practical.`;

const QUICK = [
  'How do I apply for an internship?',
  'What tracks are available?',
  'How do I submit my task?',
  'How do I get my certificate?',
];

function randomBotReply(msg) {
  const m = msg.toLowerCase();
  if (m.includes('apply') || m.includes('internship')) {
    return "To apply for an internship, click 'Get Started' on our homepage, choose your preferred tech track, and fill out the short application form. You'll receive a confirmation within 24 hours. No prior experience needed! 🚀";
  } else if (m.includes('track') || m.includes('domain')) {
    return "We offer 10+ tracks including Machine Learning, Web Development, Mobile Apps, UI/UX Design, Data Science, Cloud & DevOps, Cybersecurity, and Digital Marketing. Each track is 4–8 weeks long with real project experience.";
  } else if (m.includes('submit') || m.includes('task')) {
    return "You can submit your tasks via the Task Portal in your dashboard. Click 'Start Submission' next to your assigned task, upload your work (GitHub link or file), and click Submit. Your mentor will review it within 48 hours.";
  } else if (m.includes('certificate') || m.includes('cert')) {
    return "Certificates are issued automatically once you complete all tasks with a passing score (≥70%). You can download a verified digital certificate and share it directly on LinkedIn from your profile dashboard!";
  } else {
    return "Great question! For detailed help, please check your intern dashboard or reach out to your assigned mentor. You can also email us at support@internpro.pk. We're here to help you succeed! 💪";
  }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '👋 Hi! I\'m your InternPro.pk support assistant.\n\nAsk me anything about internships, tasks, submissions, learning paths, or your career! 🚀' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);

  const send = (msg) => {
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setShowQuick(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: randomBotReply(msg) }]);
    }, 1200);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); }
  };

  return (
    <>
      {/* Toggle Button */}
      <button className={`chat-toggle ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)} aria-label="Open chat">
        {open ? <X size={22}/> : <MessageCircle size={22}/>}
        {!open && <span className="chat-badge">AI</span>}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-avatar">🤖</div>
            <div>
              <h4>InternPro Assistant</h4>
              <p>Powered by AI · Online</p>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>
              <X size={18}/>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.text.split('\n').map((line, li) => (
                  <span key={li}>{line}{li < m.text.split('\n').length - 1 && <br/>}</span>
                ))}
              </div>
            ))}
            {typing && (
              <div className="msg bot">
                <span className="typing-dot"/><span className="typing-dot"/><span className="typing-dot"/>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {showQuick && (
            <div className="chat-quick">
              {QUICK.map(q => (
                <button key={q} className="quick-btn" onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chat-input-row">
            <textarea
              rows={2}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your message..."
            />
            <button className="send-btn" onClick={() => send(input)}>
              <Send size={16}/>
            </button>
          </div>
          <div className="chat-powered">Powered by InternPro AI Assistant</div>
        </div>
      )}
    </>
  );
}
