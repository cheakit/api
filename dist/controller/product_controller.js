import { productModel } from "../model/product_model.js";
const getProducts = async (req, res) => {
    try {
        const product = await productModel.find({});
        res.json(product);
    }
    catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
};
const getProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json(product);
    }
    catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
};
const deleteProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        res.json(product);
    }
    catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
};
const updateProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id);
        res.json(product);
    }
    catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
};
const createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.json(product);
    }
    catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
};
export { getProducts, getProduct, deleteProduct, updateProduct, createProduct };
//# sourceMappingURL=product_controller.js.map