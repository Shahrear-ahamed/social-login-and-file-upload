require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/learn-passport-js", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB!"))
//   .catch((err) => console.error(err.message));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
