// libs
import React, { useEffect, useState } from 'react';

// api
import { fetchData } from '../utils/fetchData';

// local storage
import { setItem, getItem } from '../utils/localStorage';

// context
const JokesContext = React.createContext({});

const JokesProvider = ({children}) => {
    const [jokes, setJokes] = useState([]);
    const [favouriteJokes, setFavouriteJokes] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const apiCall = async () => {
        const response = await fetchData();
        console.log('response', response);
  
        setJokes(response.jokes);
        setIsLoading(response.isLoading);
        setError(response.error);
    };

    useEffect(() => {
      if (favouriteJokes.length) {
        setItem('jokes', favouriteJokes);
      }
    }, [favouriteJokes]);

    useEffect(() => {
      const jokesFromLocalStorage = getItem('jokes');
      if (jokesFromLocalStorage) setFavouriteJokes(jokesFromLocalStorage);
    }, []);

    const addJokeToFavourite = id => {
      if (favouriteJokes.find(joke => joke.id === id)) return;
  
      const favouriteJoke = jokes.find(joke => joke.id === id);
  
      const jokesFromLocalStorage = getItem('jokes');
      if (jokesFromLocalStorage && jokesFromLocalStorage.length >= 10) return;
  
      setFavouriteJokes([favouriteJoke, ...favouriteJokes]);
    };

    const deleteJokeFromFavourite = id => {
      const updatedFavouriteJokes = favouriteJokes.filter(joke => joke.id !== id);
      setFavouriteJokes(updatedFavouriteJokes);
    };

    useEffect(() => {
      apiCall();
    }, []);

  return (
    <JokesContext.Provider
      value={{
        jokes,
        isLoading,
        error,
        favouriteJokes,
        addJokeToFavourite,
        deleteJokeFromFavourite,
      }}>
      {children}
    </JokesContext.Provider>
  );
};

export { JokesProvider, JokesContext }