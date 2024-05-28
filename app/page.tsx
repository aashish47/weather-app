const Home = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const { latitude = "28.6519", longitude = "77.2315" } = searchParams;
    const resForecast = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,is_day&timezone=auto`
    );
    const forecast = await resForecast.json();

    return <div className="relative">{forecast.timezone}</div>;
};

export default Home;
