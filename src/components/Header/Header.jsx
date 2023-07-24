// libs
import React from 'react';
import { Typography, Tab, Tabs, AppBar } from '@mui/material';

// styles
import styles from './styles.module.scss';

/**
 * Returns items of the Header
 * @param {function} changeTab
 * @param {number} currentTab
 * @param {string} title
 * @returns {JSX.Element}
 */

const Header = ({ title }) => {
    return (
        <>
            <Typography
                variant='h3'
                align='center'
                className={styles.title}
            >
                {title}
            </Typography> 
        </>
    );
};

export default Header;