import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./mongodb/connectDB.js";
import { errMiddleware } from "./middleware/errMiddleware.js";
import { MyRoute } from "./routes/route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(urlencoded());
app.use(cors());
app.use(errMiddleware);

MyRoute(app);

app.get("/", (req, res) => {
  res.send("Hello to API");
});

ConnectMongoDB.connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
