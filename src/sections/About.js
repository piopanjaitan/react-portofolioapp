// import React, { Component } from "react";
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
            <p>Lorem Ipsum</p>
          </Box>
        </Grid>
      </Grid>
      </Typography>
      <Typography variant="body1" gutterBottom >
                <Grid justify="center" container spacing={1}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p>+62-0123456789 LOREMIPSUM@GMAIL.COM</p>
          </Box>
        </Grid>
      </Grid>
      </Typography>

      <Grid justify="center" container spacing={2}>
        <Grid item xs={11}>
        <Box m={1}>
              I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia. Publiclab and many other projects. My tech
              stack includes Python and Javascript. Python for server side and scripting and Javascript for the frontend. I use Django
              framework for the server side development and React for the frondend development. Ihave also worked with GraphQL. I am a 
              Github Campus Expert at my institute where I am responsible for building on campus community. I am the lead organiser of
              Hack In The North Hackathon and the cofounder of Pragma Conference held IIIT Allahabad.
            </Box>
          </Grid>
      </Grid>
      <Grid item xs={3}>
                <Box m={5} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                  <Avatar alt="linkedin" src="/src/images/410051-PDWB4L-109.jpg" className={classes.icon_social} variant="circle"></Avatar>
                  <Avatar alt="linkedin" src="/src/images/410051-PDWB4L-109.jpg" className={classes.icon_social} variant="circle"></Avatar>
                </Box>
              </Grid>
     
                </div>
            );
    // }
}

export default About;