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
                    <b>LECTURER ASSISTANT</b>
                  </Box>
                  <Box m={1}>
                    BENGKULU UNIVERSITY
                  </Box>
                  <Box m={1}>
                    <body>Responsible for teaching computer networks, multimedia and Linux OS</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 Feb 2010 - Aug 2014
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
                    <b>DEVELOPER INTERN</b>
                  </Box>
                  <Box m={1}>
                    SMK 10 Telekomunikasi Bengkulu
                  </Box>
                  <Box m={1}>
                    <body>Developing student report desktop application with JAVA and MySql</body>
                    <body>added new features to the application such as report printout using Jasper Report</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 Feb 2010 - Sep 2010
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
                    <b>ANDROID DEVELOPER</b>
                  </Box>
                  <Box m={1}>
                    PT. UNION SAMPOERNA TRIPUTRA PERSADA
                  </Box>
                  <Box m={1}>
                    <body>- Developing and Maintain Mobile Harvesting Application</body>
                    <body>- Developing and Maintain Mobile Inspection Application</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 Aug 2015 - Present
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