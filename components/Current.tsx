import CurrentDetails from "@/components/CurrentDetails";
import { getAQIData } from "@/utils/getAqiData";
import weatherCodeData from "@/utils/weatherCodeData";
import Image from "next/image";

interface CurrentProps {
    temp: number;
    unit: string;
    isDay: number;
    time: string;
    weatherCode: number;
    feelsLike: number;
    aqi: number;
    humidity: number;
    wind: number;
    pressure: number;
    visibility: number;
    dewPoint: number;
}

const Current: React.FC<CurrentProps> = ({ temp, unit, isDay, time, weatherCode, feelsLike, aqi, humidity, wind, pressure, visibility, dewPoint }) => {
    const { color, level } = getAQIData(aqi);
    const aqiColor: { [key: string]: string } = {
        "Green": "bg-green-500",
        "Yellow": "bg-yellow-500",
        "Orange": "bg-orange-500",
        "Red": "bg-red-500",
        "Purple": "bg-purple-950",
        "Maroon": "bg-rose-950",
    };
    return (
        <div className="w-full bg-black bg-opacity-20 rounded-md p-2 md:p-4 flex flex-col gap-8">
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
                        <div>{`${feelsLike}${unit}`}</div>
                    </div>
                </div>
            </div>
            <CurrentDetails
                aqi={aqi}
                wind={wind}
                humidity={humidity}
                visibilty={visibility}
                pressure={pressure}
                dewPoint={dewPoint}
                unit={unit}
            />
        </div>
    );
};

export default Current;
