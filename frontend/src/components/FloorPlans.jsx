import { useState } from "react";
import "../styles/floorplan.css";

const wings = ["East Wing", "West Wing", "North Wing", "South Wing"];

const plans = {
  "1 bhk": {
    type: "1Bhk",
    area: "380–411 RCA Sq.ft",
    price: "Click for price",
    image: "/room.png"
  },
  "2 bhk": {
    type: "2Bhk",
    area: "620–680 RCA Sq.ft",
    price: "Click for price",
    image: "/room.png"
  },
  "5.6 bhk": {
    type: "5.6Bhk",
    area: "1200–1350 RCA Sq.ft",
    price: "Click for price",
    image: "/room.png"
  },
};

export default function FloorPlans() {
  const [activeWing, setActiveWing] = useState("East Wing");
  const [activePlan, setActivePlan] = useState("1 bhk");

  const plan = plans[activePlan];

  return (
    <>
      {/* ── FLOOR PLANS SECTION ── */}
      <div className="fp-section">
        {/* Wing tabs */}
        <div className="fp-wing-tabs">
          {wings.map((w) => (
            <button
              key={w}
              className={`fp-wing-tab ${activeWing === w ? "active" : ""}`}
              onClick={() => setActiveWing(w)}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Main content card */}
        <div className="fp-layout">
          <div className="fp-image-wrap">
            <img src={plan.image} alt="Floor Plan" className="fp-main-img" />
          </div>

          {/* White card - tabs + details on the right */}
          <div className="fp-card">
            <div className="fp-type-tabs">
              {Object.keys(plans).map((key) => (
                <button
                  key={key}
                  className={`fp-type-btn ${activePlan === key ? "active" : ""}`}
                  onClick={() => setActivePlan(key)}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="fp-info">
              <p>Type- {plan.type}</p>
              <p>Area- {plan.area}</p>
              <p>Price - {plan.price}</p>
            </div>

            <a href="/floorplan.pdf" className="fp-download-btn" download>
              Download Floor Plan
            </a>
          </div>
        
        </div>
      </div>

      {/* ── VIDEO SECTION ── */}
      <div className="video-section">
        <img src="/cityview.png" alt="City view" className="video-bg" />
        <div className="video-overlay">
          <button className="play-btn" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
              <polygon points="10,8 17,12 10,16" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}