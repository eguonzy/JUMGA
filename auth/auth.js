const jwt = require("jsonwebtoken");
const user = require("../models/adminmodel");

const auth = async (req, res, next) => {
  try {
    let token = req.header("Authorization").replace("Bearer ", "");

    const extract = jwt.verify(token, "lockandkey");

    let admin = await Admin.findOne({
      _id: extract._id,
      "tokens.token": token,
    });
    if (!admin) {
      throw new Error("");
    }
    req.admin = await admin;
    req.token = await token;
    next();
  } catch (e) {
    res.status(400).send("Unauthozized");
    console.log(e);
  }
};

module.exports = auth;
