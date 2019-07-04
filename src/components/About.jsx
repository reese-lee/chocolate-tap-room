import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Splash from './Splash';
import owner from './../assets/images/owner.jpg'

const useStyles = makeStyles({
  image: {
    width: '70%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    fontSize: '4em',
    textAlign: 'center',
    color: '#36d9a0'
  },
  bio: {
    fontSize: '1em',
    textAlign: 'center'
  }
});

const backgroundImage = {
  backgroundImage: `url(${owner})`
};

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title} style={{fontFamily: 'DM Serif Display'}}>
        About Ella
      </div>
      <img className={classes.image} src={owner}/>
      <br></br>
      <div className={classes.bio} style={{fontFamily: 'Montserrat'}}>
        Here will go some text about Ella.
      </div>
    </div>

  );
}
