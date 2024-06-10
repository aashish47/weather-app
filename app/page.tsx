import Current from "@/components/Current";
import TemperatureNavbar from "@/components/navbar/temperature";
import { Weather } from "@/types/Weather";
import { format } from "date-fns";

const Home = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const { latitude = "28.6519", longitude = "77.2315", location = "delhi", unit = "c" } = searchParams;
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=${
            unit === "c" ? "celsius" : "fahrenheit"
        }&timezone=auto`,
        { next: { revalidate: 900 } }
    );
    if (!res.ok) {
        throw new Error("Weather response failed");
    }
    const { current, current_units }: Weather = await res.json();
    const { temperature_2m: temp, time, is_day, weather_code, apparent_temperature } = current;
    const { temperature_2m: tempUnit } = current_units;

    return (
        <div>
            <TemperatureNavbar
                location={location}
                temp={temp}
                unit={tempUnit}
                isDay={is_day}
                weatherCode={weather_code}
            />
            <div className="overflow-auto h-[calc(100vh-96px)] mx-auto max-w-screen-md px-2">
                <Current
                    temp={temp}
                    unit={tempUnit}
                    time={format(time, "dd-MMMM-yyyy p")}
                    isDay={is_day}
                    weatherCode={weather_code}
                    feelsLike={apparent_temperature}
                />
            </div>
        </div>
    );
};

export default Home;
