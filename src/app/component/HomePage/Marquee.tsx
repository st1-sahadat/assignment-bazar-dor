import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { AllProductFatch } from "../FatchApi/FatchApi";
import { IMarqueeProducts } from "../../type/Type";
import { convertToBanglaNumber, upDownIcon } from "../Others/EngToBnAndOther";



const Marquee = async () => {
    
    const allProductsData = await AllProductFatch() as IMarqueeProducts[];

    return (
        <div className="bg-amber-400">
            <div className="flex items-center gap-2">
                <span className="whitespace-nowrap font-bold text-sm">পণ্য দেখুন :</span>
                <MarqueeText direction="right" duration={10} className="py-2">
                    {allProductsData.map((item) => (
                        <div
                            key={item.id}
                            className="mr-11 inline-flex items-center text-sm font-medium transition-colors hover:text-blue-600"
                        >
                            <Link href={`/product-details/${item.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                {item.categoryIcon}{" "}
                                {item.nameBn}{" "}
                                {convertToBanglaNumber(item.today)}{" "}{"টাকা/কেজি"}{" "}
                                {upDownIcon(item.change)}
                                {item.change ? convertToBanglaNumber(item.change.pct ?? 0) : ""}
                            </Link>
                        </div>
                    ))}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;