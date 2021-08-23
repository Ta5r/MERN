const mongoose = require("mongoose");

// const DB = process.env.DATABASE;

const DATABASE = "mongodb+srv://root2106:test^4321@cluster0.baif1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const PORT="5000";

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
