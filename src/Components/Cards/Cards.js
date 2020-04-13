import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
if(!recovered){
    return <h1>Loading....</h1>
}
    return (
        <div className={styles.container} >
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent color='textSecondary' gutterButtom>
                        <Typography color='textSecondary' gutterButtom>ټولی ثبت شوی پیښی </Typography>
                        <Typography varaint='h5' >
                            <CountUp start={0} end={confirmed.value} duration={3.5} />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of actove cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent color='textSecondary' gutterButtom>
                        <Typography color='textSecondary' gutterButtom>ټول مړه شوی اروغان  </Typography>
                        <Typography varaint='h5' >
                            <CountUp
                            start={0}
                            end={deaths.value}
                            duration={3.5}
                            />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of actove cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent color='textSecondary' gutterButtom>
                        <Typography color='textSecondary' gutterButtom>ټول جوړشوی اروغان  </Typography>
                        <Typography varaint='h5' >
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={3.5}
                            />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of actove cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
