var express = require("express");
const User = require("../model/userModel");
const path = require("path");
var router = express.Router();

const upit = require("../upload");

router.post("/user", async (req, res) => {
  try {
    let user = new User(req.body);

    await user.save();

    let token = await User.tokenGen();
    let blab = "locolastic";
    console.log(user.position);
    if (user.position === "ceo") {
      return res.status(200).send({ user, token, blab });
    }

    return res.status(201).send({ user, token, blab });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.loginVal(req.body.email, req.body.password);

    const token = await User.tokenGen();
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

router.post("/add_user", async (req, res) => {});

module.exports = router;
