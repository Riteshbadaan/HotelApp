import React from "react"
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'

const Navigationitems = () => {
    return(
        <nav>
            <ul className={classes.ul}>
                <Navigationitem link="/search">Search</Navigationitem>
                <Navigationitem link="/account">Account</Navigationitem>
                <Navigationitem link="/bookings">Bookings</Navigationitem>
                <Navigationitem link="/logout">Logout</Navigationitem>
            </ul>
        </nav>
    )
}

export default Navigationitems;