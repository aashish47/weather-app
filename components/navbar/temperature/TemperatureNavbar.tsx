import UnitSelector from "@/components/navbar/temperature/unitSelector";
import weatherCodeData from "@/utils/weatherCodeData";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

interface TemperatureNavbarProps {
    location: string;
    temp: number;
    unit: string;
    isDay: number;
    weatherCode: number;
}

const TemperatureNavbar: React.FC<TemperatureNavbarProps> = ({ location, temp, unit, isDay, weatherCode }) => {
    return (
        <div className="w-full sticky top-0 px-2 py-1 z-10 flex justify-between items-center gap-1 ">
            <div className="flex gap-1 text-sm text-nowrap min-w-[200px]">
                <HomeModernIcon className="w-5 shrink-0" />
                <p className="capitalize overflow-hidden text-ellipsis mr-2">{location}</p>
                <Image
                    alt="weather icon"
                    src={weatherCodeData[weatherCode].image[isDay]}
                    width={20}
                    height={20}
                />
                <p>{`${temp}${unit}`}</p>
            </div>

            <Suspense>
                <UnitSelector />
            </Suspense>
        </div>
    );
};

export default TemperatureNavbar;
