var express = require("express");
const User = require("../model/userModel");
const Items = require("../model/itemsModel");
const path = require("path");
const auth = require("../auth/auth");
const axios = require("axios").default;
var router = express.Router();
const upit = require("../upload");
axios.defaults.baseURL = "https://api.flutterwave.com/v3";
axios.defaults.headers.post["Authorization"] = `Bearer ${process.env.TEST_KEY}`;
axios.defaults.headers.get["Authorization"] = `Bearer ${process.env.TEST_KEY}`;

router.post("/user", upit.array(), async (req, res) => {
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

router.post("/login", upit.array(), async (req, res) => {
  try {
    const user = await User.loginVal(req.body.email, req.body.password);

    const token = await user.tokenGen();
    let blab = "locolastic";

    return res.status(200).send({ user, token, blab });
  } catch (e) {
    console.log(e);
    res.status(400).send(e.toString());
  }
});

router.post("/add_item", auth, upit.array("images"), async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    const items = await new Items(req.body);
    items.images = req.customUrl;
    req.body.images = req.customUrl;
    user.shop_items.push(req.body);

    await user.save();
    res.status(200).send(user);
    await items.save();
  } catch (error) {
    console.log(error);
  }
});

router.get("/banklist/:country", async (req, res) => {
  console.log(req.params);
  try {
    const request = await axios.get("/banks/" + req.params.country);
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
    currency: "USD",
    redirect_url: "https://jumgamarzz/payment_done",
    payment_options: "card",
    meta: {
      consumer_id: user._id,
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
    const request = await await axios.post("/payments", requestData);
    const { data } = await request.data;
    console.log(data);
    res.send(data.link);
  } catch (error) {
    console.log(error);
  }
});

router.get("/payment_successful/:id", auth, async (req, res) => {
  try {
    const request = await axios.get(
      "/transactions/" + req.params.id + "/verify"
    );
    const user = await User.findById(req.user._id);
    const response = await request.data.status;
    if (response === "success") {
      user.payment_status = true;
      await user.save();
      res.send(user);
      return;
    }
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});
router.get("/get_image/:path/:second/:name", async (req, res) => {
  console.log(req.params, "image");
  const { path: seel, second, name } = req.params;
  res.sendFile(path.join(__dirname, "../" + seel + "/" + second + "/" + name));
});

module.exports = router;
