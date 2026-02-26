import "../styles/hero.css";
// import building from "../assets/building.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <img src="/building.png" alt="building" className="bldg"/>
        </div>

        <div className="hero-right">
          <div className="brand">
            <img src="/logo2.png" alt="Vighnaharta Logo" className="brand-logo" />
          </div>

          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">o</span>
            <span className="divider-line"></span>
          </div>

          <div className="price-section">
            <div className="price-box">
              <h3>SMART 1 BHK</h3>
              <p className="original-price">74.99 Lacs</p>
              <p className="discounted-price">₹ 69.99 Lacs*</p>
              <span className="onwards">— onwards —</span>
            </div>

            <div className="price-divider"></div>

            <div className="price-box">
              <h3>PREMIUM 2 BHK</h3>
              <p className="original-price">1.05 CR</p>
              <p className="discounted-price">₹ 96.99 Lacs*</p>
              <span className="onwards">— onwards —</span>
            </div>
          </div>

          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">o</span>
            <span className="divider-line"></span>
          </div>

          <div className="address">
            <img src="/placeholder.png" alt="placeholder"  className="pin"/>
            <p>
              <strong>BLDG. NO. 223/224,</strong><br />
              CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST)
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
          <img src="/about.png" alt="about" className="about-images"/>

        <div className="about-content">
          <h2 className="about-title">About Project</h2>
          <p className="about-text">
            At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.
          </p>
          <p className="about-text">
            "The moment I entered the house, it felt welcomed" — this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve. It's the place your soul has long been searching for.
          </p>
          <a href="/brochure.pdf" className="btn-brochure" download>
            Download Brochure
          </a>
        </div>
      </div>
    </>
  );
}