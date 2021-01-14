const mongoose = require("mongoose");
const MerchantModel = new mongoose.Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  tokens: [{ token: String }],
  shop_items: [
    {
      name: String,
      manufacturer: "String",
      quantity: Number,
      price: Number,
      quantity_sold: Number,
      description: String,
      images: [],
    },
  ],
});

const Merchant = mongoose.model("Merchant", MerchantModel);
