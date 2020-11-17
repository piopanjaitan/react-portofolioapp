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

export function Education(){
    const classes = useStyles();
    // state = {};
    // render() {
        return (
            <div className="education-section" id="education">
                 <Grid justify="center" container spacing={3} className={classes.grid}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h1>EDUCATION</h1>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>LOREMIPSUM INSTITUTE OF INFORMATION TECHNOLOGY</b>
                  </Box>
                  <Box m={1}>
                    BACHELOR OF TECHNOLOGY
                  </Box>
                  <Box m={1}>
                    <body>12.34</body>
                  </Box>
                </Typography> 
              </Grid>
            </Grid>
      </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Education;