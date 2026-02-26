import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin.css";

export default function AdminHeroEditor() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const URL = import.meta.env.VITE_BACKEND;
  
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(
          `${URL}/api/content/hero`
        );
        setData(res.data || {});
      } catch (err) {
        console.log(err);
      }
    };

    fetchHero();
  }, []);

  const handleChange = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await axios.put(
          `${URL}/api/content/hero`,
        data
      );
      alert("Hero section updated!");
    } catch (err) {
      console.log(err);
      alert("Error saving");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="admin-section-title">Edit Hero Section</h2>

      <div className="admin-form-group">
      <input
        placeholder="Smart BHK Title"
        className="admin-input"
        value={data.smartBhkTitle || ""}
        onChange={e => handleChange("smartBhkTitle", e.target.value)}
      /></div>

      <div className="admin-form-group">
      <input
        placeholder="Smart Old Price"
        className="admin-input"
        value={data.smartBhkOldPrice || ""}
        onChange={e => handleChange("smartBhkOldPrice", e.target.value)}
      /></div>

      <div className="admin-form-group">
      <input
        placeholder="Smart Price"
        className="admin-input"
        value={data.smartBhkPrice || ""}
        onChange={e => handleChange("smartBhkPrice", e.target.value)}
      /></div>

      <div className="admin-form-group">
      <input
        placeholder="Premium BHK Title"
        className="admin-input"
        value={data.premiumBhkTitle || ""}
        onChange={e => handleChange("premiumBhkTitle", e.target.value)}
      /></div>


      <div className="admin-form-group">
      <input
        placeholder="Premium Old Price"
        className="admin-input"
        value={data.premiumBhkOldPrice || ""}
        onChange={e => handleChange("premiumBhkOldPrice", e.target.value)}
      /></div>

      <div className="admin-form-group">
      <input
        placeholder="Premium Price"
        className="admin-input"
        value={data.premiumBhkPrice || ""}
        onChange={e => handleChange("premiumBhkPrice", e.target.value)}
      /></div>

      <div className="admin-form-group">
      <input
        placeholder="Address"
        className="admin-input"
        value={data.address || ""}
        onChange={e => handleChange("address", e.target.value)}
      /></div>

      <br /><br />

      <button onClick={handleSave} className="admin-save-btn" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </>
  );
}