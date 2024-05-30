import UnitSelector from "@/components/navbar/temperature/unitSelector";
import { HomeModernIcon } from "@heroicons/react/24/solid";

interface TemperatureNavbarProps {
    location: string;
}

const TemperatureNavbar: React.FC<TemperatureNavbarProps> = ({ location }) => {
    return (
        <div className="w-full sticky top-0 px-2 py-1 bg-gradient-to-b from-slate-900 flex justify-between items-center ">
            <div className="flex gap-2">
                <HomeModernIcon className="w-6" />
                <h1 className="text-lg ">{location}</h1>
            </div>
            <UnitSelector />
        </div>
    );
};

export default TemperatureNavbar;
