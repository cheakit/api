import mongoose from "mongoose";
import log from "../utils/logger.js";

const URL = process.env.MONGO_URL;
class ConnectMongoDB {
  static connectDB = () => {
    let URL: string = process.env.MONGO_URL!;
    try {
      mongoose.connect(URL).then(() => {
        log.info("Connected to MongoDB");
      });
    } catch (err) {
      log.error(err);
      process.exit(1);
    }
  };
}

export { ConnectMongoDB };
