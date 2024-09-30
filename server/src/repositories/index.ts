import fs from "fs/promises";
import { Storage } from "../types/store";

const encoding = "utf-8";
const storageFilePath = `./data/data.json`;

export const getStorage = async (): Promise<Storage> => {
  const data = await fs.readFile(storageFilePath, encoding);

  return JSON.parse(data) as Storage;
};
