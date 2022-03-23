import React from "react";

import "./ForeCastContainer.css";
import DailyForeCast from "../daily-forecast/DailyForeCast";
import {padNumber} from "../../utils/functions/pad-number";
import {convertFahrenheit} from "../../utils/functions/convert-fahrenheit";



interface ForeCastContainerInt {
    foreCasts: any[];
    isCelsius: boolean;
}


const ForeCastContainer: React.FC<ForeCastContainerInt> = ({foreCasts,isCelsius}) => {
    return (
        <>
            {
                foreCasts.map((day, i: number) => {
                    return (
                        <DailyForeCast key={i}
                                       date={day.Date}
                                       minTemperature={isCelsius ? convertFahrenheit(day.Temperature.Minimum.Value) : day.Temperature.Minimum.Value}
                                       maxTemperature={isCelsius ? convertFahrenheit(day.Temperature.Maximum.Value) : day.Temperature.Maximum.Value}
                                       weatherType={day.Day.IconPhrase}
                                       animationDelay={i}
                                       weatherIcon={padNumber(day.Day.Icon)}/>
                    );
                })
            }
        </>
    );
};

export default ForeCastContainer;