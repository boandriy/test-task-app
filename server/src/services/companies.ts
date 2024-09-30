import companiesRepository from "../repositories/companies";
import { Company } from "../types/company";

const getAllCompanies = async (): Promise<Company[]> => {
  const companies = await companiesRepository.findAll();

  return companies;
};

export default {
  getAllCompanies,
};
