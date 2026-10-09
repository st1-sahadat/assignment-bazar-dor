// Categories type
export interface Category {
    icon: string;
    id: string;
    nameBn: string;
    slug: string;
}

// Products type
export interface IMarqueeProducts {
    id?: string | number;
    nameBn: string;
    categoryIcon: string;
    today: number;
    image: string,
    unit: string,
    change?: {
        dir?: "up" | "down" | "flat" | string;
        pct?: number;
    };
}
