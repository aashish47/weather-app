"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface HourlyProps {
    temp: number[];
    weatherCode: number[];
    time: string[];
    isDay: number[];
    unit: string;
}

const Hourly: React.FC<HourlyProps> = ({ temp, weatherCode, time, isDay, unit }) => {
    const data = [];
    for (let i = 0; i < temp.length; i++) {
        data.push({ temp: temp[i], time: time[i] });
    }
    console.log(data);
    const color = "#f472b6";
    return (
        <div>
            <h4 className="py-2 capitalize font-medium">24 hour forecast</h4>
            <div className="w-full h-80 card ">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <AreaChart data={data}>
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
                            tick={{ fill: "#e5e5e5", fontWeight: 300, fontSize: "0.875rem" }}
                        />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="temp"
                            stroke={color}
                            fillOpacity={1}
                            fill="url(#colorTemp)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Hourly;
