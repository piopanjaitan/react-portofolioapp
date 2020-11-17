import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
      grid: {
          marginTop: 10,
      },
      grid_skills: {
        marginTop: 150,
    },
}));

export function Skills() {
    const classes = useStyles();
    // state = {};
    // render() {
        return (
            <div className="skills-section" id="skills">
      <Grid justify="center" container spacing={3}>
        <Grid item xs={11} className={classes.grid_skills}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h1>SKILLS</h1>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>PROGRAMMING LANGUAGES & TOOLS</b>
                  </Box>
                </Typography> 
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1} className={classes.grid}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={5}>
                <Box m={1}>
                 HTML5
                </Box>
              </Grid>
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                CSS3
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={5}>
                <Box m={1}>
                 Javascript
                </Box>
              </Grid>
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                React
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={5}>
                <Box m={1}>
                 Nodejs
                </Box>
              </Grid>
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                Python
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={5}>
                <Box m={1}>
                 Django
                </Box>
              </Grid>
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CheckCircleOutlineIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                Ember
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Skills;