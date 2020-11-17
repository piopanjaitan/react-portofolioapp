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
              A part of being a web developer, I enjoy most of my time being outdoors. In the winter , I am an avid skier and novice ice climber. During the 
              warmer months here in Colorado. I enjoy mountain biking, free climbing and kayaking.
            </Box>
            <Box m={1}>
              When force indoors, I follow a number of sci-fi and fantasy genre movies and television shows. I am an aspiring chef, and I spend a large
              amount of my free time exploring the latest technology advancements in the front-end web development world.
            </Box>
          </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Interests;