import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();
import path from "path";
import mongoose from "mongoose";
import { MONGO_URL } from "./constants";

// Configuration & Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form submissions
app.use(express.static(path.join(__dirname, "public")));

// Database Connection
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MONGO CONNECTION OPEN!");
  })

  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!");
    console.log(err);
  });

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express with TypeScript!" });
});

//  Added a server listener
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
