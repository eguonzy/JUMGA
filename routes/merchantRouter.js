var express = require("express");
//const app = express();

const path = require("path");
var router = express.Router();
//const multer = require("multer");
const upit = require("../upload");

//const upload = multer({ dest: "uploads/" });
router.get("/images", async (req, res) => {
  console.log(path.join(__dirname, "../public/to-do-list.svg"), "wqw");
  try {
    await res.sendFile(path.join(__dirname, "../images/777/to-do-list.svg"));
    //  res.send({ book: "keeper" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
