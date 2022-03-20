import React from "react";
import {FaSearchLocation} from "react-icons/fa"
import "./SearchField.css"

const SearchField:React.FC = () => {
    return(
        <div className="search-field">
            <FaSearchLocation color="black" size="1.2rem"/>
            <input type="text"
            placeholder="Enter city..."/>
        </div>
    )
}

export default SearchField;