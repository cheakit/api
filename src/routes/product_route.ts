import express from "express";
import {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controller/product_controller.js";

const productRoute = express.Router();

productRoute.get("/getProducts", getProducts);
productRoute.get("/getProduct/:id", getProduct);
productRoute.put("/updateProduct/:id", updateProduct);
productRoute.delete("/deleteProduct/:id", deleteProduct);
productRoute.post("/createProduct", createProduct);

export { productRoute };
