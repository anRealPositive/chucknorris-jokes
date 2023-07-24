// libs
import React from 'react';
import { CssBaseline, Container } from '@mui/material';

// styles
import styles from './styles.module.scss';

export default function Layout() {
    return (
        <div className={styles.root}>
            <CssBaseline />
            <Container
                maxWidth='md'
                className={styles.container}
            >
                Hello
            </Container>
        </div>
    );
};
