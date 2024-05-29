"use client";

import Dropdown from "@/components/navbar/main/search/Dropdown";
import { createQueryStringCallback } from "@/utils/createQueryString";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export interface Location {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    timezone: string;
    feature_code: string;
    country_code: string;
    country: string;
    country_id: number;
    population: number;
    postcodes: string[];
    admin1: string;
    admin2: string;
    admin3: string;
    admin4: string;
    admin1_id: number;
    admin2_id: number;
    admin3_id: number;
    admin4_id: number;
}

const Search = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search") ?? "";
    const [locations, setLocations] = useState<Location[]>([]);
    const [open, setOpen] = useState(false);

    const createQueryString = useCallback(createQueryStringCallback, [searchParams]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        router.push(pathname + "?" + createQueryString("search", e.target.value, searchParams));
    };

    useEffect(() => {
        const delaySearch = setTimeout(async () => {
            const response = await fetch(`/api/search?search=${search}`);
            if (response.ok) {
                const { results } = await response.json();
                setLocations(results);
                setOpen(true);
            } else {
                setLocations([]);
                setOpen(false);
            }
        }, 300); // 300ms debounce
        return () => clearTimeout(delaySearch);
    }, [search]);

    return (
        <div
            onFocus={() => setOpen(true)}
            onBlur={(e) => {
                // Check if the related target is within the dropdown

                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpen(false);
                }
            }}
            className="relative"
        >
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="w-5 stroke-neutral-400" />
            </span>

            <input
                className={` bg-neutral-800 placeholder:italic placeholder:text-neutral-400 block  w-full py-2 pl-9 pr-3 shadow-sm outline-none ${
                    locations?.length > 0 && open ? "rounded-t-md" : "rounded-md"
                }`}
                placeholder="Search city"
                type="text"
                name="search"
                value={search ?? ""}
                onChange={(e) => handleChange(e)}
            />
            {open && <Dropdown locations={locations} />}
        </div>
    );
};

export default Search;
