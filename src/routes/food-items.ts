import { Request, Response, Router } from "express";
import { type FoodItem } from "../types/food-item";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const itemList: Array<FoodItem> = [
    {
      ratings: 5,
      name: "Mysore Masala Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
    {
      ratings: 3,
      name: "Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
    {
      ratings: 4,
      name: "Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
    {
      ratings: 5,
      name: "Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
    {
      ratings: 5,
      name: "Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
    {
      ratings: 5,
      name: "Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
    {
      ratings: 5,
      name: "Dosa",
      imageUrl:
        "https://pipingpotcurry.com/wp-content/uploads/2020/12/how-to-make-dosa-crispy-PipingPotCurry.jpg",
      price: 100,
    },
  ];
  res.render("food-items/index", { items: itemList });
});

router.get("/create", async (req: Request, res: Response) => {
  res.render("food-items/create");
});

export default router;
