import React from 'react';
import classes from './BackDrop.module.css'

const BackDrop = (args) =>{
    return (
        <div className={classes.BackDrop} onClick={()=>args.cancel1(null,null)}></div>
    )
}

export default BackDrop;