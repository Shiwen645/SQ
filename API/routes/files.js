// routes/files.js
const express = require("express");
const File = require("../models/File");

const router = express.Router();

// 获取所有文件
router.get("/", async (req, res) => {
  try {
    const files = await File.find().populate("children"); // 查询所有数据
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 创建新文件
router.post("/", async (req, res) => {
  const file = new File({
    name: req.body.name,
    icon: req.body.icon,
    children: req.body.children || [],
  });

  try {
    const newFile = await file.save();
    res.status(201).json(newFile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;