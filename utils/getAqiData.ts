interface AQIData {
    [aqiRange: string]: {
        level: string;
        color: string;
    };
}

const aqiData: AQIData = {
    "0-50": {
        level: "Good",
        color: "Green",
    },
    "51-100": {
        level: "Moderate",
        color: "Yellow",
    },
    "101-150": {
        level: "Unhealthy for Sensitive Groups",
        color: "Orange",
    },
    "151-200": {
        level: "Unhealthy",
        color: "Red",
    },
    "201-300": {
        level: "Very Unhealthy",
        color: "Purple",
    },
    "301-500": {
        level: "Hazardous",
        color: "Maroon",
    },
};

export const getAQIData = (aqi: number) => {
    for (const range in aqiData) {
        const [min, max] = range.split("-").map(Number);
        if (aqi >= min && (aqi <= max || max === 500)) {
            return aqiData[range];
        }
    }
    return { level: "unknown", color: "Black" };
};
