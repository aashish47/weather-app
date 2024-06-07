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
            "1": "/clear_day.png",
            "0": "/clear_night.png"
        }
    },
    "1": {
        "description": "Mainly Clear",
        "image": {
            "1": "/mostly_clear_day.png",
            "0": "/mostly_clear_night.png"
        }
    },
    "2": {
        "description": "Partly Cloudy",
        "image": {
            "0": "/partly_cloudy_day.png",
            "1": "/partly_cloudy_night.png"
        }
    },
    "3": {
        "description": "Overcast",
        "image": {
            "1": "/cloudy.png",
            "0": "/cloudy.png"
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
            "1": "/drizzle.png",
            "0": "/drizzle.png"
        }
    },
    "53": {
        "description": "Moderate Drizzle",
        "image": {
            "1": "/drizzle.png",
            "0": "/drizzle.png"
        }
    },
    "55": {
        "description": "Dense Intensity Drizzle",
        "image": {
            "1": "/drizzle.png",
            "0": "/drizzle.png"
        }
    },
    "56": {
        "description": "Light Freezing Drizzle",
        "image": {
            "1": "/icy.png",
            "0": "/icy.png"
        }
    },
    "57": {
        "description": "Dense Freezing Drizzle",
        "image": {
            "1": "/icy.png",
            "0": "/icy.png"
        }
    },
    "61": {
        "description": "Slight Rain",
        "image": {
            "1": "/cloudy_with_rain.png",
            "0": "/cloudy_with_rain.png"
        }
    },
    "63": {
        "description": "Moderate Rain",
        "image": {
            "1": "/scattered_showers_day.png",
            "0": "/scattered_showers_night.png"
        }
    },
    "65": {
        "description": "Heavy Intensity Rain",
        "image": {
            "1": "/showers_rain.png",
            "0": "/showers_rain.png"
        }
    },
    "66": {
        "description": "Light Freezing Rain",
        "image": {
            "1": "/icy.png",
            "0": "/icy.png"
        }
    },
    "67": {
        "description": "Heavy Intensity Freezing Rain",
        "image": {
            "1": "/icy.png",
            "0": "/icy.png"
        }
    },
    "71": {
        "description": "Slight Snow",
        "image": {
            "1": "/cloudy_with_snow.png",
            "0": "/cloudy_with_snow.png"
        }
    },
    "73": {
        "description": "Moderate Snow",
        "image": {
            "1": "/flurries.png",
            "0": "/flurries.png"
        }
    },
    "75": {
        "description": "Heavy Intensity Snow",
        "image": {
            "1": "/heavy_snow.png",
            "0": "/heavy_snow.png"
        }
    },
    "77": {
        "description": "Snow Grains",
        "image": {
            "1": "/scattered_snow_showers_day.png",
            "0": "/scattered_snow_showers_night.png"
        }
    },
    "80": {
        "description": "Slight Rain Showers",
        "image": {
            "1": "/scattered_showers_day.png",
            "0": "/scattered_showers_night.png"
        }
    },
    "81": {
        "description": "Moderate Showers",
        "image": {
            "1": "/scattered_showers_day.png",
            "0": "/scattered_showers_night.png"
        }
    },
    "82": {
        "description": "Violet Showers",
        "image": {
            "1": "mixed_rain_hail_sleet.png",
            "0": "mixed_rain_hail_sleet.png"
        }
    },

    "85": {
        "description": "Slight Snow Showers",
        "image": {
            "1": "/showers_snow.png",
            "0": "/showers_snow.png"
        }
    },
    "86": {
        "description": "Heavy Snow Showers",
        "image": {
            "1": "/heavy_snow.png",
            "0": "/heavy_snow.png"
        }
    },
    "95": {
        "description": "Slight Or Moderate Thunderstorm",
        "image": {
            "1": "/isolated_scattered_thunderstorms_day.png",
            "0": "/isolated_scattered_thunderstorms_night.png"
        }
    },
    "96": {
        "description": "Thunderstorms With Slight Hail",
        "image": {
            "1": "/isolated_thunderstorms.png",
            "0": "/isolated_thunderstorms.png"
        }
    },
    "99": {
        "description": "Thunderstorm With Heavy Hail",
        "image": {
            "1": "/isolated_thunderstorms.png",
            "0": "/isolated_thunderstorms.png"
        }
    }
}`);
