import { useCallback, useEffect, useState } from "react";
import IndustryCard from "./components/IndustryCard";
import { Company } from "./types/types";
import { companiesService } from "./services/companies";
import { prepareIndustries } from "./utils/industry";

function App() {
  const [isError, setIsError] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  const fetchCompanies = useCallback(async () => {
    try {
      const result = await companiesService.getCompanies();

      setCompanies(result.data);
    } catch (error) {
      setIsError(true);
      console.log("Fetching companies error: ", error);
    }
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return (
    <div className="bg-gray-300 min-h-screen p-10">
      {!isError ? (
        <div className="grid grid-cols-3 gap-4 items-start">
          {prepareIndustries(companies).map((industry) => (
            <IndustryCard industry={industry} key={industry.id} />
          ))}
        </div>
      ) : (
        <div className="text-red-500 text-center text-lg">
          Failed to fetch data
        </div>
      )}
    </div>
  );
}

export default App;
