import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: 220,
          background: "#1a5c35",
          color: "white",
          padding: 20
        }}
      >
        <h3>Admin Panel</h3>

        <p><Link to="/admin/hero" style={link}>Hero</Link></p>
        <p><Link to="/admin/about" style={link}>About</Link></p>
        <p><Link to="/admin/floorplan" style={link}>Floorplans</Link></p>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: 40 }}>
        {children}
      </div>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none"
};