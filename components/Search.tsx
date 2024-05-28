"use client";

import Dropdown from "@/components/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Search = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );
    const [locations, setLocations] = useState<[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const searchloc = async () => {
            const response = await fetch(`/search?search=${search}`);
            if (response.ok) {
                const { results: locations } = await response.json();
                setLocations(locations);
                setOpen(true);
            } else {
                setLocations([]);
                setOpen(false);
            }
        };

        searchloc();
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
            className="relative block "
        >
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="w-5 stroke-neutral-400" />
            </span>

            <input
                className={`text-neutral-200 bg-neutral-800 placeholder:italic placeholder:text-neutral-400 block  w-full py-2 pl-9 pr-3 shadow-sm outline-none ${
                    locations?.length > 0 && open ? "rounded-t-md" : "rounded-md"
                }`}
                placeholder="Search city"
                type="text"
                name="search"
                value={search ?? ""}
                onChange={(e) => router.push(pathname + "?" + createQueryString("search", e.target.value))}
            />
            {open && (
                <Dropdown
                    setOpen={setOpen}
                    locations={locations}
                />
            )}
        </div>
    );
};

export default Search;
