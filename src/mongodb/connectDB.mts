import mongoose from "mongoose";

const URL = process.env.MONGO_URL;
class ConnectMongoDB {
  static connectDB = () => {
    let URL: string = process.env.MONGO_URL!;
    try {
      mongoose.connect(URL).then(() => {
        console.log("Connected to MongoDB");
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export { ConnectMongoDB };
