export type IncomeStream = {
  id: number;
  name: string;
};

export type Industry = {
  id: number;
  name: string;
};

export type ImageSizes = {
  [key: string]: string;
};

export type Company = {
  uuid: string;
  images: ImageSizes;
  income_streams: IncomeStream[];
  industries: Industry[];
  name: string;
  tagline: string;
  total_jobs_available: number;
};
