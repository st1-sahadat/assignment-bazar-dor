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
        <ul className="flex items-center gap-4">
            {categories.map((c: Category) => {
                const isActive = pathname === `/category/${c.slug}`;  

                return (
                    <li key={c.id}>
                        <Link
                            href={`/category/${c.slug}`}
                            className={
                                isActive
                                    ? "text-sm font-bold text-green-700 border-b-2 border-green-700"
                                    : "text-sm font-medium text-gray-700 hover:text-green-700"
                            }
                        >
                            {c.nameBn}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavCategories;