import React from "react";
import {FaSearchLocation} from "react-icons/fa"
import useLocalStorage from "use-local-storage";
import "./SearchField.css"

const SearchField:React.FC = () => {

    const [theme, setTheme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');

    return(
        <div className="search-field">
            <FaSearchLocation color={theme ? "dark" : "white"} size="1.2rem"/>
            <input type="text"
            placeholder="Enter city..."/>
        </div>
    )
}

export default SearchField;