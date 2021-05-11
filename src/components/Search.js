import React from 'react';

const Search = (props) => {
    return (
        <div className="flex flex-col md:flex-row item-center">
            <div className="relative mb-3 md:mt-0">
                <input
                    type="text"
                    className="bg-gray-800 rounded-full w64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
                    value={props.value}
                    // Update search with each input value
                    onChange={(event) => props.setSearchInput(event.target.value)}
                    placeholder="  Search">
                </input>
                <div className="absolute top-0">
                                <svg className="fill-current w-4 text-gray-500 mt-2 ml-2.5" viewBox="0 0 24 24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/></svg>
                </div>
            </div>
        </div>
    )
};

export default Search;