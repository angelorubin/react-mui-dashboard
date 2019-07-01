import React from 'react'
import {
  makeStyles
} from '@material-ui/styles'
import {
  Grid,
  Typography,
  IconButton,
  Icon,
  TextField,
  Link,
  Button
} from '@material-ui/core'
import {
  purple,
  blue,
  pink
} from '@material-ui/core/colors'

const useStyles = makeStyles({
  signIn: {
    backgroundColor: pink[500]
  }
})

export const SignIn = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={4}
      alignContent="center"
      alignItems="center"
      direction="column"
      justify="space-between"
    >
      <Grid item>
        <Typography variant="1" component="h1">Sign In to</Typography>
      </Grid>
      <Grid item>
        <IconButton>
          <Icon>person_outline</Icon>
        </IconButton>
        <IconButton>
          <Icon>person_outline</Icon>
        </IconButton>
        <IconButton>
          <Icon>person_outline</Icon>
        </IconButton>
      </Grid>
      <Grid item>
        or use your email account
        </Grid>
      <Grid item>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Icon>account_circle</Icon>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="email" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Icon>security</Icon>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="password" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Link>Forgot your password?</Link>
      </Grid>
      <Grid item>
        <Button variant="contained">Sign In</Button>
      </Grid>
    </Grid>
  )
}