// import './App.css';
import './index.css';
import React, { useState, useEffect } from 'react';
import List from './components/List.js';
import Heading from './components/Heading.js';
import Navbar from './components/Navbar.js';
import Search from './components/Search.js';
import Nominee from './components/Nominee.js';
import RemoveNominee from './components/RemoveNominee.js';
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
      // Filter movies only
      const responseFilter = responseFinal.Search.filter((movie) => movie.Type == "movie")
      // Update search results using state
      setMovies(responseFilter);

      for (let index = 0; index < movies.length; index++) {
        // const element = array[index];
        const urlInfo = `http://www.omdbapi.com/?t=${movies[index].Title}&apikey=75fa15f8`;
        const responseInfo = await fetch(urlInfo);
        const responseInfoFinal = await responseInfo.json();

        // movies[index] = [...movies[index], {"Genre": responseInfoFinal.Genre}];
        console.log(responseInfoFinal.Genre)

      }
    }
  }

  // Call getRequest whenever the user types in search
  useEffect(() => {
    getRequest(searchInput);
  }, [searchInput]);

  // Load from local strage when the page loads

  useEffect(() => {
    const movieNominees = JSON.parse(localStorage.getItem('popcorn-awards-nominees'));

    if (movieNominees) {
      setNominees(movieNominees);
    }
  }, []);

  // Save nominees to local Storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem('popcorn-awards-nominees', JSON.stringify(items));
  }

  const addNominee = (movie) => {
    // Create a temp list with the latest nominee added
    const updatedNominees = [...nominees, movie]
    // Update the main list
    setNominees(updatedNominees);
    saveToLocalStorage(updatedNominees);
  }

  const removeNominee = (movie) => {
    // Create a temp list with the latest nominee added
    const updatedNominees = nominees.filter((nominee) => nominee.imdbID != movie.imdbID)
    // Update the main list
    setNominees(updatedNominees);
    saveToLocalStorage(updatedNominees);
  }

  function Greeting() {
    if (movies.length == 0) {
      return (
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto text-center mb-44">
            <h2 className="text-4xl sm:text-8xl">Access <span className="text-pink-500">millions</span> of movies</h2>
            <h3 className="text-2xl sm:text-4xl italic">with Popcorn Awards</h3>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-20">
            <p className="text-center">Search to explore</p>
          </div>
        </section>
      )
    }
    return (
      <div className="container mx-auto px-4 pt-16">
        <div className="popular-movies">
          <h2 className="uppercase tracking-wider text-lg font-semibold">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <List movies={movies} handleNomineesClick={addNominee} nomineeComponent={Nominee} />
          </div>
        </div>
        <div className="nominated-movies">
          <h2 className="uppercase tracking-wider text-lg font-semibold">Nominated Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <List movies={nominees} handleNomineesClick={removeNominee} nomineeComponent={Nominee} />
          </div>
        </div>
      </div>
    )
  }


  return (
      <div className="bg bg-gray-700">
        <header className="top-0 left-0 right-0 z-50">
          <nav>
            <div className="container mx-auto flex flex-col md:flex-row flex items-center justify-between px-4 py-6">
              <Navbar />
              <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            </div>
          </nav>
          <Greeting />
        </header>
      </div>

  )
};

export default App;
