import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Icon,
  Button,
  Box,
  Container,
  IconButton,
  Tooltip,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import {
  red,
  pink,
  indigo,
  grey,
  blue,
  green,
  purple
} from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {

  },
  button: {
    color: grey[50]
  },
  tooltip: {
    backgrundColor: blue[500]
  },
  icon: {
    color: grey[50]
  },
  toolbar: {
    backgroundColor: pink['200'],
    minHeight: '11vh'
  },
  appBar: {
    position: 'fixed',
    minHeight: '10vh',
  },
  content: {
    minHeight: '71vh',
    backgroundColor: grey[50],
    width: '100vw',
    padding: '0.4rem',
    marginTop: '11vh'
  },
  paper: {
    backgroundColor: 'transparent',
    padding: '0.5rem',
    margin: '0.5rem'
  },
  footer: {
    minHeight: '20vh',
    backgroundColor: pink['200'],
    color: grey[50]
  }
})

export const Test = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Tooltip className={classes.tooltip} title="Menu">
            <IconButton>
              <Icon className={classes.icon}>menu</Icon>
            </IconButton>
          </Tooltip>
          <Button size="small" className={classes.button}>Home</Button>
          <Button size="medium" className={classes.button}>Articles</Button>
          <Button size="large" className={classes.button}>About</Button>
        </Toolbar>
      </AppBar>
      <Container
        className={classes.content}
      >
        <Typography variant={'h5'}>My Title</Typography>
        
        <Paper className={classes.paper}>
          <p>
            The API documentation of the Paper React component.
          </p>
          <p>
            Learn more about the properties and the CSS customization points.
          </p>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'}>Paper</Typography>
        </Paper>
      </Container>
      <Container
        className={classes.footer}
        maxWidth={'xl'}
      >
        <div className={classes.root}>
          <Grid
            container
            spacing="2"
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                A grade cria consistência visual entre os layouts, permitindo flexibilidade em uma ampla variedade de designs.
                A interface do usuário responsiva do Material Design é baseada em um layout de grade de 12 colunas.
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                Grid 02
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                Grid 03
            </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}