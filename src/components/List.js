import React from 'react';

const List = (props) => {
    const NomineeComponent = props.nomineeComponent;
        
    return (
        <>
            {props.movies.map((movie, index) =>
                <div className='poster-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='poster'></img>
                    <div onClick={props.handleNomineesClick} className='overlay d-flex align-items-center justify-content-center'>
                        <NomineeComponent />
                    </div>   
                </div>)}

        </>
    )
}

export default List;