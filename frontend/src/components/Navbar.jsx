import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container nav-wrapper">
        <img src="/logo.png" className="logo"/>

        <div className="nav-links">
          <a>Home</a>
          <a>Overview</a>
          <a>Connectivities</a>
          <a>Amenities</a>
          <a>Floor Plans</a>
          <a>Developer</a>
          <a>Contact</a>
        </div>

        <button className="enquiry-btn">Enquiry Now</button>
      </div>
    </div>
  );
}