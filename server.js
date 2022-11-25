require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/learn-passport-js", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error(err.message));

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
