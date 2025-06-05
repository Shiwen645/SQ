// models/File.js
const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }], // 嵌套子项
});

module.exports = mongoose.model("File", FileSchema);