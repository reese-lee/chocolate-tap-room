import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import splash from './../assets/images/splash.jpg';

const useStyles = makeStyles({
  image: {
    height: 600,
    width: 'auto'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '60%',
  },
  fonts:{
    color: 'white',
    fontSize: '5em',
    opacity: 0.85,
  }

});

export default function Splash() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.image}>
        <img src={splash}/>
      </div>
      Heal with Chocolate
    </div>

  );
}
