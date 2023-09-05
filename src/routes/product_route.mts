import express from "express";
import {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controller/product_controller.mjs";

const route = express.Router();

route.get("/getProducts", getProducts);
route.get("/getProduct/:id", getProduct);
route.put("/updateProduct/:id", updateProduct);
route.delete("/deleteProduct/:id", deleteProduct);
route.post("/createProduct", createProduct);

export { route };
