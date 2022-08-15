import express from "express";
import authMiddleware from "../middlewares/auth";
import AuthController from "../controller/AuthController";
import ClientController from "../controller/ClientController";

const AuthCont = new AuthController();
const ClientCont = new ClientController();

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

routes.post("/auth", AuthCont.auth);

routes.get("/clients", authMiddleware, ClientCont.index);

export default routes;
