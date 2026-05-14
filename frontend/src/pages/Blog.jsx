import React from 'react';
import '../styles/pages/Blog.css';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 High-Paying Remote Internships in 2024',
    category: 'Career Advice',
    date: 'May 12, 2024',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Discover the most lucrative remote internship opportunities available this year and how to land them.'
  },
  {
    id: 2,
    title: 'How to Build a Portfolio that Stands Out',
    category: 'Design',
    date: 'May 08, 2024',
    author: 'Alex Chen',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    excerpt: 'A comprehensive guide on creating a design portfolio that captures the attention of top tech companies.'
  },
  {
    id: 3,
    title: 'Navigating the World of AI Internships',
    category: 'Technology',
    date: 'May 05, 2024',
    author: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Artificial intelligence is booming. Here is what you need to know about starting your career in AI.'
  },
  {
    id: 4,
    title: 'Mastering the Coding Interview',
    category: 'Engineering',
    date: 'May 01, 2024',
    author: 'David Wilson',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Key strategies and common pitfalls to avoid when preparing for your next technical interview.'
  }
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-header">
        <div className="container">
          <div className="header-content animate-fade-up">
            <h1 className="section-title">Knowledge <span className="text-green">Hub</span></h1>
            <p className="section-sub">Insights, guides, and stories to help you navigate your career journey.</p>
            
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input type="text" placeholder="Search for articles, guides..." />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="blog-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><User size={14} /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="page-dots">...</span>
            <button className="page-btn">12</button>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-text">
              <h2>Subscribe to our newsletter</h2>
              <p>Get the latest internship alerts and career tips delivered to your inbox every week.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-green">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
