import { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your inquiry has been submitted.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Our Daycare!</h1>
        <p>Where learning and fun go hand in hand.</p>
        <button>Learn More</button>
      </div>
      <div className="card">
        <h2>Why Choose Us?</h2>
        <p>We nurture young minds with love, creativity, and care. Join our community of happy children and dedicated staff!</p>
      </div>
      <div className="inquiry-form">
        <h2>Have Questions? Inquire Now!</h2>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;

