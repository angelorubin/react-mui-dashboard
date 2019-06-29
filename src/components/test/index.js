import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Icon
} from '@material-ui/core';
import {
  grey,
  blue
} from '@material-ui/core/colors';

const useStyles = makeStyles({
  button: {
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue['A100']
    },
    margin: 5,
    color: grey[200]
  },
  appbar: {
    backgroundColor: 'palevioletred'
  }
})

export const Test = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.appbar}>
        <Icon fontSize="large">reorder</Icon>
      </Toolbar>
    </AppBar>
  )
}