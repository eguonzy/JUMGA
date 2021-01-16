var express = require("express");
const User = require("../model/userModel");
const path = require("path");
const axios = require("axios").default;
var router = express.Router();

const upit = require("../upload");

router.post("/user", async (req, res) => {
  console.log(req.body);
  try {
    let user = new User(req.body);
    await user.save();
    let token = await user.tokenGen();
    let blab = "locolastic";
    return res.status(200).send({ user, token, blab });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.loginVal(req.body.email, req.body.password);

    const token = await user.tokenGen();
    let blab = "locolastic";

    if (user.position === "ceo") {
      return res.status(200).send({ user, token, blab });
    } else {
      return res.status(201).send({ user, token, blab });
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e.toString());
  }
});

router.post("/add_image", upit.array("images"), async (req, res) => {
  console.log(req.customUrl, "this and that");
  try {
    req.customUrl.forEach((element) => {
      console.log(path.join(__dirname, `..${element.url}`));
    });
    res.send({ book: "keeper" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/banklist/:country", async (req, res) => {
  console.log(req.params);
  try {
    const request = await axios({
      method: "GET",
      url: "https://api.flutterwave.com/v3/banks/" + req.params.country,
      headers: { Authorization: "Bearer " + process.env.secreteKey },
    });
    const response = await request.data;
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});
router.post("/add_user", async (req, res) => {});

module.exports = router;
