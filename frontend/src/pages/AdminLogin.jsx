import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_BACKEND;
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${URL}/api/auth/login`, {
        email,
        password
      });

      // store login for 1 hour
      localStorage.setItem("adminLoginTime", Date.now());

      navigate("/admin/hero");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Admin Login</h2>

        <form className="admin-form" onSubmit={handleLogin}>
          <input
            className="admin-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            className="admin-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="admin-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}