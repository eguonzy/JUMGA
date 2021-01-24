var createError = require("http-errors");
var express = require("express");
var path = require("path");
var multer = require("multer");

const dotenv = require("dotenv").config({ path: "./config/.env" });
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var userRouter = require("./routes/userRouter");
var itemsRouter = require("./routes/itemsRouter");

const bodyParser = require("body-parser");
var app = express();

// view engine setup

app.use(logger("dev"));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use(upload.array("images"));
app.use(indexRouter);
app.use(userRouter);
app.use(itemsRouter);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client/public")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/public/index.html"));
  });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
// const User = require("./model/userModel");
// const main = async () => {
//   const user = await User.findById("600333d6509ca13ad0089bdd");
//   await user.populate("shop_items").execPopulate();
//   console.log(user.shop_items[0]);
// };
// main();
