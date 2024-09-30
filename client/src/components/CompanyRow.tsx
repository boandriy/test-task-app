import { BaseCompany } from "../types/types";

const imageSize = "100x100";

interface CompanyRowProps {
  company: BaseCompany;
}

function CompanyRow({ company }: CompanyRowProps) {
  return (
    <div className="flex justify-between items-center text-[14px] leading-5 font-normal">
      <div className="flex items-center">
        <img className="w-6 h-6" src={company.images[imageSize]} />
        <div className="ml-2 text-gray2">{company.name}</div>
      </div>
      <span className="text-gray1">{company.total_jobs_available}</span>
    </div>
  );
}

export default CompanyRow;
