import { Router } from "express";
import companiesController from "../controllers/companies";

const router = Router();

router.get("/", companiesController.getAllCompanies);

export default router;
