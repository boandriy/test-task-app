import { Request, Response } from "express";
import companiesService from "../services/companies";
import { HTTP_STATUS } from "../utils/httpStatuses";

// GET api/companies
const getAllCompanies = async (_: Request, res: Response) => {
  try {
    const companies = await companiesService.getAllCompanies();

    res.status(HTTP_STATUS.OK).json(companies);
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error" });
  }
};

export default { getAllCompanies };
