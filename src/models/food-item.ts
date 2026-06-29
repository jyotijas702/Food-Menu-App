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

const FoodItem = mongoose.model<IFoodItem>("FoodItem", foodItemSchema);

export default FoodItem;
