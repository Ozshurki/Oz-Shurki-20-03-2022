import React from "react";
import "./FavoriteCity.css";
import {WiDegrees} from "react-icons/wi";
import useLocalStorage from "use-local-storage";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


interface FavoriteItemInt {
    keyLocation: number;
    cityName: string;
    temperature: number;
    weatherType: string;
    weatherIcon:string
}

const FavoriteCity: React.FC<FavoriteItemInt> = ({keyLocation, cityName, temperature, weatherType, weatherIcon}) => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');

    return (
        <motion.div className="favorite-item-container" layout>
            <img className="weather-img"
                 src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}
                 alt={weatherIcon}/>
            <Link to={`/weather/${keyLocation}`}>
                <div className="favorite-item-content">
                    <div className="city-name">{cityName}</div>
                    <div className="city-temperature">{temperature}
                        <span>
                    <WiDegrees color={theme ? "dark" : "white"} size="1.5rem"/>
                </span></div>
                    <div className="city-weather-type">{weatherType}</div>
                </div>
            </Link>
        </motion.div>
    );
};

export default FavoriteCity;