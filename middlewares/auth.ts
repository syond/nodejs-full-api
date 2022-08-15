import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import fs from "node:fs/promises";

function getPemFile() {
    return fs.readFile("config/jwt/private.pem");
}

export default async function verifyAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["x-access-token"] as string;

  if (!token)
    return res.status(401).json({ auth: false, error: "No token provided" });

  jwt.verify(
    token,
    await getPemFile(),
    //{ algorithms: ["RS256"] },
    (error, decoded) => {
      if (error) return res.status(401).json({ auth: false, error: error });

      console.log(decoded);

      next();
    }
  );
}
