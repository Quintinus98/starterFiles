import express, {Request, Response} from "express";
import cors from "cors";

import userRoute from "./routes/usersRoute";
import mythicalWeaponRouter from "./routes/mythicalWeapons";

const app: express.Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
  try {
    res.send("Connected"); 
  } catch (error) {
    res.status(400).json(error);
  }
});

app.use("/mythical_weapons", mythicalWeaponRouter);
app.use("/users", userRoute);

app.listen(port, (): void => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
