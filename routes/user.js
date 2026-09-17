const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { route } = require("./listing.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersControllers = require("../controllers/users.js");

//render signup && signup
router
  .route("/signup")
  .get(usersControllers.renderSignupForm)
  .post(wrapAsync(usersControllers.signup));

//loginrender && login
router
  .route("/login")
  .get(usersControllers.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usersControllers.login,
  );

router.get("/logout", usersControllers.logout);

module.exports = router;
