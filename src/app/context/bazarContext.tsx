'use client'

import { createContext, ReactNode, useState } from "react"
import { Category, IMarqueeProducts } from "../type/Type";

interface IBazarContext {
    banglaDate: string;
    setBanglaDate: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    categories: Category[];
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
    sortProduct: IMarqueeProducts[]
    setSortProduct: React.Dispatch<React.SetStateAction<IMarqueeProducts[]>>;
}



export const bazarContext = createContext<IBazarContext>({
    banglaDate: "", setBanglaDate: () => { },
    activeTab: "sign-in", setActiveTab: () => { },
    categories : [], setCategories: ()=>{},
    sortProduct : [], setSortProduct : ()=> {}

})


const BazarProvider = ({ children }: { children: ReactNode }) => {
    // date show
    const [banglaDate, setBanglaDate] = useState<string>("");
    // ActiveTab
    const [activeTab, setActiveTab] = useState<string>("sign-in");
    // Categories 
    const [categories, setCategories] = useState<Category[]>([]);
    // Sort Mathod
    const [sortProduct, setSortProduct] = useState<IMarqueeProducts[]>([]);



    const shareData = {
        banglaDate, setBanglaDate,
        activeTab, setActiveTab,
        categories, setCategories,
        sortProduct, setSortProduct,
    };
    return (
        <bazarContext.Provider value={shareData}>{children}</bazarContext.Provider>
    )
}

export default BazarProvider;







