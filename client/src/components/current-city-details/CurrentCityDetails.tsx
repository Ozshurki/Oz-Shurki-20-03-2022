import React from "react";
import "./CurrentCityDetails.css"
import {DegreeType} from "../weather-content/WeatherContent";


interface Props{
    city:string,
    dayTimeImg:string,
    isCelsius:boolean,
    temperature:DegreeType | undefined;
}

const CurrentCityDetails:React.FC<Props>=(props) => {
    return(
        <>
        </>
    )
}

export default CurrentCityDetails;