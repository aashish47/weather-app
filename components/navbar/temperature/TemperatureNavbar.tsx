import UnitSelector from "@/components/navbar/temperature/unitSelector";
import weatherCodeData from "@/utils/weatherCodeData";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

interface TemperatureNavbarProps {
    location: string;
    temp: number;
    unit: string;
    time: string;
    isDay: number;
    weatherCode: number;
}

const TemperatureNavbar: React.FC<TemperatureNavbarProps> = ({ location, temp, unit, time, isDay, weatherCode }) => {
    return (
        <div className="w-full sticky top-0 px-2 py-1 bg-gradient-to-b from-slate-900 flex justify-between items-center ">
            <div className="flex gap-2 items-center">
                <HomeModernIcon className="w-10 self-end" />
                <div className="flex flex-col text-nowrap max-w-[155px] sm:max-w-fit">
                    <div className="flex gap-2 items-center">
                        <p className="text-lg capitalize overflow-hidden text-ellipsis sm:overflow-visible">{location}</p>
                        <p>{`${temp}${unit}`}</p>
                    </div>
                    <p className="font-light text-sm">{time}</p>
                </div>
                <div className="group relative hover:cursor-pointer ">
                    <Image
                        alt="weather icon"
                        src={weatherCodeData[weatherCode].image[isDay]}
                        width={48}
                        height={48}
                    />
                    <div className="hidden group-hover:block px-2 py-1 bg-black font-light text-sm absolute text-nowrap rounded-md top-full right-0">
                        {weatherCodeData[weatherCode].description}{" "}
                    </div>
                </div>
            </div>
            <Suspense>
                <UnitSelector />
            </Suspense>
        </div>
    );
};

export default TemperatureNavbar;
