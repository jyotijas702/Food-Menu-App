import mongoose, { Schema, Document } from "mongoose";

interface IFoodItem extends Document {
  name: string;
  price: number;
  ratings: number;
  imageUrl: string;
}

const foodItemSchema = new Schema<IFoodItem>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  ratings: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model<IFoodItem>("Product", foodItemSchema);

export default Product;
