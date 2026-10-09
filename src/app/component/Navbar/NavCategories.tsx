import { useEffect, useState } from "react";
import Link from "next/link";
import { FatchCategories } from "../FatchApi/FatchApi";

interface Category {
    icon: string;
    id: string;
    nameBn: string;
    slug: string;
}

const NavCategories = () => {

    const [categories, setCategories] = useState<Category[]>([]);


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
                        href={`/category/${c.id}`}
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