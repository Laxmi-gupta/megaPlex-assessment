import express from "express";
import Content from "../models/Content.js";

const router = express.Router();


// GET ALL CONTENT
router.get("/", async (req, res) => {
  try {
    const all = await Content.find({});
    const result = {};

    all.forEach((doc) => {
      result[doc.section] = doc.data;
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET SINGLE SECTION
router.get("/:section", async (req, res) => {
  try {
    const doc = await Content.findOne({ section: req.params.section });
    if (!doc) return res.json({});
    res.json(doc.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// UPDATE SECTION (NO AUTH)
router.put("/:section", async (req, res) => {
  try {
    const doc = await Content.findOneAndUpdate(
      { section: req.params.section },
      { data: req.body },
      { new: true, upsert: true }
    );
    res.json({ message: "Saved", data: doc.data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;