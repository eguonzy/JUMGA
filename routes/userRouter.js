var express = require("express");
const User = require("../model/userModel");
const path = require("path");
const auth = require("../auth/auth");
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

router.get("/shop_charge", auth, async (req, res) => {
  const { user } = req;
  const requestData = {
    tx_ref: Date.now(),
    amount: "50",
    currency: "NGN",
    redirect_url: "http://localhost3000/merchant/home",
    payment_options: "card",
    meta: {
      consumer_id: user.id,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: user.email,
      phonenumber: user.phone_number,
      name: user.fullname,
    },
    customizations: {
      title: "Jumga",
      description: "Middleout isn't free. Pay the price",
    },
  };
  try {
    const request = await axios({
      method: "POST",
      url: "https://api.flutterwave.com/v3/payments",
      headers: { Authorization: "Bearer " + process.env.secreteKey },
      data: requestData,
    });
    const { data } = await request.data;
    console.log(data);
    res.send(data.link);
  } catch (error) {
    console.log(error);
  }
});
router.post("/add_user", async (req, res) => {});

module.exports = router;
