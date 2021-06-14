import React from 'react';
import './App.css';
import sky from './images/Sky.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topLevel: {
    width: '100%',
    height: '300px',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  img: {
    height: '300px'

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
              <img src={sky} alt="Background-Sky" className={classes.img} />
            </Grid>
          </Grid>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
