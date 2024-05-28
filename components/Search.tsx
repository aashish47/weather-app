"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const Search = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    return (
        <div className="relative block ">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="w-5 stroke-neutral-400" />
            </span>

            <input
                className="text-neutral-200 bg-neutral-800 placeholder:italic placeholder:text-neutral-400 block  w-full rounded-md py-2 pl-9 pr-3 shadow-sm outline-none "
                placeholder="Search city"
                type="text"
                name="search"
                onChange={(e) => router.push(pathname + "?" + createQueryString("search", e.target.value))}
            />
        </div>
    );
};

export default Search;
