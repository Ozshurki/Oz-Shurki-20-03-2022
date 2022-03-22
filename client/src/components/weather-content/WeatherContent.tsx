import React, {useEffect, useState} from "react";
import useLocalStorage from "use-local-storage";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {RiCelsiusFill} from "react-icons/ri";
import classNames from "classnames";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import "./WeatherContent.css";
import DailyForeCast from "../daily-forecast/DailyForeCast";
import {favoritesActions} from "../../store/slices/favorites";
import {CityType} from "../../shared/types/city";
import axios from "axios";
import {WiDegrees} from "react-icons/wi";
import {BsToggleOn} from "react-icons/bs";
import CurrentCityDetails from "../current-city-details/CurrentCityDetails";

const currentConditions1 = [
    {
        "LocalObservationDateTime": "2022-03-22T13:11:00+01:00",
        "EpochTime": 1647951060,
        "WeatherText": "Partly sunny",
        "WeatherIcon": 3,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 33.3,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 92.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://www.accuweather.com/en/ng/abuja/254085/current-weather/254085?lang=en-us",
        "Link": "http://www.accuweather.com/en/ng/abuja/254085/current-weather/254085?lang=en-us"
    }
];

const currentConditions2 = [
    {
        "LocalObservationDateTime": "2022-03-22T14:11:00+02:00",
        "EpochTime": 1647951060,
        "WeatherText": "Sunny",
        "WeatherIcon": 1,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 19.3,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 67.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://www.accuweather.com/en/eg/abu-tig/127378/current-weather/127378?lang=en-us",
        "Link": "http://www.accuweather.com/en/eg/abu-tig/127378/current-weather/127378?lang=en-us"
    }
];

const currentConditions3 = [
    {
        "LocalObservationDateTime": "2022-03-22T13:11:00+01:00",
        "EpochTime": 1647951060,
        "WeatherText": "Partly sunny",
        "WeatherIcon": 3,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 33.3,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 92.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://www.accuweather.com/en/ng/abuja/254085/current-weather/254085?lang=en-us",
        "Link": "http://www.accuweather.com/en/ng/abuja/254085/current-weather/254085?lang=en-us"
    }
];


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
};

interface Props {
    locationKey: number;
    city: string;
    country: string;
}

export type DegreeType = {
    celsius: number,
    fahrenheit: number
}


const WeatherContent: React.FC<Props> = ({locationKey, city, country}) => {

    const [currentTemperature, setCurrentTemperature] = useState<DegreeType>();
    const [currentWeatherType, setCurrentWeatherType] = useState<string>("");
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState<string>();
    const [isDayTime, setIsDayTime] = useState<boolean>(true);
    const [foreCasts, setForeCasts] = useState<any[]>([]);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);

    const savedCities = useSelector((state: RootStateOrAny) => state.favorites.cities);
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const dispatch = useDispatch();


    const padNumber = (iconNumber: string | undefined): string => {

        const stringNum = iconNumber + '';
        const strLen = stringNum.length;

        if (strLen === 1)
            return '0' + stringNum;
        else
            return stringNum;

    };

    useEffect(() => {
        const getCurrentConditions = async () => {

            try {
                //const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=38zL5JJBzB8fxXNTGy04i2HibhNw6E0i`);
                //console.log(response);

                const temperature: DegreeType =
                    {
                        celsius: currentConditions2[0].Temperature.Metric.Value,
                        fahrenheit: currentConditions2[0].Temperature.Imperial.Value
                    };
                setCurrentTemperature(temperature);
                setCurrentWeatherType(currentConditions2[0].WeatherText);
                setIsDayTime(currentConditions2[0].IsDayTime);
                setCurrentWeatherIcon(currentConditions2[0].WeatherIcon.toString());

            } catch (err) {
                console.log(err);
            }
        };
        const getForeCast = async () => {

            try {
                //const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=38zL5JJBzB8fxXNTGy04i2HibhNw6E0i`);
                //console.log(response);
                setForeCasts(fiveDaysForecast.DailyForecasts);
            } catch (err) {
                console.log(err);
            }
        };

        getCurrentConditions();
        getForeCast();
    }, [city]);

    const saveCity = () => dispatch(favoritesActions.addCity({
        key: locationKey,
        country: country,
        cityName: city,
        temperature: currentTemperature?.celsius,
        weatherType: currentWeatherType,
        weatherIcon: padNumber(currentWeatherIcon)
    }));
    const removeCity = () => dispatch(favoritesActions.deleteCity({key: locationKey}));

    const dayTimeImage = isDayTime ? "https://previews.123rf.com/images/webstocker/webstocker1707/webstocker170700016/82684366-skyline-della-citt%C3%A0-al-giorno-che-mostra-vettore-di-sole-e-nuvole.jpg"
        : "https://static.vecteezy.com/system/resources/thumbnails/002/042/713/small/city-night-illustration-vector.jpg";

    return (
        <div className="weather-content">
            <div className="row">
                <CurrentCityDetails city={city} dayTimeImg={dayTimeImage} isCelsius={isCelsius} temperature={currentTemperature}/>
                <div className="current-city">
                    <div className="current-city-time">
                        <img src={dayTimeImage} alt="day-time"/>
                    </div>
                    <div className="current-city-content">
                        <div className="city-name">{city}</div>
                        <div className="city-degree">{isCelsius ? currentTemperature?.celsius :
                            currentTemperature?.fahrenheit}
                            <span>
                                <WiDegrees color={theme ? "dark" : "white"} size="1.5rem"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="toggle-degree">
                    <div>Toggle degree</div>
                    <BsToggleOn className="toggle-degree-btn"
                                color={theme ? "dark" : "white"}
                                size="1.7rem"
                                onClick={() => setIsCelsius(!isCelsius)}/>
                </div>
                <div className="save-city-container">
                    {!savedCities.find((existItem: CityType) => existItem.key === locationKey) ?
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
                    {currentWeatherType}
                </div>
            </div>
            <div className="row">
                {
                    foreCasts.map((day, i: number) => {
                        return (
                            <DailyForeCast key={i}
                                           date={day.Date}
                                           minTemperature={day.Temperature.Minimum.Value}
                                           maxTemperature={day.Temperature.Maximum.Value}
                                           weatherType={day.Day.IconPhrase}
                                           animationDelay={i}
                                           weatherIcon={padNumber(day.Day.Icon)}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default WeatherContent;