import mongoose from "mongoose";
import config from "config";
const db = process.env.MONGO_URI;

//MongoDB connection made async
const connectDB = async () => {
  try {
    //trying to connect DB
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected`);
  } catch (e) {
    //if DB connection fails logging error and close the server
    console.error(e.message);
    process.exit(1);
  }
};

export default connectDB;
