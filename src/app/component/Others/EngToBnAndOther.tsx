import { IMarqueeProducts } from "@/app/type/Type";
import { PiEmptyDuotone } from "react-icons/pi";




// Number convert English to Bangla
export const convertToBanglaNumber = (value: string | number) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(value).replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};

// convert english to bangla word
export const formatUnit = (unit?: string) => {
    const normalizedUnit = unit?.trim().toLowerCase();

    const unitMap: Record<string, string> = {
        kg: 'কেজি',
        g: 'গ্রাম',
        ltr: 'লিটার',
        liter: 'লিটার',
        litre: 'লিটার',
        pcs: 'পিস',
        piece: 'পিস',
        pieces: 'পিস',
        box: 'বক্স',
        pack: 'প্যাক',
        packet: 'প্যাক',
        bottle: 'বোতল',
        dozen: 'ডজন'
    };

    return unitMap[normalizedUnit ?? ''] ?? unit ?? 'একক';
};


// Product Up and Down icon
export const upDownIcon = (change: IMarqueeProducts["change"]) => {
    if (!change?.dir) {
        return "";
    } else if (change.dir === "up") {
        return "▲";
    } else if (change.dir === "down") {
        return "▼";
    } else {
        return <PiEmptyDuotone />;
    }

};
