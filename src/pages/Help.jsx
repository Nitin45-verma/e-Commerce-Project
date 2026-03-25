import React from 'react';

const Help = () => {
  return (
    <div className="page-container help-page">
      <h1>Help & Support</h1>
      <div className="faq-section">
        <div className="faq-item">
          <h3>How long does shipping take?</h3>
          <p>Standard shipping takes 3-5 business days. Express shipping is available at checkout.</p>
        </div>
        <div className="faq-item">
          <h3>What is your return policy?</h3>
          <p>We offer a 30-day money-back guarantee. Items must be in their original condition.</p>
        </div>
        <div className="faq-item">
          <h3>Do you ship internationally?</h3>
          <p>Yes, we ship to over 50 countries worldwide. Shipping costs will apply and will be added at checkout.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
