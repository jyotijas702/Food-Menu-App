import { Request, Response, Router } from "express";
// import { type FoodItem } from "../types/food-item";
import FoodItemModel from "../models/food-item";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const itemList = await FoodItemModel.find()
      console.log("Items from MongoDB:", itemList);

  
  res.render("food-items/index", { items: itemList });
});

router.get("/create", async (req: Request, res: Response) => {
  res.render("food-items/create");
});


router.post("/", async (req: Request, res: Response) => {
    const { name, price, ratings, imageUrl } = req.body;

    try {
        const newItem = await FoodItemModel.create({ name, price, ratings, imageUrl });
        console.log("save", newItem)
        res.redirect("/food-items");
    } catch (error) {
        console.error("Database Save Error:", error);
        res.status(500).send("Server Error");
    }
});
export default router;
