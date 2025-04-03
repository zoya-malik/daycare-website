import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/enrollment">Enrollment</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;

