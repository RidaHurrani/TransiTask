require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("./auth"); 

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("http://localhost:3000/dashboard"); 
});

app.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out.");
    }
    res.redirect("http://localhost:3000/"); 
  });
});

app.get("/auth/user", (req, res) => {
  res.send(req.user || null);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});