import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "ID is mandatory"],
    },
    name: {
        type: String,
        required: [true, "Product name is mandatory"],
    },
    price: {
        type: Number,
        required: [true, "Product price is mandatory"],
    },
    quantity: {
        type: Number,
        required: [true, "Product quantity is mandatory"],
    },
}, {
    toJSON: { virtuals: true },
    timestamps: true,
});
productSchema.virtual("amount").get(function () {
    return this.price * this.quantity;
});
const productModel = mongoose.model("Product", productSchema);
export { productModel };
//# sourceMappingURL=product_model.mjs.map