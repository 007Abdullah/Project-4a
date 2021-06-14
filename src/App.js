import React from 'react';
import './App.css';
import sky from './images/Sky.jpg';
import earth from './images/Earth.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topLevel: {
    width: '100%',
    height: '300px',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  img: {
    height: '300px'
  },
  earthImg: {
    zIndex: "-10",
    width: '100%',
    height: '70vh',
    overFlow: 'hidden'
  }
}));

function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.topLevel}>
          <Grid container>
            <Grid item xs={4}>
              <img src={sky} alt="Background-Sky" className={classes.img} />
            </Grid>
            <Grid item xs={4}>
              <img src={sky} alt="Background-Sky" className={classes.img} />
            </Grid>
            <Grid item xs={4}>
              <img src={sky} alt="Background-Sky" className={classes.img} style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </div>
        <div style={{ backgroundColor: '#D7366C', width: '100%' }}>
          <img src={earth} alt="Earth" className={classes.earthImg} />
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
