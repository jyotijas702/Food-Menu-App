import mongoose, { Document, Schema } from "mongoose";
import { FoodItem } from "../types/food-item";

interface IFoodItem extends Document, FoodItem {}

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
    max: 5,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const FoodItemModel = mongoose.model<IFoodItem>("FoodItem", foodItemSchema);

export default FoodItemModel;
