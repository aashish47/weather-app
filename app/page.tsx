import Daily from "@/components/Daily";
import Current from "@/components/current";
import TemperatureNavbar from "@/components/navbar/temperature";
import { Aqi } from "@/types/Aqi";
import { Weather } from "@/types/Weather";
import { format } from "date-fns";
import dynamic from "next/dynamic";
const Hourly = dynamic(() => import("@/components/Hourly"), { ssr: false });

const Home = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const { latitude = "28.6519", longitude = "77.2315", location = "delhi", unit = "c" } = searchParams;
    let resForecast = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code,apparent_temperature,relative_humidity_2m,surface_pressure,wind_speed_10m,visibility,dew_point_2m&hourly=temperature_2m,weather_code,is_day&forecast_hours=24&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=14&temperature_unit=${
            unit === "c" ? "celsius" : "fahrenheit"
        }&timezone=auto`,
        { next: { revalidate: 900 } }
    );
    if (!resForecast.ok) {
        throw new Error("Weather response failed");
    }
    const resAqi = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`, {
        next: { revalidate: 3600 },
    });
    const { current, current_units, daily, hourly }: Weather = await resForecast.json();
    const {
        temperature_2m: temp,
        time,
        is_day,
        weather_code,
        apparent_temperature,
        relative_humidity_2m,
        wind_speed_10m,
        surface_pressure,
        visibility,
        dew_point_2m,
    } = current;
    const { temperature_2m: tempUnit } = current_units;
    const { temperature_2m_max: max, temperature_2m_min: min, weather_code: dailyWeatherCode, time: dailyTime } = daily;
    const { is_day: hourlyIsDay, time: hourlyTime, temperature_2m: hourlyTemp, weather_code: hourlyWeatherCode } = hourly;
    const { current: aqiData }: Aqi = await resAqi.json();
    const { us_aqi: aqi } = aqiData;

    return (
        <div>
            <TemperatureNavbar
                location={location}
                temp={temp}
                unit={tempUnit}
                isDay={is_day}
                weatherCode={weather_code}
            />
            <div className="overflow-auto h-[calc(100vh-96px)]">
                <div className=" mx-auto max-w-screen-md px-2 py-8">
                    <Current
                        temp={temp}
                        unit={tempUnit}
                        time={format(time, "dd-MMMM-yyyy p")}
                        isDay={is_day}
                        weatherCode={weather_code}
                        feelsLike={apparent_temperature}
                        aqi={aqi}
                        humidity={relative_humidity_2m}
                        wind={wind_speed_10m}
                        pressure={surface_pressure}
                        visibility={visibility}
                        dewPoint={dew_point_2m}
                    />
                    <Daily
                        max={max}
                        min={min}
                        weatherCode={dailyWeatherCode}
                        unit={tempUnit}
                        time={dailyTime.map((time) => format(time, "eee d"))}
                    />
                    <Hourly
                        temp={hourlyTemp}
                        weatherCode={hourlyWeatherCode}
                        time={hourlyTime.map((time) => format(time, "h a"))}
                        isDay={hourlyIsDay}
                        unit={tempUnit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
