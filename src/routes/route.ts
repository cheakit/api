import { Express } from "express";
import { productRoute } from "./product_route.js";
import userRoute from "./user_route.js";

export const MyRoute = (app: Express) => {
  app.use("/api", productRoute);
  app.use("/api", userRoute);
};
