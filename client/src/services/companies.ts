import { Company } from "../types/company";
import api from "./api";

const getCompanies = async () => {
  const response = await api.get<Company[]>("/companies");

  return response;
};

export const companiesService = {
  getCompanies,
};
