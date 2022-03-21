import React, {useEffect, useState} from "react";
import useLocalStorage from "use-local-storage";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {RiCelsiusFill} from "react-icons/ri";

import "./HomeContent.css";
import Card from "../card/Card";
import classNames from "classnames";
import {favoritesActions} from "../../store/slices/favorites";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {CityType} from "../../shared/types/city";


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


const HomeContent: React.FC = () => {

    const [cityName, setCityName] = useState<string>("Tel Aviv");
    const [temperature, setTemperature] = useState<number>(0);
    const [weatherType, setWeatherType] = useState<string>("");
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');

    const savedCities = useSelector((state: RootStateOrAny) => state.favorites.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        setTemperature(fiveDaysForecast.DailyForecasts[0].Temperature.Minimum.Value);
        setWeatherType(fiveDaysForecast.DailyForecasts[0].Day.IconPhrase);


    }, []);

    const saveCity = () => {
        dispatch(favoritesActions.addCity({cityName, temperature, weatherType}));
    };

    const removeCity = () => {
        dispatch(favoritesActions.deleteCity({cityName}));
    };

    return (
        <div className="home-content">
            <div className="row">
                <div className="current-city">
                    <div
                        className={classNames("current-city-img", fiveDaysForecast.DailyForecasts[0].Day.IconPhrase.toLowerCase())}/>
                    <div className="current-city-content">
                        <div className="city-name">Tel-Aviv</div>
                        <div className="city-degree">25
                            <span>
                                <RiCelsiusFill color={theme ? "dark" : "white"} size="0.9rem"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="save-city-container">
                    {!savedCities.find((existItem: CityType) => existItem.cityName === cityName) ?
                        <>
                            <MdFavoriteBorder color={theme ? "dark" : "white"} size="1.9rem" onClick={saveCity}/>
                            <div className="save-city-btn" onClick={saveCity}>Add to favorites</div>
                        </> :
                        <>
                            <MdFavorite color={theme ? "dark" : "white"} size="2.5rem" onClick={removeCity}/>
                            <div className="delete-city-btn" onClick={removeCity}>Remove from favorites</div>
                        </>
                    }
                </div>
            </div>
            <div className="row">
                <div className="clouds-type">
                    {fiveDaysForecast.Headline.Text}
                </div>
            </div>
            <div className="row">
                {
                    fiveDaysForecast.DailyForecasts.map((day, i: number) => {
                        return (
                            <Card key={i}
                                  date={day.Date}
                                  temperature={day.Temperature.Minimum.Value}
                                  weatherType={day.Day.IconPhrase}
                                  delay={i}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default HomeContent;