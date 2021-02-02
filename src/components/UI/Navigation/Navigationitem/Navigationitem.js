import React from 'react'
import classes from './Navigationitem.module.css'
import { NavLink } from 'react-router-dom' 

const Navigationitem = (args) => {
    return(
        <li className={classes.li}>
            <NavLink to={args.link} 
                className={classes.a}
                activeClassName={classes.active}>
                {args.children}
            </NavLink>
        </li>
    )
}

export default Navigationitem;