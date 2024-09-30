import { Company, IndustryWithCompanies } from "../types/types";

type IndustryMap = {
  [industryId: number]: IndustryWithCompanies;
};

// Another potential solution
// In case we have a large dataset, we could implement pagination for the getCompanies endpoint (for example 200 companies per request).
// Then we can recursively get all companies. This would allow us to send requests to retrieve companies in smaller, manageable chunks and process them
// rather than fetching all companies at once.

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
