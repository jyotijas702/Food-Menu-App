import mongoose, { Schema, model, Document } from "mongoose";

interface IMenu extends Document {
  foodName: string;
  price: number;
  ratings: string;
  imageUrl: string;
}

const productSchema = new Schema<IMenu>({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  ratings: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Menu = mongoose.model<IMenu>("Menu", productSchema);

export default Menu;
