import { getAQIData } from "@/utils/getAqiData";
import React from "react";

interface CurrentDetailsProps {
    aqi: number;
    wind: number;
    humidity: number;
    visibilty: number;
    pressure: number;
    dewPoint: number;
    unit: string;
}

const CurrentDetails: React.FC<CurrentDetailsProps> = ({ aqi, wind, humidity, visibilty, pressure, dewPoint, unit }) => {
    const { color, level } = getAQIData(aqi);
    const aqiColor: { [key: string]: string } = {
        "Green": "bg-green-500",
        "Yellow": "bg-yellow-500",
        "Orange": "bg-orange-500",
        "Red": "bg-red-500",
        "Purple": "bg-purple-950",
        "Maroon": "bg-rose-950",
    };
    const data: { [key: string]: number | string } = {
        "air quality": aqi,
        "wind": `${wind} km/h`,
        "humidity": `${humidity} %`,
        "visibility": `${visibilty / 1000} km`,
        "pressure": `${pressure} hPa`,
        "dew point": `${dewPoint}${unit}`,
    };

    return (
        <div className="grid grid-rows-2 sm:grid-rows-1 grid-flow-col place-content-evenly gap-2">
            {Object.entries(data).map(([key, value]) => (
                <div
                    key={key}
                    className="flex flex-col grow "
                >
                    <h6 className="capitalize font-extralight text-xs">{key}</h6>
                    <div className="flex items-center gap-1">
                        {key === "air quality" && <div className={`${aqiColor[color]} w-2.5 h-2.5 rounded-full`} />}
                        <h4>{value}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CurrentDetails;
