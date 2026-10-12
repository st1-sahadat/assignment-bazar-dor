'use client';                                        

import { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";       
import { FatchCategories } from "../FatchApi/FatchApi";
import { Category } from "@/app/type/Type";
import { bazarContext } from "@/app/context/bazarContext";

const NavCategories = () => {
    const { categories, setCategories } = useContext(bazarContext);
    const pathname = usePathname();                  

    useEffect(() => {
        fetch(`${FatchCategories}`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [setCategories]);

    return (
        <div className="w-full overflow-x-auto">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                {categories.map((c: Category) => {
                    const isActive = pathname === `/category/${c.slug}`;

                    return (
                        <li key={c.id} className="shrink-0">
                            <Link
                                href={`/category/${c.slug}`}
                                className={
                                    isActive
                                        ? "text-xs sm:text-sm font-bold text-white bg-green-700 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-md transition-colors"
                                        : "text-xs sm:text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-md transition-colors"
                                }
                            >
                                {c.nameBn}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavCategories;