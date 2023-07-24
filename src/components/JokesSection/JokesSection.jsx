// libs
import React from 'react';
import { Box } from '@mui/material';

// components
import JokeList from '../JokeList';

// styles
import styles from './styles.module.scss';

const JokesSection = () => {
    return (
        <>
            <Box
                role='tabpanel'
                className={styles.box}
            >
                <JokeList />
            </Box>
        </>
    )
}

export default JokesSection;