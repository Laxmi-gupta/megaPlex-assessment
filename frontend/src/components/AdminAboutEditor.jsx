import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin.css";

export default function AdminAboutEditor() {
  const [data, setData] = useState({});
  const URL = import.meta.env.VITE_BACKEND;
  useEffect(() => {
    axios
      .get(`${URL}/api/content/about`)
      .then(res => setData(res.data || {}));
  }, []);

  const handleChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    await axios.put(
      `${URL}/api/content/about`,
      data
    );
    alert("About Updated");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Edit About Section</h2>

      <input
        value={data.title || ""}
        onChange={e => handleChange("title", e.target.value)}
        placeholder="Title" className="admin-input"
      />

      <textarea
        value={data.para1 || ""}
        onChange={e => handleChange("para1", e.target.value)}
        className="admin-input"
      />

      <textarea
        value={data.para2 || ""}
        onChange={e => handleChange("para2", e.target.value)} className="admin-input"
      />

      <input
        value={data.btnText || ""}
        onChange={e => handleChange("btnText", e.target.value)} className="admin-input"
      />

      <button onClick={handleSave} className="admin-save-btn">Save</button>
    </div>
  );
}