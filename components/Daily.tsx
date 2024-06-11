import weatherCodeData from "@/utils/weatherCodeData";
import Image from "next/image";
interface DailyProps {
    max: number[];
    min: number[];
    weatherCode: number[];
    unit: string;
    time: string[];
}

const Daily: React.FC<DailyProps> = ({ max, min, weatherCode, unit, time }) => {
    return (
        <div>
            <h4 className="py-2 capitalize font-medium">14 days forecast</h4>
            <div className="flex overflow-auto gap-2">
                {max.map((maxTemp, index) => (
                    <div
                        key={index}
                        className=" flex flex-col gap-2 card mb-2"
                    >
                        <h6 className="font-light text-sm">{time[index]}</h6>
                        <div className="flex gap-4 w-max">
                            <Image
                                alt="weather icon"
                                src={weatherCodeData[weatherCode[index]].image[1]}
                                width={42}
                                height={42}
                                className="h-[42px] w-[42px]"
                            />
                            <div className="flex flex-col gap-2">
                                <h4>{`${maxTemp}${unit}`}</h4>
                                <h4>{`${min[index]}${unit}`}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Daily;
