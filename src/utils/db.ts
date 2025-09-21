import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState >= 1) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO!);
  } catch (error) {
    console.log(error);
    throw new Error("Conection failed");
  }
};

export default connect;
