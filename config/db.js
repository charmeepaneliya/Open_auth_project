import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log("connect to DB")
    return connect;
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;