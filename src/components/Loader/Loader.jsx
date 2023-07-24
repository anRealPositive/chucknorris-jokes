// libs
import React from 'react';

// styles
import styles from './styles.module.scss';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default Loader;
