const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // eslint-disable-line no-useless-escape
      "Please enter a valid email",
    ],
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  profession: {
    type: String,
  },
  address: {
    type: String,
  },
  ratings: [
    {
      title: String,
      rating: Number,
    },
  ],
  awards: [
    {
      title: String,
      year: Number,
    },
  ],
  mentions: [
    {
      title: String,
      city: String,
    },
  ],
  about: {
    type: String,
  },
  statistics: [
    {
      socialMedia: String,
      followers: Number,
      likes: Number,
      comments: Number,
      shares: Number,
      revenue: Number,
    },
  ],
  campaigns: [
    {
      socialMedia: String,
      title: String,
      likes: Number,
      views: Number,
      comments: Number,
      revenue: {
        min: Number,
        max: Number,
      },
    },
  ],
});

// encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  // generate salt
  const salt = await bcrypt.genSalt(10);

  // hash password
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
