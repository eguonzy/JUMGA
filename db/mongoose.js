const mongoose = require("mongoose");
let mongooseUrl = process.env.DB || "mongodb://127.0.0.1:27017/jumga";
try {
  mongoose.connect(process.env.DBS || mongooseUrl, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
} catch (e) {
  console.log(e);
}
