const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  };
};

async function handleRegister(req, res) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function handleLogin(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, getCookieOptions());
    res.status(200).json({
      message: "Login successful",
      userId: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function HandleLogout(_, res) {
  try {
    res.clearCookie("token", getCookieOptions());
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ error: "Failed to logout" });
  }
}

async function getUserProfile (req,res) {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error : err.message });
  }
}

module.exports = {
  handleRegister,
  handleLogin,
  HandleLogout,
  getUserProfile
};
