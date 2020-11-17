import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      grid: {
          marginTop: 20,
      },
}));

export function Experience() {
    const classes = useStyles();
    // state = {};
    // render() {
        return (
            <div className="experience-section" id="experience">

      <Grid justify="center" container spacing={3} className={classes.grid}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h1>EXPERIENCE</h1>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>GITHUB CAMPUS EXPERT</b>
                  </Box>
                  <Box m={1}>
                    GITHUB
                  </Box>
                  <Box m={1}>
                    <body>Responsible for building the on campus community with the support of Github</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 August 2018 - Present
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={3} className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>OPEN SOURCE DEVELOPER INTERN</b>
                  </Box>
                  <Box m={1}>
                    FOSSASIA
                  </Box>
                  <Box m={1}>
                    <body>Contributing to Fossasia's open event server and frontend as an intern. Resolved numerous bugs and</body>
                    <body>added new features to the eventyay platform</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 August 2018 - Present
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={3} className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>SOFTWARE DEVELOPER INTERN</b>
                  </Box>
                  <Box m={1}>
                    HASURA
                  </Box>
                  <Box m={1}>
                    <body>Worked on Hasura's GraphQL engine and added  new features in it</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 August 2018 - Present
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Experience;