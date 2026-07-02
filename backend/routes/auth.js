import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route Working ✅");
});

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  res.json({
    message: "User Registered Successfully ✅",
  });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.json({
      message: "Login Successful ✅",
    });
  } else {
    res.json({
      message: "Invalid Email or Password ❌",
    });
  }
});

export default router;