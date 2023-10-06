import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (typeof process.env.MONGODB_URI === "string")
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Terhubung ke MongoDB.");
    } catch (error) {
      console.log(error);
    }
};

export default connectMongoDB;
