const mongoose = require("mongoose");
let mongooseUrl = process.env.DB;
try {
  mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
} catch (e) {
  console.log(e);
}
