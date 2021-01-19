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
    items.merchant = id;
    req.body.images = req.customUrl;
    // user.shop_items.push(req.body);
    await user.save();
    await user.populate("shop_items").execPopulate();
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
    amount: "20",
    currency: "USD",
    redirect_url: "https://jumgamarzz.herokuapp.com/payment_done",
    payment_options: "card",
    meta: {
      consumer_id: user._id,
    },
    customer: {
      email: user.email,
      phonenumber: user.phone_number,
      name: user.fullname,
    },
    customizations: {
      title: "Jumga",
      description: "Shop Fee",
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
    console.log(user.buisness_name, user.country);
    if (response === "success") {
      const data = {
        account_bank: user.bank_code,
        account_number: user.account_number,
        business_name: user.business_name,
        business_email: user.email,
        business_contact: "Anonymous",
        business_contact_mobile: user.phone_number,
        business_mobile: user.phone_number,
        country: user.country,
        split_type: "percentage",
        split_value: 0.95,
      };
      const request = await axios.post("/subaccounts", data);
      const response = await request.data;
      user.subaccount_id = response.data.subaccount_id;
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

router.post("/checkout", auth, async (req, res) => {
  const data = {
    public_key: "YOUR_PUBLIC_KEY",
    tx_ref: "hooli-tx-new-test",
    amount: 54600,
    currency: "NGN",
    payment_options: "card,ussd,qr,barter",
    customer: {
      email: "user@gmail.com",
      phonenumber: "08102909304",
      name: "Yemi Desola",
    },
    subaccounts: [
      {
        id: merchatID,
        transaction_split_ratio: 0.95,
        transaction_charge_type: "percentage",

        transaction_charge: 0.025,
      },
      {
        id: "RS_CF5B2A15E2CCD39F44E7774376EAE5C5",
        transaction_split_ratio: 0.05,
        transaction_charge_type: "percentage",

        transaction_charge: 0.2,
      },
    ],
    callback: function (data) {
      console.log(data);
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  };
});

router.get("/get_image/:path/:second/:name", async (req, res) => {
  console.log("image");
  const { path: seel, second, name } = req.params;
  res.sendFile(path.join(__dirname, "../" + seel + "/" + second + "/" + name));
});

module.exports = router;
