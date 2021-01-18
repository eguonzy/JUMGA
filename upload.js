const multer = require("multer");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use("/images", express.static(path.join(__dirname, "images/")));
console.log("this");
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const paths = (await "images/") + req.user.buisness_name;
    const url = paths + "/" + file.originalname;
    console.log(url);
    req.customUrl = req.customUrl ? [...req.customUrl, url] : [url];
    await fs.mkdir(paths, { recursive: true }, (err) => {
      if (err) console.log(err);
    });
    console.log(req.customUrl, req.user.fullname);
    cb(null, paths);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upit = multer({ storage });
module.exports = upit;
