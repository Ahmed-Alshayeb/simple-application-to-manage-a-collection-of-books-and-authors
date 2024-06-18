import mongoose from "mongoose";

const url = "mongodb+srv://ahmedalshayeb:node12345@a-a.bymdcya.mongodb.net/book-management";

async function connectDB() {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("connected Database successfully!...");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connectDB;
