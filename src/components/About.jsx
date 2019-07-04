import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import splash from './../assets/images/splash.jpg';

const useStyles = makeStyles({
  image: {
    width: '100%',
    position: 'absolute',
    margin: '0'
  },
  centered: {
    display: 'flex',
    justifyContent: 'left',
    width: '60%',
  },
  fonts:{
    color: 'white',
    fontSize: '5em',
    opacity: 0.85
  }

});

const backgroundImage = {
  backgroundImage: `url(${splash})`
};

export default function About() {
  const classes = useStyles();
  return (
    <div>
    <Splash/>

      Test
    </div>


  );
}
