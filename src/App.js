import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List.js';
import Navbar from './components/Navbar.js';
import Search from './components/Search.js';
import Nominee from './components/Nominee.js';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Create a state object to store search results
  const [movies, setMovies] = useState([]);
  // Store search value
  const [searchInput, setSearchInput] = useState('');
  // Store nominees value
  const [nominees, setNominees] = useState([]);

  const getRequest = async (searchInput) => {
    // Define url using the api key
    const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=75fa15f8`;

    // Use api and fetch the response
    const response = await fetch(url);

    // Convert response from HTTP to JSON format
    const responseFinal = await response.json();

    // Pass the search input only when it's not empty
    if (responseFinal.Search) {
      // Update search results using state
      setMovies(responseFinal.Search);
    }
  }

  // Call getRequest whenever the user types in search
  useEffect(() => {
    getRequest(searchInput);
  }, [searchInput]);

  const addNominee = (movie) => {
    // Create a temp list with the latest nominee added
    const updatedNominees = [...nominees, movie]
    // Update the main list
    setNominees(updatedNominees); 
  }

  return (

    <div className="container-fluid list">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Navbar heading="Popcorn Awards" />
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className="row">
        <List movies={movies} handleNomineesClick={addNominee} nomineeComponent= {Nominee}/>
      </div>
    </div>

  )
};

export default App;
