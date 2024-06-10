import weatherCodeData from "@/utils/weatherCodeData";
import Image from "next/image";

interface CurrentProps {
    temp: number;
    unit: string;
    isDay: number;
    time: string;
    weatherCode: number;
    feelsLike: number;
}

const Current: React.FC<CurrentProps> = ({ temp, unit, isDay, time, weatherCode, feelsLike }) => {
    return (
        <div className="w-full bg-black bg-opacity-20 rounded p-2 md:p-4 flex flex-col gap-4">
            <div>
                <p className="font-medium capitalize text-sm">current weather</p>
                <p className="font-extralight text-xs">{time}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-10 items-center">
                <div className="flex gap-1 items-center shrink-0">
                    <Image
                        alt="weather icon"
                        src={weatherCodeData[weatherCode].image[isDay]}
                        width={64}
                        height={64}
                    />
                    <div className="flex items-start">
                        <div className="text-6xl">{temp}</div>
                        <div className="text-3xl">{unit}</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-lg sm:text-xl font-medium text-center sm:text-left">{weatherCodeData[weatherCode].description}</div>
                    <div className="flex justify-center sm:justify-start text-sm gap-4">
                        <div className="capitalize font-extralight">feels like</div>
                        <div className="">{`${feelsLike}${unit}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current;
