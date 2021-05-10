import React from 'react';

const Navbar = (props) => {
    return (
        <div className="col text-2xl mx-2 hover:text-pink-500 transition">
            <h1>{props.heading}</h1>
        </div>
    )
}

export default Navbar;