import React from 'react'
import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import{NavLink} from 'react-router-dom';

const useStyle=makeStyles({
    header:{
        background:'#020202'
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
})

const Navbar = () => {
    const classes =useStyle()
  return (
    <>
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to ="/">Wedigtech</NavLink>
                <NavLink className={classes.tabs} to = "all"> All Employees</NavLink>
                <NavLink className={classes.tabs} to ="add"> Add Employee</NavLink>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar