import React from "react";

import "./CardsContainer.css";
import Card from "../card/Card";

const city = [
    {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
    }
];


const fiveDaysForecast = {
    "Headline": {
        "EffectiveDate": "2022-03-20T19:00:00+01:00",
        "EffectiveEpochDate": 1647799200,
        "Severity": 3,
        "Text": "Rain Sunday night",
        "Category": "rain",
        "EndDate": "2022-03-21T07:00:00+01:00",
        "EndEpochDate": 1647842400,
        "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?lang=en-us",
        "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2022-03-20T07:00:00+01:00",
            "EpochDate": 1647756000,
            "Temperature": {
                "Minimum": {
                    "Value": 47.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 7,
                "IconPhrase": "Cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 18,
                "IconPhrase": "Rain",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=1&lang=en-us"
        },
        {
            "Date": "2022-03-21T07:00:00+01:00",
            "EpochDate": 1647842400,
            "Temperature": {
                "Minimum": {
                    "Value": 38.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 57.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=2&lang=en-us"
        },
        {
            "Date": "2022-03-22T07:00:00+01:00",
            "EpochDate": 1647928800,
            "Temperature": {
                "Minimum": {
                    "Value": 37.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 59.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=3&lang=en-us"
        },
        {
            "Date": "2022-03-23T07:00:00+01:00",
            "EpochDate": 1648015200,
            "Temperature": {
                "Minimum": {
                    "Value": 39.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 62.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=4&lang=en-us"
        },
        {
            "Date": "2022-03-24T07:00:00+01:00",
            "EpochDate": 1648101600,
            "Temperature": {
                "Minimum": {
                    "Value": 41.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=5&lang=en-us"
        }
    ]
};

const CardsContainer: React.FC = () => {
    return (
        <div className="cards-container">
            {fiveDaysForecast.DailyForecasts.map((day, i: number) => {
                return (
                    <Card key={i}
                          date={day.Date}
                          temperature={parseInt(String(day.Temperature.Minimum.Value))}
                          weatherType={day.Day.IconPhrase}/>
                );
            })}
        </div>
    );
};

export default CardsContainer;