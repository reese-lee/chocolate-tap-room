import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    fontSize: '4em',
    textAlign: 'center',
    color: '#36d9a0'
  },
  links: {
    fontSize: '0.75em',
    color: 'purple',
    '&:hover': {
      color: '#f53b88',
    },
    '&:active': {
      color: '#f2f549',
    },
  }
})

export default function Edit() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title} style={{fontFamily: 'DM Serif Display'}}>
        Choose something to edit:
        <div className={classes.links}>
          <Link style={{ textDecoration: 'none' }}  to='/editPints'><a className={classes.links} style={{fontFamily: 'DM Serif Display'}}>Edit pints</a></Link>
          <br></br>
          <Link style={{ textDecoration: 'none' }}  to='/editDrinks'><a className={classes.links} style={{fontFamily: 'DM Serif Display'}}>Edit drinks</a></Link>
          <br></br>
          <Link style={{ textDecoration: 'none' }}  to='/employees'><a className={classes.links} style={{fontFamily: 'DM Serif Display'}}>Return</a></Link>
        </div>
      </div>
    </div>
  )
}
