import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { ConnectMongoDB } from "./mongodb/connectDB.mjs";
import { errMiddleware } from "./middleware/errMiddleware.mjs";
import { route } from "./routes/product_route.mjs";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(urlencoded());
app.use(cors());
app.use(errMiddleware);

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Hello to API");
});

ConnectMongoDB.connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
