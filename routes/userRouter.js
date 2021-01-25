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
    await user.populate("shop_items").execPopulate();
    console.log(user);
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

    let fullUser = await user.populate("shop_items").execPopulate();
    console.log(fullUser, "popo");
    //user.shop_items = [...user.shop_items];
    return res
      .status(200)
      .send({ user: user, token, blab, shop_items: user.shop_items });
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
    user.shop_item;
    await items.save();
    await user.save();
    await user.populate("shop_items").execPopulate();
    console.log(user.shop_items, "empty");
    res.status(200).send({ shop_items: user.shop_items });
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
        split_value: 0.05,
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
  const cart = req.body;
  const user = req.user;
  let cartItem;
  let cartTotal = 0;
  let dispatch_rider;

  const merchants = [];
  //loop through items to get the various merchants
  for (const item of cart) {
    cartTotal += parseInt(item.total);
    cartItem = await Items.findById(item.item._id); //get the item
    await cartItem.populate("merchant").execPopulate(); //get the merchant
    item.merchant = cartItem.merchant._id; //asign merchant key the merchant_id value
    dispatch_rider = {
      //get dispatch rider of merchant
      id: cartItem.merchant.dispatch_rider.subaccount_id,
      transaction_charge: 0,
      transaction_charge_type: "flat_subaccount",
    };
    !merchants.find(
      (item) => user._id.toString() === cartItem.merchant._id.toString()
    ) &&
      merchants.push({
        id: cartItem.merchant.subaccount_id,
        transaction_charge: 0,
        transaction_charge_type: "flat_subaccount",
        merchantID: cartItem.merchant._id,
      });
  }
  for (const item of merchants) {
    //loop through merchants and items to get total cost
    for (const sub of cart) {
      console.log(sub.merchant.toString() === item.merchantID.toString());
      if (sub.merchant.toString() === item.merchantID.toString())
        item.transaction_charge = item.transaction_charge + parseInt(sub.total);
    }
    item.transaction_charge = (
      item.transaction_charge -
      item.transaction_charge * 0.025
    ).toFixed(2);
    delete item.merchantID;
  }

  let deliveryFee = cartTotal * 0.05;
  dispatch_rider.transaction_charge = (
    deliveryFee -
    deliveryFee * 0.25
  ).toFixed(2);
  merchants.push(dispatch_rider);
  console.log(merchants);

  try {
    const data = {
      public_key: process.env.PUBLIC_KEY_TEST,
      tx_ref: Date.now(),
      amount: cartTotal + deliveryFee,
      redirect_url: "http://localhost:3000/payment_done?order=true",
      currency: "NGN",
      payment_options: "card",
      customer: {
        email: user.email,
        phonenumber: user.phone_number,
        name: user.fullname,
      },
      subaccounts: merchants,
      callback: function (data) {
        console.log(data);
      },
      customizations: {
        title: "JUMGA",
        description: "Payment for items in cart",
      },
    };
    console.log(data);
    const request = await axios.post("/payments", data);
    const { data: dataLink } = await request.data;
    res.send(dataLink.link);
  } catch (error) {
    console.log(error.response);
  }
});

router.get("/get_image/:path/:second/:name", async (req, res) => {
  console.log("image");
  const { path: seel, second, name } = req.params;
  res.sendFile(path.join(__dirname, "../" + seel + "/" + second + "/" + name));
});

router.post("/order_successful", auth, async (req, res) => {
  try {
    const { id, cart } = req.body;
    const request = await axios.get("/transactions/" + id + "/verify");
    const user = await User.findById(req.user._id);
    const response = await request.data.status;
    let merchant;
    if (response === "success") {
      for (const item of cart) {
        item.item.quantity = item.item.cart_quantity;
        item.item.order_number = id;
        user.orders_customer.push(item);
        let store_item = await Items.findById(item.item._id);
        //get merchant
        merchant = await User.findById(store_item.merchant);

        merchant.orders.push(item);
      }
      user.cart = [];
      user.save();
      merchant.save();
      res.send(user);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    req.user.save();
    res.status(200).send();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
