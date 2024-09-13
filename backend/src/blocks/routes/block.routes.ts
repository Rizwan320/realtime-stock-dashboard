import express, { Request, Response, Router } from "express";
import { blockchainController } from "../controller/blocks.controller";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.json({});
});

export default router;
