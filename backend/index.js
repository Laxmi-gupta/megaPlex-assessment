import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import authRoutes from "./routes/auth.js";
import contentRoutes from "./routes/content.js"

const app = express();

// ── Middleware ──
app.use(express.json());
app.use(cors({
  origin: "https://megaplex-assessment.vercel.app/" || process.env.FRONTEND_URL,
  credentials: true,
}));

// ── Connect DB & Start ──
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB error:", err));

// // ── Routes ──
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

app.get("/", (req, res) => res.json({ message: "Root route" }));

