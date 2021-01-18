const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const auth = async (req, res, next) => {
  console.log("in auth");
  try {
    let token = req.header("Authorization").replace("Bearer ", "");

    const extract = jwt.verify(token, "lockandkey");

    let user = await User.findOne({
      _id: extract._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error("");
    }
    req.user = await user;
    req.token = await token;
    next();
  } catch (e) {
    res.status(400).send("Unauthozized");
    console.log(e);
  }
};

module.exports = auth;
