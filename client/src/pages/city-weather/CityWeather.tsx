import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {RootStateOrAny, useSelector} from "react-redux";

import "./CityWeather.css";
import SearchField from "../../components/search-field/SearchField";
import WeatherContent from "../../components/weather-content/WeatherContent";
import {homeVariants} from "../weather/Weather";
import {CityType} from "../../shared/types/city";
import useCity from "../../hooks/useCity";


const CityWeather: React.FC = () => {

    const {id} = useParams<{ id: string }>();
    const {cityName, countryName, locationKey, setCity} = useCity();
    const savedCities = useSelector((state: RootStateOrAny) => state.favorites.cities);

    useEffect(() => {
        savedCities.forEach((city: CityType) => {
            if (city.key.toString() === id) {
                setCity(city.key, city.cityName, city.countryName);
                return;
            }
        });
    }, [id]);

    return (
        <motion.div className="weather-page"
                    variants={homeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
            <SearchField setCity={setCity}/>
            <WeatherContent locationKey={locationKey}
                            city={cityName}
                            country={countryName}/>
        </motion.div>
    );
};

export default CityWeather;
