import { useState } from "react";
import "../styles/amenities.css";

const amenities = [
  { icon: "🏋️", label: "Gymnasium" },
  { icon: "🛝", label: "Kids Play Area" },
  { icon: "🎠", label: "Kids Play Area" },
  { icon: "🏃", label: "Jogging Track" },
  { icon: "🧘", label: "Yoga Deck" },
  { icon: "🧘‍♀️", label: "Yoga Deck" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🌳", label: "Landscaped Garden" },
  { icon: "🎮", label: "Indoor Games" },
];

const buildings = [
  { name: "Vighnaharta Aaradhya", tag: null, img: "/bldg2.png" },
  { name: "Vignaharta Enclave", tag: "Newly Launched", img: "/bldg2.png" },
  { name: "Vignaharta Enclave", tag: "Newly Launched", img: "/bldg2.png" },
  { name: "Vighnaharta Heights", tag: null, img: "/bldg2.png" },
  { name: "Vighnaharta Residency", tag: "Coming Soon", img: "/bldg2.png" },
];

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const [current, setCurrent] = useState(1); // center card active

  const visible = showAll ? amenities : amenities.slice(0, 6);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(buildings.length - 1, c + 1));

  return (
    <>
      {/* ── AMENITIES ── */}
      <section className="amenities-section">
        <div className="header">
          <h2 className="amenities-title">Amenities</h2>
          <p className="amenities-sub">
            Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.
          </p>
        </div>
        <div className="amenities-inner">
          {/* Left: image */}
          <div className="amenities-img">
            <img src="/amenities.png" alt="Amenities aerial view" />
          </div>

          {/* Right: grid */}
          <div className="amenities-content">
            
            <div className="amenities-grid">
              {visible.map((a, i) => (
                <div className="amenity-card" key={i}>
                  <div className="amenity-icon">{a.icon}</div>
                  <span className="amenity-label">{a.label}</span>
                </div>
              ))}
            </div>

            {!showAll && (
              <button className="btn-viewmore" onClick={() => setShowAll(true)}>
                View more
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── EXPLORE BUILDINGS ── */}
      <section className="township-section">
        <h2 className="township-title">Explore More Buildings in the Township</h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={prev}>&#8249;</button>

          <div className="carousel-track">
            {buildings.map((b, i) => {
              const offset = i - current;
              let cls = "carousel-card";
              if (offset === 0) cls += " active";
              else if (Math.abs(offset) === 1) cls += " side";
              else cls += " far";

              return (
                <div
                  className={cls}
                  key={i}
                  style={{ "--offset": offset }}
                  onClick={() => setCurrent(i)}
                >
                  <img src={b.img} alt={b.name} />
                  <div className="carousel-label">
                    {b.tag && <span className="carousel-tag">{b.tag} – </span>}
                    {b.name}
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-arrow right" onClick={next}>&#8250;</button>
        </div>
      </section>
    </>
  );
}