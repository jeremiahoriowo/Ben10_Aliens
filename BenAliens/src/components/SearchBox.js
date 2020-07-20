import React from "react";

function SearchBox({searchfield, searchChange}){
    return(
        <div className="pa2">
        <input 
            className="pa3 ba bg--green bg-lightest-blue" 
            type="search" 
            placeholder="search aliens" 
            onChange={searchChange}
        />
        </div>
    )
}

export default SearchBox; 