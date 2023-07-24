// libs
import React, { useContext } from 'react';

// components
import JokeItem from '../JokeItem';

// context
import { JokesContext } from '../../context/JokesProvider';

const JokeList = () => {
    const { jokes } = useContext(JokesContext);

    return (
        <>
            {
                jokes.map(joke => (
                    <JokeItem joke={joke}/>
                ))
            }
        </>
    );
};

export default JokeList;