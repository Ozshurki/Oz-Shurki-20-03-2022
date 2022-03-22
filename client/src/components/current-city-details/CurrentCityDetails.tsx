import React from "react";
import {WiDegrees} from "react-icons/wi";
import {BsToggleOn} from "react-icons/bs";
import useLocalStorage from "use-local-storage";

import "./CurrentCityDetails.css";
import SaveCity from "../save-city/SaveCity";
import {DegreeType} from "../../shared/types/degree";


interface Props {
    city: string,
    country: string,
    dayTimeImg: string,
    isCelsius: boolean,
    temperature: DegreeType | undefined;
    toggleCelsius: () => void;
    locationKey: number;
    weatherIcon: string | undefined;
    weatherType: string;
}

const CurrentCityDetails: React.FC<Props> = (props) => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');

    return (
        <>
            <div className="current-city">
                <div className="current-city-time">
                    <img src={props.dayTimeImg} alt="day-time"/>
                </div>
                <div className="current-city-content">
                    <div className="city-name">{props.city}</div>
                    <div className="city-degree">{props.isCelsius ? props.temperature?.celsius :
                        props.temperature?.fahrenheit}
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
                            onClick={props.toggleCelsius}/>
            </div>
            <SaveCity locationKey={props.locationKey}
                      city={props.city}
                      country={props.country}
                      temperature={props.temperature}
                      weatherIcon={props.weatherIcon}
                      weatherType={props.weatherType}/>
        </>
    );
};

export default CurrentCityDetails;