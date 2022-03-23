import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import "./WeatherContent.css";
import CurrentCityDetails from "../current-city-details/CurrentCityDetails";
import ForeCastContainer from "../forecasts-container/ForeCastContainer";
import {DegreeType} from "../../shared/types/degree";
import {getCurrentConditionsResults, getForeCastResults} from "../../apis/ApiServices";
import {modalActions} from "../../store/slices/modal";

interface Props {
    locationKey: number;
    city: string;
    country: string;
}


const WeatherContent: React.FC<Props> = ({locationKey, city, country}) => {

    const [currentTemperature, setCurrentTemperature] = useState<DegreeType>();
    const [currentWeatherType, setCurrentWeatherType] = useState<string>("");
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState<string>();
    const [isDayTime, setIsDayTime] = useState<boolean>(true);
    const [foreCasts, setForeCasts] = useState<any[]>([]);
    const [isCelsius, setIsCelsius] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleCelsius = () => setIsCelsius(!isCelsius);

    const getCurrentConditions = useCallback(async () => {
        try {
            const results = await getCurrentConditionsResults(locationKey);

            if (results.length > 0) {
                const temperature: DegreeType =
                    {
                        celsius: results[0].Temperature.Metric.Value,
                        fahrenheit: results[0].Temperature.Imperial.Value
                    };

                setCurrentTemperature(temperature);
                setCurrentWeatherType(results[0].WeatherText);
                setIsDayTime(results[0].IsDayTime);
                setCurrentWeatherIcon(results[0].WeatherIcon.toString());
            }

        } catch (err) {
            dispatch(modalActions.toggleModal());
        }
    }, [locationKey]);

    const getForeCast = useCallback(async () => {
        try {

            const results = await getForeCastResults(locationKey);

            if (results.DailyForecasts)
                setForeCasts(results.DailyForecasts);

        } catch (err) {
            dispatch(modalActions.toggleModal());
        }
    }, [locationKey]);

    useEffect(() => {

        getCurrentConditions();
        getForeCast();

    }, [getCurrentConditions, getForeCast]);

    const dayTimeImage = isDayTime ? "https://previews.123rf.com/images/webstocker/webstocker1707/webstocker170700016/82684366-skyline-della-citt%C3%A0-al-giorno-che-mostra-vettore-di-sole-e-nuvole.jpg"
        : "https://static.vecteezy.com/system/resources/thumbnails/002/042/713/small/city-night-illustration-vector.jpg";

    return (
        <div className="weather-content">
            <div className="row">
                <CurrentCityDetails city={city}
                                    country={country}
                                    dayTimeImg={dayTimeImage}
                                    isCelsius={isCelsius}
                                    temperature={currentTemperature}
                                    toggleCelsius={handleCelsius}
                                    locationKey={locationKey}
                                    weatherIcon={currentWeatherIcon}
                                    weatherType={currentWeatherType}/>
            </div>
            <div className="row">
                <div className="clouds-type">
                    {currentWeatherType}
                </div>
            </div>
            <div className="row">
                <ForeCastContainer foreCasts={foreCasts}
                                   isCelsius={isCelsius}/>
            </div>
        </div>
    );
};

export default WeatherContent;