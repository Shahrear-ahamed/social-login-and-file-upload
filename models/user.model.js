const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 150,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateToken = function () {
  const jwtToken = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );
  return jwtToken;
};

const users = model("User", userSchema);

module.exports = users;
