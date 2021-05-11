import React, { useState } from 'react';

const List = (props) => {
    const NomineeComponent = props.nomineeComponent;

    const [moviesInfo, setMoviesInfo] = useState([]);

    // console.log(props.movies.length);

    // const getMovieInfo = () => {
        
    // }

    // var movieInfo = [];
    // if (props.movies.length !== 0){
    //     for (var i = 0; i < props.movies.length; i++) {
    //         console.log('here')
    //         const info = await fetch(`http://www.omdbapi.com/?t=${props.movies[i].Title}&apikey=75fa15f8`);
    //         const infoRes = await info.json();
    //         console.log('here');
    //         movieInfo.push(infoRes);
    //     }
    //     // Update search results using state
    //     setMoviesInfo(movieInfo);
    
    //     console.log(props.moviesInfo);

    // }

    // getMovieInfo()
    if (props.movies.length != 0){
        return (
            <>
                {props.movies.map((movie, index) =>
                    <div className="mt-8">
                        <a href="#">
                            <img onClick={() => props.handleNomineesClick(movie)} className="hover:opacity-80 transition ease-in-out duration-150" src={movie.Poster} alt="Poster" />
                        </a>
                        <div className="mt-2">
                            <a href="#" className="text-lg mt-2 text-white hover:text-pink-500 transition">{movie.Title}</a>
                            <div className="flex items-center text-gray-400 text-sm mt-1">
                                <svg className="fill-current text-pink-500 w-4 mb-0.5" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star" /></g></svg>
                                <span className="ml-1">P</span>
                                <span className="mx-2">|</span>
                                <span>{movie.Year}</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                                ds
                            </div>
                        </div>
                    </div>)}
    
            </>
        )
    }

    else {
        return (
        <section className="relative flex items-center mb-4 mt-4">
        <div className="container mx-auto">
            <h3 className="text-sm sm:text-sm italic">Type to explore...</h3>
        </div>
    </section>
        )
    }

    
}

export default List;