import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
  root: {}
}))

const Sidebar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>AppBar</Toolbar>
      </AppBar>
    </>
  )
};

export default Sidebar;
