import React from "react";

import "./ForeCastContainer.css";
import DailyForeCast from "../daily-forecast/DailyForeCast";
import {padNumber} from "../../utils/functions/pad-number";



interface ForeCastContainerInt {
    foreCasts: any[];
}


const ForeCastContainer: React.FC<ForeCastContainerInt> = ({foreCasts}) => {
    return (
        <>
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
        </>
    );
};

export default ForeCastContainer;