import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "node:fs/promises";

const userAccount = {
  username: "syond",
  password: "321321",
};

export default class AuthController {
  async auth(req: Request, res: Response) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).json({ error: "Username or password is invalid" });
    }

    if (
      username !== userAccount.username ||
      password !== userAccount.password
    ) {
      return res.status(401).json({ error: "Username or password is invalid" });
    }

    jwt.sign(
      userAccount,
      await fs.readFile("./config/jwt/private.pem"),
      (error, token) => {
        if (error)
          return res
            .status(401)
            .json({ auth: false, error: error });

        res.status(200).json({ auth: true, token });
      }
    );
  }
}
