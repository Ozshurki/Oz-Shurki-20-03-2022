import React, {useEffect, useState} from "react";
import useLocalStorage from "use-local-storage";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {RiCelsiusFill} from "react-icons/ri";
import classNames from "classnames";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import "./HomeContent.css";
import Card from "../card/Card";
import {favoritesActions} from "../../store/slices/favorites";
import {CityType} from "../../shared/types/city";
import {CityDetails} from "../../shared/types/city-details";
import axios from "axios";


const fiveDaysForecast = {
    "Headline": {
        "EffectiveDate": "2022-03-22T13:00:00+01:00",
        "EffectiveEpochDate": 1647950400,
        "Severity": 7,
        "Text": "Breezy Tuesday afternoon",
        "Category": "wind",
        "EndDate": "2022-03-22T19:00:00+01:00",
        "EndEpochDate": 1647972000,
        "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?lang=en-us",
        "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?lang=en-us"
    },
    "DailyForecasts": [
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
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
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
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=1&lang=en-us"
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
                    "Value": 60.0,
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
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=2&lang=en-us"
        },
        {
            "Date": "2022-03-23T07:00:00+01:00",
            "EpochDate": 1648015200,
            "Temperature": {
                "Minimum": {
                    "Value": 37.0,
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
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=3&lang=en-us"
        },
        {
            "Date": "2022-03-24T07:00:00+01:00",
            "EpochDate": 1648101600,
            "Temperature": {
                "Minimum": {
                    "Value": 38.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 66.0,
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
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=4&lang=en-us"
        },
        {
            "Date": "2022-03-25T07:00:00+01:00",
            "EpochDate": 1648188000,
            "Temperature": {
                "Minimum": {
                    "Value": 41.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 66.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/fr/beaucaire/30301/daily-weather-forecast/152909_pc?day=5&lang=en-us"
        }
    ]
}

interface Props {
    cityDetails: CityDetails;
}

const HomeContent: React.FC<Props> = ({cityDetails}) => {

    const [cityName, setCityName] = useState<string>(cityDetails ? cityDetails.cityName : "Tel Aviv");
    const [currentTemperature, setCurrentTemperature] = useState<number>(0);
    const [weatherCurrentType, setWeatherCurrentType] = useState<string>("");
    const [foreCasts, setForeCasts] = useState<any[]>([]);

    const savedCities = useSelector((state: RootStateOrAny) => state.favorites.cities);
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const dispatch = useDispatch();


    const getCurrentConditions = async () => {

        try {
            const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityDetails.key}?apikey=38zL5JJBzB8fxXNTGy04i2HibhNw6E0i`);
            console.log(response);
            console.log(cityDetails.cityName);
            setCurrentTemperature(response.data[0].Temperature.Metric.Value);
            setWeatherCurrentType(response.data[0].WeatherText);
        } catch (err) {
            console.log(err);
        }
    };

    const getForeCast = async () => {
        console.log(cityDetails.cityName, cityDetails.key);
        try {
            const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=152909_PC?apikey=38zL5JJBzB8fxXNTGy04i2HibhNw6E0i`);
            console.log(response);
            setForeCasts(response.data.DailyForecasts);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        //getCurrentConditions();
        //getForeCast();
        setForeCasts(fiveDaysForecast.DailyForecasts);
    }, [cityDetails.key]);

    const saveCity = () => dispatch(favoritesActions.addCity({cityName, currentTemperature, weatherCurrentType}));
    const removeCity = () => dispatch(favoritesActions.deleteCity({cityName}));

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
                            <MdFavoriteBorder color={theme ? "dark" : "white"}
                                              size="1.9rem"
                                              onClick={saveCity}/>
                            <div className="save-city-btn"
                                 onClick={saveCity}>Add to favorites
                            </div>
                        </> :
                        <>
                            <MdFavorite color={theme ? "dark" : "white"}
                                        size="2.5rem"
                                        onClick={removeCity}/>
                            <div className="delete-city-btn"
                                 onClick={removeCity}>Remove from favorites
                            </div>
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
                    foreCasts.map((day, i: number) => {
                        return (
                            <Card key={i}
                                  date={day.Date}
                                  temperature={day.Temperature.Minimum.Value}
                                  weatherType={day.Day.IconPhrase}
                                  animationDelay={i}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default HomeContent;