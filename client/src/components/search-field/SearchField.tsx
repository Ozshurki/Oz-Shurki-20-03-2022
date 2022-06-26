import React, {useRef, useState} from "react";
import {FaSearchLocation} from "react-icons/fa";
import useLocalStorage from "use-local-storage";
import {AiOutlineClose} from "react-icons/ai";
import classNames from "classnames";
import {useDispatch} from "react-redux";

import "./SearchField.css";
import useDebounce from "../../hooks/useDebounce";
import {getAutoCompleteResults} from "../../apis/ApiServices";

import {modalActions} from "../../store/slices/modal";


interface SearchFieldInt {
    setCity: (key: number, cityName: string, country: string) => void;
}

const SearchField: React.FC<SearchFieldInt> = ({setCity}) => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const [results, setResults] = useState<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const debounce = useDebounce();
    const dispatch = useDispatch();


    const clearText = () => {
        if (inputRef.current === null) return;

        inputRef.current.value = '';
        setResults([]);
    }

    const getInputResults = async () => {

        if (inputRef.current === null) return;

        // Hide results if user delete the input
        if(inputRef.current.value === ''){
            setResults([]);
            return;
        }

        const inputText = inputRef.current?.value;

        try {
            debounce(async () => {
                const results = await getAutoCompleteResults(inputText);
                setResults(results);
            },300);
        } catch (err) {
            dispatch(modalActions.toggleModal());
        }
    };

    const handleClick = (cityDetails: any) => {

        if (inputRef.current === null) return;

        inputRef.current.value = cityDetails.LocalizedName;
        setCity(cityDetails.Key, cityDetails.LocalizedName, cityDetails.Country.LocalizedName);
        setResults([]);
    };

    return (
        <div className="search-field">
            <FaSearchLocation color={theme ? "dark" : "white"} size="1.5rem"/>
            <input type="text"
                   ref={inputRef}
                   placeholder="Enter city..."
                   onChange={getInputResults}/>
            <AiOutlineClose color="black"
                            size="1.5rem"
                            className="clear-text"
                            onClick={clearText}/>
            <div className={classNames("results-container", results.length > 0 && "results")}>
                {results?.map(city => {

                    return (
                        <div className="search-result"
                             key={city?.Key}
                             onClick={() => handleClick(city)}>
                            <div className="city-result">{city?.LocalizedName}</div>
                            <div className="county-result">{city?.Country.LocalizedName}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchField;
