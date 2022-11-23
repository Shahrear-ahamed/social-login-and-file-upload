const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const gStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http:localhost:5000/api/v1/auth/google",
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log(accessToken, refreshToken, profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
);

passport.use(gStrategy);
