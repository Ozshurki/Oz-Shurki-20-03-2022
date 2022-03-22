import React from "react";
import "./FavoriteItem.css";
import {WiDegrees} from "react-icons/wi";
import useLocalStorage from "use-local-storage";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


interface FavoriteItemInt {
    keyLocation: number;
    cityName: string;
    temperature: number;
    weatherType: string;
}

const FavoriteItem: React.FC<FavoriteItemInt> = ({keyLocation, cityName, temperature, weatherType}) => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');

    return (
        <motion.div className="favorite-item-container">
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

export default FavoriteItem;