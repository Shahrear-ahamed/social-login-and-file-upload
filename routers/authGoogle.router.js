const router = require("express").Router();
const passport = require("passport");
require("../config/authGoogleConfig");

// first user click for google login or signup
// example.com/api/v1/auth/google || http://localhost:3001/api/v1/auth/google

router.route("/").get(passport.authenticate("google", { scope: ["profile"] }));

// after successful login or signup this route will be hit and work this
// example.com/api/v1/auth/google/redirect
router.route("/redirect").get();

// this two method are will be get methods and this are convention

module.exports = router;
