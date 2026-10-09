
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
