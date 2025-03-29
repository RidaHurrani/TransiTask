require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("./auth"); // Import auth setup

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(session({ secret: "your_secret_key", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Authentication Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("http://localhost:3000/dashboard"); // Redirect after successful login
});

app.get("/auth/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:3000/");
  });
});

// User info route
app.get("/auth/user", (req, res) => {
  res.send(req.user || null);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});