import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import splash from './../assets/images/splash.jpg';

const useStyles = makeStyles({
  image: {
    width: '100%',
    position: 'static',
  },
  centered: {
    display: 'flex',
    width: '40%',
  },
  fonts:{
    color: 'white',
    fontSize: '5em',
    opacity: 0.85,
    marginLeft: '9%'
  }

});

const backgroundImage = {
  backgroundImage: `url(${splash})`
};

export default function Splash() {
  const classes = useStyles();
  return (
    <div>
    <div style = {backgroundImage} className={classes.image}>
      <div className={classes.centered}>
        <p className={classes.fonts} style={{fontFamily: 'Cinzel Decorative'}}>Ella's Chocolate Cafe</p>
      </div>
    </div>
    </div>

  );
}
