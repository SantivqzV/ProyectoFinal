import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {Map} from '../../components'

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth:'100vw', overflow: 'hidden' }}>
      <Grid container spacing={2} className="p-10">
        <Grid item xs={12} sm={6} md={12} lg={8}>
          <Paper style={{ height: '40vh', backgroundColor: 'white'}}>
            <Map style={{maxHeight:'100vh'}} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper style={{ height: '40vh', backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper style={{ height: '40vh', backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper style={{ height: '40vh', backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper style={{ height: '40vh', backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper style={{ height: '40vh', backgroundColor: 'white' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home