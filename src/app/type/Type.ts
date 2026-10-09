// Categories type
export interface Category {
    icon: string;
    id: string;
    nameBn: string;
    slug: string;
}

// Products type
// 1. Define the Market type separately for cleaner code
export interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

// 2. Define the Change type
export interface IChange {
  dir: "up" | "down" | "flat" | string;
  pct: number;
}

// 3. The corrected Product type
export interface IMarqueeProducts {
  id: string | number;
  slug: string;           // Added: Missing in your original type
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;      // Added: Missing in your original type
  lastWeek: number;       // Added: Missing in your original type
  lastMonth: number;      // Added: Missing in your original type
  change?: IChange;
  markets?: IMarket[];    // Fixed: Changed from tuple `[ ]` to array `[ ]`
}
