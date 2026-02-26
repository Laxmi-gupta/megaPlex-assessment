import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin.css";

export default function AdminFloorplanEditor() {
  const [data, setData] = useState({});
  const URL = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    axios
      .get(`${URL}/api/content/floorplans`)
      .then(res => setData(res.data || {}));
  }, []);

  const handleChange = (bhk, field, value) => {
    setData(prev => ({
      ...prev,
      [bhk]: {
        ...prev[bhk],
        [field]: value
      }
    }));
  };

  const handleSave = async () => {
    await axios.put(
        `${URL}/api/content/floorplans`,
      data
    );
    alert("Floorplans updated!");
  };

  return (
    <div>
      <h2>Edit Floorplans</h2>

      {Object.entries(data).map(([bhk, plan]) => (
        <div key={bhk}>
          <h3>{bhk}</h3>

          <input
            value={plan.type}
            onChange={e => handleChange(bhk, "type", e.target.value)}
            className="admin-input"
          />

          <input
            value={plan.area}
            onChange={e => handleChange(bhk, "area", e.target.value)}
            className="admin-input"
          />

          <input
            value={plan.price}
            onChange={e => handleChange(bhk, "price", e.target.value)}
            className="admin-input"
          />
        </div>
      ))}

      <button onClick={handleSave} className="admin-save-btn">Save</button>
    </div>
  );
}