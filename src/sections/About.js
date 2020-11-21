// import React, { Component } from "react";
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
      grid_about: {
        marginTop: 90,
    },
    grid_about2: {
        marginTop: 20,
    },
}));


export function About() {
    const classes = useStyles();
    // state = {};
    // render() {
        return (
            <div className="about-section" id="about">
                <Typography variant="h2" gutterBottom>
                <Grid justify="center" container spacing={0}>
        <Grid item xs={11} className={classes.grid_about}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p>Ridwan Pioneer <span style={{color:"#bd5b3c"}}>Panjaitan </span></p>
          </Box>
        </Grid>
      </Grid>
      </Typography>
      <Typography variant="body1" gutterBottom >
                <Grid justify="center" container spacing={1}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p> PIO.PANJAITAN@GMAIL.COM</p>
          </Box>
        </Grid>
      </Grid>
      </Typography>

      <Grid justify="center" container spacing={2}>
        <Grid item xs={11}>
        <Box m={1}>
        A Mobile Application Developer in the Computer Software industry. Skilled on JAVA, Android, and Mobile Applications. 
        Interesting about machine learning and augmented reality.
            </Box>
          </Grid>
      </Grid>
      <Grid item xs={3}>
                <Box m={5} display="flex" flexDirection="row" flexWrap="wrap">
                <a href="https://github.com/piopanjaitan" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/piopanjaitan/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
                </Box>
              </Grid>
     
                </div>
            );
    // }
}

export default About;