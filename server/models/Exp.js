const mongoose = require("mongoose");

const ExpSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      max: 500,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exp", ExpSchema);
