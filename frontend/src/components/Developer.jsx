import { useState } from "react";
import "../styles/developer.css";

const stats = [
  { value: "6", label: "Projects" },
  { value: "1.32 LAC", label: "sq. ft. area developed" },
  { value: "449+", label: "Happy families" },
  { value: "3.77LAC", label: "sq. ft. ongoing" },
  { value: "2.7LAC", label: "sq. ft. Area upcoming" },
];

const updates = [
  { label: "Under Construction", sublabel: "Tower A", img: "/construction.png" },
  { label: "Completed", sublabel: "Tower B", img: "/construction1.png" },
  { label: "Completed", sublabel: "Tower C", img: "/construction2.png" },
];

const faqs = [
  "What makes Swastik Group a trusted name in real estate in Vikhroli?",
  "What types of residential projects does Swastik Group offer in Vikhroli?",
  "Why should I invest in Swastik Group's new projects in Vikhroli?",
  "How does Swastik Group ensure quality and sustainability in its real estate projects?",
  "How can I learn more about upcoming residential projects by Swastik Group in Vikhroli?",
];

export default function Developer() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── ABOUT DEVELOPER ── */}
      <div className="dev-section">
        <h2 className="dev-title">About Developer</h2>
        <p className="dev-desc">
          Vighnaharta Developers is more than just a real estate company—we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living. Our foundation rests on integrity, excellence, and innovation, ensuring every project is a perfect blend of creativity, functionality, and sustainability.
        </p>

        {/* Stats bar */}
        <div className="dev-stats">
          {stats.map((s, i) => (
            <div key={i} className="dev-stat">
              <span className="dev-stat-value">{s.value}</span>
              <span className="dev-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Developer building image */}
        <div className="dev-img-wrap">
          <img src="/developer.png" alt="Developer building" className="dev-img" />
        </div>
      </div>

      {/* ── CONSTRUCTION UPDATES ── */}
      <div className="const-section">
        <h2 className="const-title">Construction Updates</h2>

        <div className="const-grid">
          {updates.map((u, i) => (
            <div key={i} className="const-card">
              <img src={u.img} alt={u.sublabel} />
              <div className="const-card-overlay">
                <p className="const-card-status">{u.label}</p>
                <p className="const-card-sub">{u.sublabel}</p>
                <a href="#" className="const-know-more">Know More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((q, i) => (
            <div
              key={i}
              className={`faq-item ${openFaq === i ? "open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="faq-row">
                <span className="faq-q">{q}</span>
                <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
              </div>
              {openFaq === i && (
                <p className="faq-answer">
                  We are committed to delivering high-quality homes with transparency, timely delivery, and superior construction standards that stand the test of time.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}