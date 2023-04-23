import React from "react";
import { FaSearch } from 'react-icons/fa';

function Filter({searching}){


    return (
        <form className="searchfor">
            <input type="text" className="search-input" onChange={searching} placeholder="Search for Transactions here"></input>
            <i>< FaSearch/></i>
        </form>
    )
}

export default Filter