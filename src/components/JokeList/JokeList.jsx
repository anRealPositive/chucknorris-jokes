// libs
import React, { useContext } from 'react';

// components
import JokeItem from '../JokeItem';

// context
import { JokesContext } from '../../context/JokesProvider';

const JokeList = ({ isFavouriteJokes }) => {
    const { jokes, favouriteJokes } = useContext(JokesContext);

    const currentJokes = isFavouriteJokes ? favouriteJokes : jokes;

    return (
        <>
            { currentJokes &&
                currentJokes.map(currentJoke => (
                <JokeItem
                    key={currentJoke.id}
                    joke={currentJoke}
                />
            ))}
        </>
    );
};

export default JokeList;