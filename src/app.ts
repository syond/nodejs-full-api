import dotenv from "dotenv";
import express from "express";
import bodyparser from "body-parser";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(bodyparser.json());
app.use(routes);

export default app;
