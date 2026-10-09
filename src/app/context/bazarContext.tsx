'use client'

import { createContext, ReactNode, useState } from "react"
import { Category } from "../type/Type";

interface IBazarContext {
    banglaDate: string;
    setBanglaDate: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    categories: Category[];
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}



export const bazarContext = createContext<IBazarContext>({
    banglaDate: "", setBanglaDate: () => { },
    activeTab: "sign-in", setActiveTab: () => { },
    categories : [], setCategories: ()=>{},

})


const BazarProvider = ({ children }: { children: ReactNode }) => {
    // date show
    const [banglaDate, setBanglaDate] = useState<string>("");
    // ActiveTab
    const [activeTab, setActiveTab] = useState("sign-in");
    // Categories 
    const [categories, setCategories] = useState<Category[]>([]);



    const shareData = {
        banglaDate, setBanglaDate,
        activeTab, setActiveTab,
        categories, setCategories
    };
    return (
        <bazarContext.Provider value={shareData}>{children}</bazarContext.Provider>
    )
}

export default BazarProvider;







