import express from "express";
import routes from "./routes/task.routes.js";
import { createConnection } from "./database.js";

const app = express();

await createConnection();

app.use(express.json());

app.use("/api", routes);

export default app;
