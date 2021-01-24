const mongoose = require("mongoose");
let mongooseUrl = process.env.DB;
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
