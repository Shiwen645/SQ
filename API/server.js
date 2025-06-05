const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const filesRouter = require("./routes/files");

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 路由
app.use("/api/files", filesRouter);

// 启动服务器
connectDB();
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});