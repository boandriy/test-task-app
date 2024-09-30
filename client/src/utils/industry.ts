import { Company, IndustryWithCompanies } from "../types/types";

type IndustryMap = {
  [industryId: number]: IndustryWithCompanies;
};

export const prepareIndustries = (
  companies: Company[]
): IndustryWithCompanies[] => {
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

    // remove duplicated companies (within industry)
    industriesMap[industry].companies = industriesMap[
      industry
    ].companies.filter((company) => {
      const isDuplicate = seen.has(company.uuid);

      seen.add(company.uuid);

      return !isDuplicate;
    });

    industriesMap[industry].companies.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return Object.values(industriesMap);
};
