
// import Link from "next/link";
// import { getCategories } from "../lib/api";

// async function CategoryNav() {
//     const categories = await getCategories();

//     return (
//         <nav className="border-t border-base-300">
//             <div className="flex items-center gap-2 overflow-x-auto py-3">
//                 <Link
//                     href="/"
//                     className="btn btn-primary btn-sm shrink-0"
//                 >
//                     হোম
//                 </Link>

//                 {categories.map((category) => (
//                     <Link
//                         key={category.id}
//                         href={`/category/${category.slug}`}
//                         className="btn btn-ghost btn-sm shrink-0"
//                     >
//                         {category.icon} {category.nameBn}
//                     </Link>
//                 ))}
//             </div>
//         </nav>
//     );
// }
// export default CategoryNav;


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../lib/api";

function CategoryNav() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Categories fetch failed:", error);
            }
        }

        loadCategories();
    }, []);

    return (
        <nav className="border-t border-base-300">
            <div className="flex items-center gap-2 overflow-x-auto py-3">
                <Link href="/" className="btn btn-primary btn-sm shrink-0">
                    হোম
                </Link>

                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="btn btn-ghost btn-sm shrink-0"
                    >
                        {category.icon} {category.nameBn}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default CategoryNav;
