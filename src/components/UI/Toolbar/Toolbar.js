import React from 'react'
import Navigationitems from '../Navigation/Navigationitems'
import classes from './Toolbar.module.css'

const toolbar = () => {
    return(
        <div className={classes.Toolbar}>
            <img style={{color:"black"}} alt="LOGO"></img>
            <Navigationitems/>
        </div>
    )
}

export default toolbar;