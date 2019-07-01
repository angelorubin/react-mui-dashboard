import React from 'react'
import { SignIn } from './signin'
import { SignUp } from './signup'
import {
  makeStyles
} from '@material-ui/styles';
import {
  Grid
} from '@material-ui/core'
import {
  purple,
  blue
} from '@material-ui/core/colors'

const useStyles = makeStyles({
  signin: {},
  signup: {
    backgroundColor: blue[500]
  }
})

export const Login = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        style={{ 'height': '100vh' }}
        direction="column"
        justify="center"
      >
        <Grid item xs="6" className={classes.signin}>
          <SignIn />
        </Grid>
        <Grid item xs="6" className={classes.signup}>SignUp</Grid>
      </Grid>
    </>
  )
}