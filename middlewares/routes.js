const authGoogleRouter = require("../routers/authGoogle.router");

module.exports = (app) => {
  app.use("/api/v1/auth/google", authGoogleRouter);
};
