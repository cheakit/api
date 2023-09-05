import { productModel } from "../model/product_model.mjs";

const getProducts = async (req: any, res: any) => {
  try {
    const product = await productModel.find({});
    res.json(product);
  } catch (err: any) {
    res.status(500);
    throw new Error(err.message);
  }
};

const getProduct = async (req: any, res: any) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json(product);
  } catch (err: any) {
    res.status(500);
    throw new Error(err.message);
  }
};

const deleteProduct = async (req: any, res: any) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (err: any) {
    res.status(500);
    throw new Error(err.message);
  }
};

const updateProduct = async (req: any, res: any) => {
  try {
    const product = await productModel.findByIdAndUpdate(req.params.id);
    res.json(product);
  } catch (err: any) {
    res.status(500);
    throw new Error(err.message);
  }
};
const createProduct = async (req: any, res: any) => {
  try {
    const product = await productModel.create(req.body);
    res.json(product);
  } catch (err: any) {
    res.status(500);
    throw new Error(err.message);
  }
};

export { getProducts, getProduct, deleteProduct, updateProduct, createProduct };
