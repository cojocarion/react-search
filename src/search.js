import {useHistory} from 'react-router-dom';
import React, {useEffect} from "react";
import {css} from "@emotion/css";

const SearchBar = ({searchQuery, setSearchQuery}) => {
    const history = useHistory();

    useEffect(() => {
        history.push(`?search=${searchQuery}`);
    }, [searchQuery, history])

    return (
        <div>
            <div className={css`
                              position: relative;
                              padding: 15px 0 0;
                              border-radius: 4px;
                              margin-top: 10px;
                              width: 50%;`}>
            </div>
            <input
                className={css`padding: 10px; width: 95%;`}
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                name="s"
            />
        </div>
    );
};

export default SearchBar;
