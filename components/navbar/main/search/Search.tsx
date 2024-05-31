"use client";

import Dropdown from "@/components/navbar/main/search/Dropdown";
import { Geolocation } from "@/types/Geolocation";
import { createQueryStringCallback } from "@/utils/createQueryString";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const cache = new Map();

const Search = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchParam = searchParams.get("search") ?? "";
    const [locations, setLocations] = useState<Geolocation[]>([]);
    const [open, setOpen] = useState(false);
    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | undefined>(undefined);
    const typingDelay = 500;

    const createQueryString = useCallback(createQueryStringCallback, [searchParams]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(typingTimer);
        const newTimer = setTimeout(searchLocations, typingDelay, event.target.value);
        setTypingTimer(newTimer);
    };

    const searchLocations = (search: string) => {
        router.push(pathname + "?" + createQueryString("search", search, searchParams));
    };

    useEffect(() => {
        const search = async () => {
            if (cache.has(searchParam)) {
                setLocations(cache.get(searchParam));
                setOpen(true);
            } else {
                const response = await fetch(`/api/search?search=${searchParam}`);
                if (response.ok) {
                    const { results } = await response.json();
                    cache.set(searchParam, results);
                    setLocations(results);
                    setOpen(true);
                } else {
                    setLocations([]);
                    setOpen(false);
                }
            }
        };
        search();
    }, [searchParam]);

    return (
        <div
            onFocus={() => setOpen(true)}
            onBlur={(e) => {
                // Check if the related target is within the dropdown
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpen(false);
                }
            }}
            className="relative w-full sm:w-fit"
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
                onChange={handleChange}
            />
            {open && <Dropdown locations={locations} />}
        </div>
    );
};

export default Search;
