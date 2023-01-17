import express from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
const port = 3000;

app.use(bodyParser);

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Connected");
});

app.listen(port, (): void => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
