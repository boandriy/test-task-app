import { Company } from "../types/company";
import { getStorage } from ".";

const findAll = async (): Promise<Company[]> => {
  const storage = await getStorage();

  return storage.items;
};

export default {
  findAll,
};
