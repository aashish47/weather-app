"use client";

import weatherCodeData from "@/utils/weatherCodeData";
import Image from "next/image";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface HourlyProps {
    temp: number[];
    weatherCode: number[];
    time: string[];
    isDay: number[];
    unit: string;
}

interface ChartsData {
    temp: number;
    weatherCode: number;
    isDay: number;
    time: string;
    unit: string;
}

const Hourly: React.FC<HourlyProps> = ({ temp, weatherCode, time, isDay, unit }) => {
    const data: ChartsData[] = temp.map((value, index) => ({
        temp: value,
        time: time[index],
        weatherCode: weatherCode[index],
        isDay: isDay[index],
        unit,
    }));

    const color = "#f472b6";
    const labelStyle = { fill: "#e5e5e5", fontWeight: 300, fontSize: "0.875rem" };
    return (
        <div>
            <h4 className="py-2 capitalize font-medium">24 hour forecast</h4>
            <div className="w-full h-72 card ">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <AreaChart
                        data={data}
                        margin={{ left: 20, right: 20, top: 40 }}
                        // @ts-ignore
                        baseValue="dataMin"
                    >
                        <defs>
                            <linearGradient
                                id="colorTemp"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor={color}
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={color}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="time"
                            tick={labelStyle}
                            axisLine={{ stroke: "white" }}
                            tickLine={false}
                        />
                        <Tooltip content={CustomToolTip} />
                        <Area
                            type="monotone"
                            dataKey="temp"
                            stroke={color}
                            strokeWidth={4}
                            fillOpacity={1}
                            fill="url(#colorTemp)"
                            label={{
                                content: ({ value, x, y, index }: any) => {
                                    const { weatherCode, isDay } = data[index];
                                    const showLabel = index % 4 === 1;
                                    return showLabel ? (
                                        <g>
                                            <text
                                                x={x}
                                                y={y}
                                                dy={-15}
                                                style={{ ...labelStyle }}
                                            >
                                                {`${value}${unit}`}
                                            </text>
                                            <image
                                                href={weatherCodeData[weatherCode].image[isDay]}
                                                x={x - 25}
                                                y={y - 30}
                                                width={20}
                                                height={20}
                                            />
                                        </g>
                                    ) : null;
                                },
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const CustomToolTip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const { temp, time, weatherCode, isDay, unit } = payload[0].payload;
        return (
            <div className="card bg-neutral-800">
                <h5 className="font-light">{time}</h5>
                <div className="flex gap-2 mt-1">
                    <Image
                        alt="weather icon"
                        src={weatherCodeData[weatherCode].image[isDay]}
                        width={20}
                        height={20}
                    />
                    <h5>{`${temp}${unit}`}</h5>
                </div>
            </div>
        );
    }
};

export default Hourly;
