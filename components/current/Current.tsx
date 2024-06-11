import CurrentDetails from "@/components/current/CurrentDetails";
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
    return (
        <div className="w-full card flex flex-col gap-8">
            <div>
                <h5 className="font-medium capitalize">current weather</h5>
                <h6 className="font-extralight">{time}</h6>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
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
                    <h2 className="font-medium text-center sm:text-left">{weatherCodeData[weatherCode].description}</h2>
                    <div className="flex justify-center sm:justify-start gap-4">
                        <h5 className="capitalize font-extralight">feels like</h5>
                        <h5>{`${feelsLike}${unit}`}</h5>
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
