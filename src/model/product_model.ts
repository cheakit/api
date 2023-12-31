import mongoose from "mongoose";

interface ProductInterface extends Document {
  id: number;
  name: string;
  price: number;
  quantity: number;
  amount: number; // Virtual property
}

const productSchema = new mongoose.Schema<ProductInterface>(
  {
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
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

productSchema.virtual("amount").get(function (this: ProductInterface) {
  return this.price * this.quantity;
});

const productModel = mongoose.model("Product", productSchema);

export { productModel };
