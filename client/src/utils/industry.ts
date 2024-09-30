import { Company, ImageSizes } from "../types/company";

export type PreparedIndustry = {
  id: number;
  name: string;
  companies: PreparedCompany[];
};

export type PreparedCompany = {
  uuid: string;
  images: ImageSizes;
  name: string;
  tagline: string;
  total_jobs_available: number;
};

type IndustryMap = {
  [industryId: number]: PreparedIndustry;
};

export const prepareIndustries = (companies: Company[]): PreparedIndustry[] => {
  const industriesMap: IndustryMap = {};

  // prepare industry companies
  companies.forEach((company) => {
    company.industries.forEach((industry) => {
      if (!industriesMap[industry.id]) {
        industriesMap[industry.id] = {
          id: industry.id,
          name: industry.name,
          companies: [],
        };
      }
      industriesMap[industry.id].companies.push({
        ...company,
      });
    });
  });

  // sort companies
  for (const industry in industriesMap) {
    const seen = new Set();

    industriesMap[industry].companies = industriesMap[
      industry
    ].companies.filter((company) => {
      const isDuplicate = seen.has(company.uuid);
      seen.add(company.uuid);
      return !isDuplicate;
    });

    industriesMap[industry].companies.sort();
  }

  return Object.values(industriesMap);
};
