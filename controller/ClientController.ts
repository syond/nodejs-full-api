import { Request, Response } from "express";

export default class ClientController {
  index(req: Request, res: Response) {
    res.json([
      { name: "Brian", phone: "23659-5796" },
      { name: "Brian", phone: "23659-5796" },
      { name: "Brian", phone: "23659-5796" },
      { name: "Brian", phone: "23659-5796" },
    ]);
  }
}
