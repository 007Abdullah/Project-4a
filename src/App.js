import React, { useRef } from 'react';
import './App.css';
import sky from './images/Sky.jpg';
import earth from './images/Earth.jpg';
import alice from './images/Alice.gif';
import tree from './images/Tree.png';

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
  },
  aliceImg: {
    position: 'absolute',
    height: '80%',
    width: '100%',
    maxWidth: '450px',
    transform: 'translate(-50%, -50%)',
    top: '400px',
    left: '40%',
    zIndex: '1',
    overflow: 'hidden'
  },
  treeDiv: {
    position: 'absolute',
    top: '0',
    left: '200px',
    zIndex: '2'
  }
}));

function App() {

  let alice_Animation = useRef(null);


  const classes = useStyles();

  return (
    <React.Fragment>
      {/* ////////////////////////////  START SKY ////////////////////////////  */}

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

        {/* ////////////////////////////  END SKY ////////////////////////////  */}


        {/* ////////////////////////////  START EARTH AND ALICE ////////////////////////////  */}

        <div style={{ backgroundColor: '#D7366C', width: '100%' }}>
          <img src={earth} alt="Earth" className={classes.earthImg} />
          <img src={alice} alt="Alice gif" className={classes.aliceImg} ref={alice_Animation} />
        </div>

        {/* ////////////////////////////  END EARTH AND ALICE ////////////////////////////  */}

        {/* ////////////////////////////  START TREE ////////////////////////////  */}

        <div className={classes.treeDiv}>
          <img src={tree} alt="TREE" style={{ height: "600px" }} />
        </div>

        {/* ////////////////////////////  END TREE ////////////////////////////  */}

      </div>
    </React.Fragment>
  );
}

export default App;
