import React from 'react';

const Search = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
                className="form-control"
                value= {props.value}
                // Update search with each input value
                onChange={(event) => props.setSearchInput(event.target.value)}
                placeholder="Search">
            </input>
        </div>
    )
};

export default Search;