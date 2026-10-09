import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FatchCategories } from "../FatchApi/FatchApi";
import { Category } from "@/app/type/Type";
import { bazarContext } from "@/app/context/bazarContext";
const NavCategories = () => {

    const {categories, setCategories} = useContext(bazarContext);


    useEffect(() => {
        fetch(`${FatchCategories}`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <ul className="flex items-center gap-4">
            {categories.map((c: Category) => (
                <li key={c.id}>
                    <Link
                        href={`/category/${c?.slug }`}
                        className="text-sm font-medium text-gray-700 hover:text-green-700"
                    >
                        {c.nameBn}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavCategories;