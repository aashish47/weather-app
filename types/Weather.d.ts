export interface Weather {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
        is_day: string;
        weather_code: string;
        apparent_temperature: string;
        relative_humidity_2m: string;
        surface_pressure: string;
        wind_speed_10m: string;
        visibility: string;
        dew_point_2m: string;
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        is_day: number;
        weather_code: number;
        apparent_temperature: number;
        relative_humidity_2m: number;
        surface_pressure: number;
        wind_speed_10m: number;
        visibility: number;
        dew_point_2m: number;
    };
    hourly_units: {
        time: string;
        temperature_2m: string;
        weather_code: string;
        is_day: string;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        weather_code: number[];
        is_day: number[];
    };
    daily_units: {
        time: string;
        weather_code: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    };
}
