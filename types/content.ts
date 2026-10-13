export type VehicleCategory = "compact" | "sedan" | "suv" | "van" | "other";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  category: VehicleCategory;
  modelYear?: string;
  trim?: string;
  seats?: number;
  fuel?: string;
  image: string;
  imageAlt: string;
  dailyPriceFromKRW?: number;
  priceUnit?: string;
  priceBasis?: string;
  insuranceNote?: string;
  highlights?: string[];
  featured?: boolean;
};

export type Review = {
  id: string;
  authorDisplay: string;
  text: string;
  writtenAt?: string;
  sourceUrl?: string;
  approvedForReuse: boolean;
};

export type FAQItem = { id: string; question: string; answer: string };
