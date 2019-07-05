import React from 'react';
import drinks2 from './../assets/images/drinks2.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    width: '100%',
    position: 'relative'
  },
  text: {
     position: 'absolute',
     left: '10%',
     top: '10%',
     width: '30%',
     fontSize: '4em',
     opacity: 0.8,
     display: 'flex',
     color: '#f2f549'
  }
});

const backgroundImage = {
  backgroundImage: `url(${drinks2})`
};

export default function(){
  const classes = useStyles();
  return(
    <div className={classes.box}>
      <img src={drinks2} className={classes.image}/>
        <h5 className={classes.text} style={{fontFamily: 'DM Serif Display'}}>Coming soon!</h5>
    </div>
  )
}
