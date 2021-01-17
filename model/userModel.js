const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    fullname: String,
    date_of_birth: String,
    buisness_name: String,
    account_number: Number,
    sex: String,
    password: String,
    bank_code: String,
    email: String,
    phone_number: String,
    position: String,
    payment_status: { type: Boolean, default: false },
    addresses: [],
    address: String,
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
    orders_customer: [
      {
        item: {
          name: String,
          manufacturer: "String",
          quantity: Number,
          price: Number,
          quantity_sold: Number,
          description: String,
          images: [],
          rating_review: [
            {
              customer: mongoose.Types.ObjectId,
              review: String,
              rating: Number,
            },
          ],
        },
        customer: mongoose.Types.ObjectId,
        total: Number,
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
          name: String,
          manufacturer: String,
          quantity: Number,
          price: Number,
          description: String,
          images: [],
        },
        customer: mongoose.Types.ObjectId,
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
  },
  { timestamps: true }
);

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
