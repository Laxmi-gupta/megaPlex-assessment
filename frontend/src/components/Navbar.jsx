import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container nav-wrapper">
        <img src="/logo.png" className="logo"/>

        <div className="nav-links">
          <Link to="/" className="links">Home</Link>
          <Link to="/" className="links">Overview</Link>
          <Link to="/amenities" className="links">Connectivities</Link>
          <Link to="/amenities" className="links">Amenities</Link>
          <Link to="/floorplan" className="links">Floor Plans</Link>
          <Link to="/developer" className="links">Developer</Link>
          <a>Contact</a>
        </div>

        <button className="enquiry-btn">Enquiry Now</button>
      </div>
    </div>
  );
}