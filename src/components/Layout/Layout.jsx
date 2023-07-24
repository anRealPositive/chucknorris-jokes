// libs
import React from 'react';
import { CssBaseline, Container } from '@mui/material';

// components
import Header from '../Header';

// styles
import styles from './styles.module.scss';
import JokesSection from '../JokesSection';

const Layout = () => {
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
