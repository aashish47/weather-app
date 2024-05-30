import UnitSelector from "@/components/navbar/temperature/unitSelector";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";

interface TemperatureNavbarProps {
    location: string;
    temp: number;
    unit: string;
}

const TemperatureNavbar: React.FC<TemperatureNavbarProps> = ({ location, temp, unit }) => {
    return (
        <div className="w-full sticky top-0 px-2 py-1 bg-gradient-to-b from-slate-900 flex justify-between items-center ">
            <div className="flex gap-2 items-center">
                <HomeModernIcon className="w-6" />
                <p className="text-lg capitalize">{location}</p>
                <p>{`${temp}${unit}`}</p>
            </div>
            <Suspense>
                <UnitSelector />
            </Suspense>
        </div>
    );
};

export default TemperatureNavbar;
