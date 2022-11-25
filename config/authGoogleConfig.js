const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.model");

const gStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/v1/auth/google/redirect",
  },
  async (accessToken, refreshToken, profile, cb) => {
    // সেখানের মিডেলওয়ার টা এই কলব্যাক ফাংশন এ পাঠাবে, আর এখানে আমরা আমাদের ব্যাবহার কারীর ডাটা কে নিয়ে রাখতে পারব।

    const user = await User.findOne({
      googleId: profile.id,
      email: profile._json.email,
    });

    if (user) {
      const token = user.generateToken();

      const response = {
        user: {
          _id: user._id,
          email: user.email,
        },
        token,
      };
      cb(null, response);
    } else {
      const newUser = await User.create({
        googleId: profile.id,
        email: profile._json.email,
      });

      const token = newUser.generateToken();

      const response = {
        user: {
          _id: newUser._id,
          email: newUser.email,
        },
        token,
      };
      cb(null, response);
    }
  }
);

passport.use(gStrategy);
