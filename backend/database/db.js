const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      process.env.DB_URI,
      // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      () => {
        console.log("Database Connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoConnection;
