const mongoose = require("mongoose");
const ItemsModel = mongoose.Schema({
  name: String,
  manufacturer: "String",
  quantity: Number,
  merchant: { ref: "User", type: mongoose.Schema.Types.ObjectId },
  price: Number,
  quantity_sold: Number,
  secondary_category: String,
  primary_category: String,
  description: String,
  rating_review: [
    {
      customer: mongoose.Schema.Types.ObjectId,
      review: String,
      rating: Number,
    },
  ],
  images: [],
});
const Items = mongoose.model("Items", ItemsModel);
module.exports = Items;
