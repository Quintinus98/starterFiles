import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";

import users_routes from "./handlers/user";
import mythical_weapons_routes from "./handlers/mythical_weapons";

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

mythical_weapons_routes(app);
users_routes(app);
app.listen(port, (): void => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
