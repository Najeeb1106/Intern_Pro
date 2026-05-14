import React from 'react';

const SimplePage = ({ title }) => (
  <div style={{ padding: '120px 5%', minHeight: '60vh' }}>
    <h1 style={{ fontSize: '36px', marginBottom: '24px' }}>{title}</h1>
    <p style={{ color: 'var(--muted)', maxWidth: '800px', lineHeight: '1.8' }}>
      This is the {title} page for InternPro.pk. We are currently updating our legal and informational documents to provide you with the most accurate and up-to-date information. Please check back later for the full content.
    </p>
  </div>
);

export const PrivacyPolicy = () => <SimplePage title="Privacy Policy" />;
export const TermsOfService = () => <SimplePage title="Terms of Service" />;
export const TeachWithUs = () => <SimplePage title="Teach with Us" />;
