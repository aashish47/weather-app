"use client";

import { createQueryStringCallback } from "@/utils/createQueryString";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

// interface UnitSelectorProps {
//     unit: string;
// }

const UnitSelector = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitParam = searchParams.get("unit") ?? "C";
    const units: { [key: string]: string } = { c: "celsius (°c)", f: "fahrenheit (°f)" };
    const createQueryString = useCallback(createQueryStringCallback, [searchParams]);

    const handleChange = (unit: string) => {
        router.push(pathname + "?" + createQueryString("unit", unit, searchParams));
    };

    return (
        <div
            className="relative"
            onClick={() => setOpen(!open)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpen(false);
                }
            }}
        >
            <button className=" bg-white bg-opacity-10 rounded-md text-xl w-12 h-10 px-1 flex gap-1 justify-between items-center capitalize">
                {`°${unitParam}`}
                {open ? <ChevronDownIcon width={12} /> : <ChevronUpIcon width={12} />}
            </button>
            {open && (
                <div className="absolute bg-neutral-800 rounded-md right-0 mt-1 flex flex-col ">
                    {Object.keys(units).map((unit) => (
                        <button
                            key={unit}
                            onClick={() => handleChange(unit)}
                            className="text-nowrap flex items-center gap-2 first:rounded-t-md last:rounded-b-md px-2 py-1 font-light last:border-t border-neutral-600 hover:bg-neutral-700 active:bg-neutral-600 capitalize"
                        >
                            <div className={`w-2 h-2 ring-2 ring-neutral-100 rounded-full ${unit === unitParam ? "bg-pink-400" : "bg-white"}`} />

                            {`${units[unit]}`}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UnitSelector;
