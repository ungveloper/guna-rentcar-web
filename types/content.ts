export type VehicleCategory = "compact" | "sedan" | "premium" | "suv" | "van";

export type RentalRates = {
  hours6?: number;
  hours12?: number;
  days1to2: number;
  days3to6: number;
  days7plus: number;
};

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  category: VehicleCategory;
  /** User-supplied model photo; may differ from actual rental car specification. */
  image: string;
  imageAlt: string;
  rates: RentalRates;
  seats?: string;
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
