import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.json({
    message: "Hello from food items router!!",
  });
});

export default router;
