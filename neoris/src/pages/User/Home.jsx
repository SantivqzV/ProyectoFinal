import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Map, SimpleLineChart, Pie, CoursesCarrousel} from '../../components';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Map />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <CoursesCarrousel />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Pie />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <SimpleLineChart />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>  
  );
};

export default Home