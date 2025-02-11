const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.9usny.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodejs`
    )
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err: Error) => {
      throw err;
    });
};

module.exports = connectToDatabase;

