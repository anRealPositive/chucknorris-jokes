// libs
import React, { useEffect, useState } from 'react';

// api
import { fetchData } from '../utils/fetchData';

// context
const JokesContext = React.createContext({});

const JokesProvider = ({children}) => {
    
    const [jokes, setJokes] = useState([]);
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
    apiCall();
  }, []);

  return (
    <JokesContext.Provider
      value={{
        jokes,
        isLoading,
        error,
      }}>
      {children}
    </JokesContext.Provider>
  );
};

export { JokesProvider, JokesContext }