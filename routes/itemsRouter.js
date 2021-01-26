const express = require("express");
const Items = require("../model/itemsModel");
const auth = require("../auth/auth");
const router = express.Router();

router.get("/items", async (req, res) => {
  try {
    const items = await Items.find();
    res.send(items);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add_to_cart", auth, async (req, res) => {
  try {
    const { body, user } = req;
    if (
      user.cart.find(
        ({ item }) => item._id.toString() === body.item._id.toString()
      ) === undefined
    ) {
      body.item.cart_quantity = body.cart_quantity;
      user.cart.push({
        item: body.item,
        total: body.item.cart_quantity * body.item.price,
      });
      await user.save();
    }
    res.send(user.cart);
  } catch (e) {
    console.log(e);
  }
});
router.post("/update_cart/:case", auth, async (req, res) => {
  const { item, _id, quantity } = req.body;
  const user = req.user;
  try {
    const cartItem = user.cart.find(
      ({ item }) => item._id.toString() === _id.toString()
    );
    const items = user.cart.filter(
      ({ item }) => item._id.toString() !== _id.toString()
    );
    const index = user.cart
      .map(({ item }) => item._id.toString())
      .indexOf(_id.toString());
    console.log(req.body);
    const action = req.params.case;
    switch (action) {
      case "+":
        // console.log(item);
        quantity
          ? (cartItem.item.cart_quantity = quantity)
          : ++cartItem.item.cart_quantity;
        cartItem.total = cartItem.item.price * cartItem.item.cart_quantity;

        user.cart[index] = cartItem;
        console.log(cartItem.total);
        user.save();
        res.send(user.cart);
        break;
      case "-":
        --cartItem.item.cart_quantity;
        cartItem.total = cartItem.item.price * cartItem.item.cart_quantity;

        user.cart[index] = cartItem;
        console.log(cartItem.total);
        user.save();
        res.send(user.cart);
        break;

      default:
        user.cart = items;
        console.log(cartItem.total);
        res.send(user.cart);
        user.save();
        break;
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
