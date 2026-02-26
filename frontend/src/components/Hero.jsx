import axios from "axios";
import "../styles/hero.css";
import { useState, useEffect } from "react";

export default function Hero() {
   const [heroData, setHeroData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const URL = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroRes = await axios.get(`${URL}/api/content/hero`);
        const aboutRes = await axios.get(`${URL}/api/content/about`);

        setHeroData(heroRes.data || {});
        setAboutData(aboutRes.data || {});
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
              <h3>{heroData.smartBhkTitle}</h3>
              <p className="original-price">{heroData.smartBhkOldPrice}</p>
              <p className="discounted-price">{heroData.smartBhkPrice}</p>
              <span className="onwards">— onwards —</span>
            </div>

            <div className="price-divider"></div>

            <div className="price-box">
               <h3>{heroData.premiumBhkTitle}</h3>
              <p className="original-price">{heroData.premiumBhkOldPrice}</p>
              <p className="discounted-price">{heroData.premiumBhkPrice}</p>
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
              <strong>{heroData.address}</strong><br />
            </p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
          <img src="/about.png" alt="about" className="about-images"/>

        <div className="about-content">
          <h2 className="about-title">{aboutData.title}</h2>

          <p className="about-text">{aboutData.para1}</p>
          <p className="about-text">{aboutData.para2}</p>

          <a href="/brochure.pdf" className="btn-brochure" download>
            {aboutData.btnText}
          </a>
        </div>
      </div>
    </>
  );
}