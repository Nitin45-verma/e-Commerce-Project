import React from 'react';

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Fill out the form below or reach us at hello@verve.com.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
