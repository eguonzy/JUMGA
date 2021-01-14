const multer = require("multer");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use("/images", express.static(path.join(__dirname, "images/")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdir("images/" + file.originalname, { recursive: true }, (err) => {
      if (err) console.log(err);
    });
    cb(null, "images/" + file.originalname);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});
const upit = multer({ storage });
module.exports = upit;
