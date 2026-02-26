import express from "express";

const router = express.Router();

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

export default router;