import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    fontSize: '4em',
    textAlign: 'center',
    color: '#36d9a0'
  }
})

export default function Edit() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        Choose something to edit:
      </div>
    </div>
  )
}
