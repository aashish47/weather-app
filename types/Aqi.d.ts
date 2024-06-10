export interface Aqi {
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
        us_aqi: string;
    };
    current: {
        time: string;
        interval: number;
        us_aqi: number;
    };
}
