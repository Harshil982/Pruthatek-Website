const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Logo", LogoSchema);