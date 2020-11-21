import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
      grid_interests: {
        marginTop: 150,
    },
}));

export function Interests() {
    const classes = useStyles();
    // state = {};
    // render() {
        return  (
            <div className="interests-section" id="interests">
                <Typography variant="h3" gutterBottom>
                <Grid justify="center" container spacing={0}>
        <Grid item xs={11} className={classes.grid_interests}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p>INTERESTS</p>
          </Box>
        </Grid>
      </Grid>
      </Typography>

      <Grid justify="center" container spacing={2}>
        <Grid item xs={11}>
        <Box m={1}>
              A part of being a android developer, I enjoy most of my time playing game and watching movies. In the outdoor , I like play basketball with my friends. Before midnight 
              I usually read book (mostly about grow bussines) and analysis my stock option before I going to bed.
            </Box>
            <Box m={1}>
              Beside my job as mobile developer, I also interesting about machine learning and augmented reality.
            </Box>
          </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Interests;