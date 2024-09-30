import { Router, Response } from "express";
import { HTTP_STATUS } from "../utils/httpStatuses";
import companiesRouter from "./companies";

const router = Router();

// api health check route
router.get("/ping", (_, res: Response) => {
  res.status(HTTP_STATUS.OK).json({ message: "pong" });
});

router.use("/companies", companiesRouter);

export default router;
