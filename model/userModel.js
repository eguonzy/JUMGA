const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    fullname: String,
    date_of_birth: String,
    business_name: String,
    account_number: Number,
    sex: String,
    password: String,
    bank_code: String,
    email: { type: String, unique: true },
    account_bank: String,
    country: String,
    phone_number: String,
    subaccount_id: String,
    position: String,
    payment_status: { type: Boolean, default: false },
    split_type: String,
    split_value: Number,
    addresses: [],
    address: String,
    tokens: [{ token: String }],
    orders_customer: [
      {
        item: {
          name: String,
          manufacturer: String,
          quantity: Number,
          price: Number,
          quantity_sold: Number,
          description: String,
          images: [],
          rating_review: [
            {
              review: String,
              rating: Number,
            },
          ],
        },
        customer: mongoose.Types.ObjectId,
        total: Number,
        order_number: String,
      },
    ],
    orders: [
      {
        item: {
          name: String,
          manufacturer: String,
          quantity: Number,
          price: Number,
          quantity_sold: Number,
          description: String,
          images: [],
        },
        customer: mongoose.Types.ObjectId,
        total: String,
      },
    ],
    cart: [
      {
        item: {
          _id: mongoose.Schema.Types.ObjectId,
          name: String,
          manufacturer: String,
          quantity: Number,
          price: Number,
          cart_quantity: { type: Number, default: 0 },
          description: String,
          images: [],
        },

        total: String,
      },
    ],
    rating_rating: [
      {
        customer: mongoose.Types.ObjectId,
        review: String,
        rating: Number,
      },
    ],
    dispatch_rider: {
      name: { type: String, default: "badmus" },

      id: Number,
      account_number: { type: String, default: "0690000031" },
      account_bank: { type: String, default: "044" },
      full_name: { type: String, default: "Watson" },
      split_type: { type: String, default: "percentage" },
      split_value: { type: String, default: 0.05 },
      subaccount_id: {
        type: String,
        default: "RS_7D16F6C04B046BE2EAF1D2A5AA74CA1A",
      },
      bank_name: { type: String, default: "ACCESS BANK NIGERIA" },
    },
  },
  { timestamps: true }
);

UserModel.virtual("shop_items", {
  ref: "Items",
  localField: "_id",
  foreignField: "merchant",
});

UserModel.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});

UserModel.statics.loginVal = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(password);
  if (!user) {
    throw new Error("invalid username or password");
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("invalid usernasme or password");
  }

  return user;
};

UserModel.methods.tokenGen = async function () {
  let User = this;
  token = jwt.sign({ _id: User._id.toString() }, "lockandkey", {
    expiresIn: "1 day",
  });
  User.tokens = User.tokens.concat({ token });
  await User.save();
  return token;
};

const User = mongoose.model("User", UserModel);
module.exports = User;
