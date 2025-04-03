import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`Thank you, ${name}! We will get back to you soon.`);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 5 seconds
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please fill out the form below:</p>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

