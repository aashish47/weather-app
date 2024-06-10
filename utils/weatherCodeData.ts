export interface WeatherCodeData {
    [key: string]: {
        description: string;
        image: {
            [key: string]: string;
        };
    };
}

export default JSON.parse(`{
    "0": {
        "description": "Clear Sky",
        "image": {
            "1": "/clear_day.svg",
            "0": "/clear_night.svg"
        }
    },
    "1": {
        "description": "Mainly Clear",
        "image": {
            "1": "/mostly_clear_day.svg",
            "0": "/mostly_clear_night.svg"
        }
    },
    "2": {
        "description": "Partly Cloudy",
        "image": {
            "1": "/partly_cloudy_day.svg",
            "0": "/partly_cloudy_night.svg"
        }
    },
    "3": {
        "description": "Overcast",
        "image": {
            "1": "/cloudy.svg",
            "0": "/cloudy.svg"
        }
    },
    "45": {
        "description": "Fog",
        "image": {
            "1": "/haze_fog_dust_smoke.svg",
            "0": "/haze_fog_dust_smoke.svg"
        }
    },
    "48": {
        "description": "Depositing Rime Fog",
        "image": {
            "1": "/haze_fog_dust_smoke.svg",
            "0": "/haze_fog_dust_smoke.svg"
        }
    },
    "51": {
        "description": "Light Drizzle",
        "image": {
            "1": "/drizzle.svg",
            "0": "/drizzle.svg"
        }
    },
    "53": {
        "description": "Moderate Drizzle",
        "image": {
            "1": "/drizzle.svg",
            "0": "/drizzle.svg"
        }
    },
    "55": {
        "description": "Dense Intensity Drizzle",
        "image": {
            "1": "/drizzle.svg",
            "0": "/drizzle.svg"
        }
    },
    "56": {
        "description": "Light Freezing Drizzle",
        "image": {
            "1": "/icy.svg",
            "0": "/icy.svg"
        }
    },
    "57": {
        "description": "Dense Freezing Drizzle",
        "image": {
            "1": "/icy.svg",
            "0": "/icy.svg"
        }
    },
    "61": {
        "description": "Slight Rain",
        "image": {
            "1": "/scattered_showers_day.svg",
            "0": "/scattered_showers_night.svg"
        }
    },
    "63": {
        "description": "Moderate Rain",
        "image": {
            "1": "/showers_rain.svg",
            "0": "/showers_rain.svg"
        }
    },
    "65": {
        "description": "Heavy Intensity Rain",
        "image": {
            "1": "/heavy_rain.svg",
            "0": "/heavy_rain.svg"
        }
    },
    "66": {
        "description": "Light Freezing Rain",
        "image": {
            "1": "/icy.svg",
            "0": "/icy.svg"
        }
    },
    "67": {
        "description": "Heavy Intensity Freezing Rain",
        "image": {
            "1": "/icy.svg",
            "0": "/icy.svg"
        }
    },
    "71": {
        "description": "Slight Snow Fall",
        "image": {
            "1": "/flurries.svg",
            "0": "/flurries.svg"
        }
    },
    "73": {
        "description": "Moderate Snow Fall",
        "image": {
            "1": "/showers_snow.svg",
            "0": "/showers_snow.svg"
        }
    },
    "75": {
        "description": "Heavy Intensity Snow Fall",
        "image": {
            "1": "/heavy_snow.svg",
            "0": "/heavy_snow.svg"
        }
    },
    "77": {
        "description": "Snow Grains",
        "image": {
            "1": "/scattered_snow_showers_day.svg",
            "0": "/scattered_snow_showers_night.svg"
        }
    },
    "80": {
        "description": "Slight Rain Showers",
        "image": {
            "1": "/showers_rain.svg",
            "0": "/showers_rain.svg"
        }
    },
    "81": {
        "description": "Moderate Rain Showers",
        "image": {
            "1": "/heavy_rain.svg",
            "0": "/heavy_rain.svg"
        }
    },
    "82": {
        "description": "Violet Rain Showers",
        "image": {
            "1": "mixed_rain_hail_sleet.svg",
            "0": "mixed_rain_hail_sleet.svg"
        }
    },

    "85": {
        "description": "Slight Snow Showers",
        "image": {
            "1": "/showers_snow.svg",
            "0": "/showers_snow.svg"
        }
    },
    "86": {
        "description": "Heavy Snow Showers",
        "image": {
            "1": "/heavy_snow.svg",
            "0": "/heavy_snow.svg"
        }
    },
    "95": {
        "description": "Slight Or Moderate Thunderstorm",
        "image": {
            "1": "/isolated_scattered_thunderstorms_day.svg",
            "0": "/isolated_scattered_thunderstorms_night.svg"
        }
    },
    "96": {
        "description": "Thunderstorm With Slight Hail",
        "image": {
            "1": "/isolated_thunderstorms.svg",
            "0": "/isolated_thunderstorms.svg"
        }
    },
    "99": {
        "description": "Thunderstorm With Heavy Hail",
        "image": {
            "1": "/strong_thunderstorms.svg",
            "0": "/strong_thunderstorms.svg"
        }
    }
}`) as WeatherCodeData;
