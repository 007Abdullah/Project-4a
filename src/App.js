import React, { useRef, useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import './App.css';
import sky from './images/Sky.jpg';
import earth from './images/Earth.jpg';
import alice from './images/Alice.gif';
import tree from './images/Tree.png';
import roof from './images/Rook.png';
import horse from './images/Horseknight.png';
import pawn from './images/Pawn.png';
import smallPawn from './images/Small-Pawn.png';
import smallRook from './images/Small-Rock.png';
import smallTree from './images/Small-Tree.png';
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
  },
  KnightHorse: {
    position: 'absolute',
    top: '-700px',
    left: "0px",
    zIndex: '10'
  },
  Roof: {
    position: 'absolute',
    top: '-350px',
    left: "0px",
    zIndex: '10'
  },
  smallTree: {
    position: 'absolute',
    top: '350px',
    left: '50px',
    zIndex: '10'
  },
  pawn: {
    position: 'absolute',
    top: '300px',
    left: '750px',
    zIndex: '10'
  },
  smallPawn: {
    position: 'absolute',
    top: '500px',
    left: '0px'
  },
  smallRoof: {
    position: 'absolute',
    top: '350px',
    left: '900px',
    zIndex: '10'
  }
}));

function App() {

  const classes = useStyles();

  let alice_Animation = useRef(null);
  let HorseKNightRef = useRef(null);

  const { ref } = useWebAnimations({
    keyframes: [
      { transform: 'translate(400%,0)' },
      { transform: 'translate(0%,0)' }
    ],
    timing: {
      duration: 6000,
      iterations: Infinity,
      easing: "ease-in-out"
    },
  });

  useEffect(() => {
    HorseKNightRef.current.animate([
      { transform: 'translateX(100%)' },
      { transform: 'translateX(0%)' }
    ], {
      duration: 3000,
      iterations: Infinity
    });
  }, [])

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

        <div className={classes.treeDiv} ref={ref}>
          <img src={tree} alt="TREE" style={{ height: "600px" }} />
        </div>

        {/* ////////////////////////////  END TREE ////////////////////////////  */}

        {/* ////////////////////////////  START KNIGHT AND ROOF ////////////////////////////  */}

        <div ref={HorseKNightRef} style={{ position: 'relative' }}>
          <img src={horse} alt="HORSE KNIGHT" className={classes.KnightHorse} />
          <img src={roof} alt="ROOF" className={classes.Roof} />
        </div>


        {/* ////////////////////////////  END KNIGHT AND ROOF ////////////////////////////  */}


        {/* ////////////////////////////  START "SMALL-TREE" "PAWN" "SMALL PAWN" "SMALL PLAM"  ////////////////////////////  */}

        <div>
          <img src={smallTree} alt="SMALL_TREE" className={classes.smallTree} />
          <img src={pawn} alt="PAWN" className={classes.pawn} />
          <img src={smallPawn} alt="SMALL_PAWN" className={classes.smallPawn} />
          <img src={smallRook} alt="SMALL_ROOK" className={classes.smallRoof} />
        </div>

        {/* ////////////////////////////  END  ////////////////////////////  */}

      </div>
    </React.Fragment>
  );
}

export default App;
