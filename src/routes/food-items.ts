import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.render("food-items/index");
});

router.get("/create", async (req: Request, res: Response) => {
  res.render("food-items/create");
});

export default router;
