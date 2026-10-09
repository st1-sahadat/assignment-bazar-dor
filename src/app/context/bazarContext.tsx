'use client'

import { createContext, ReactNode, useState } from "react"

interface IBazarContext {
    banglaDate : string;
    setBanglaDate : React.Dispatch<React.SetStateAction<string>>;
    activeTab : string;
    setActiveTab : React.Dispatch<React.SetStateAction<string>>;
}



export const bazarContext = createContext <IBazarContext>({
    banglaDate : "", setBanglaDate : () => {},
    activeTab : "sign-in", setActiveTab : () => {},

})


const BazarProvider = ({children} : { children: ReactNode }) =>{
    // date show
    const [banglaDate, setBanglaDate] = useState<string>("");
    // ActiveTab
  const [activeTab, setActiveTab] = useState("sign-in");



    const shareData = {
        banglaDate, setBanglaDate,
        activeTab, setActiveTab,
    };
    return (        
    <bazarContext.Provider value={shareData}>{children}</bazarContext.Provider>
    )
}

export default BazarProvider;







