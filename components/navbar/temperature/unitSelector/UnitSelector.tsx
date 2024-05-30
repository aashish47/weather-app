"use client";

import SelectRadioOptions from "@/components/ui/selectRadioOptions";
import { createQueryStringCallback } from "@/utils/createQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const UnitSelector = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const unitParam = searchParams.get("unit") ?? "c";
    const units: { [key: string]: string } = { "celsius (°c)": "c", "fahrenheit (°f)": "f" };
    const createQueryString = useCallback(createQueryStringCallback, [searchParams]);

    const handleClick = (unit: string) => {
        router.push(pathname + "?" + createQueryString("unit", unit, searchParams));
    };

    return (
        <SelectRadioOptions
            selected={unitParam}
            labels={units}
            handleClick={handleClick}
        />
    );
};

export default UnitSelector;
