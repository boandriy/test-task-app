import { IndustryWithCompanies } from "../types/types";
import CompanyRow from "./CompanyRow";

interface IndustryCardProps {
  industry: IndustryWithCompanies;
}

function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="bg-[#FFFFFF] p-4 pb-6 max-w-[370px] rounded-lg">
      <div className="font-semibold text-[16px] flex justify-between items-center mb-4">
        <h4 className="text-[#18181B] leading-6">{industry.name}</h4>
        <span className="text-[#64748B] leading-5">
          {industry.companies.length}
        </span>
      </div>
      <div>
        <div className="text-[#64748B] leading-4 text-[12px] font-normal flex justify-between items-center border-b border-[#E3E8EF] pb-2 mb-4">
          <span>Name</span>
          <span>Total jobs available</span>
        </div>
        <div className="flex flex-col space-y-4 max-h-[224px] overflow-y-auto">
          {industry.companies.map((company) => (
            <CompanyRow company={company} key={company.uuid} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
