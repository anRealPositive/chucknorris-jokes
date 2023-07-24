// libs
import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// styles
import styles from './styles.module.scss';

const JokeItem = ({ joke }) => {
    return (
        <Card
            className={styles.card}
        >
            <CardContent className={styles.cardContent}>
                <Typography>{joke.value}</Typography>
            </CardContent>
            <CardActions>
                <Button
                variant='contained'
                color='primary'
                // onClick={}
                >
                    Add
                </Button>
                <Button
                variant='outlined'
                color='secondary'
                startIcon={<DeleteIcon />}
                // onClick={}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default JokeItem;
