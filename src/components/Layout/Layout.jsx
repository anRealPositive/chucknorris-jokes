// libs
import React, { useContext } from 'react';
import { CssBaseline, Container } from '@mui/material';

// components
import Header from '../Header';
import JokesSection from '../JokesSection';
import Loader from '../Loader';

// context
import { JokesContext } from '../../context/JokesProvider';

// styles
import styles from './styles.module.scss';

/**
 * Renders Header and Joke Sections
 * @returns {JSX.Element}
 */

const Layout = () => {
    const { 
        isLoading,
        error,
    } = useContext(JokesContext);

    if (error) {
        return <div>Error: {error.message}</div>;
    };

    if (isLoading) return <Loader />;

    return (
        <div className={styles.root}>
            <CssBaseline />
            <Container
                maxWidth='md'
                className={styles.container}
            >
                <Header title='Chuck Norris Jokes'/>
                <JokesSection />
            </Container>
        </div>
    );
};

export default Layout;
