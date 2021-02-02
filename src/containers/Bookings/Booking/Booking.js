import React from 'react';
import classes from './Booking.module.css';

const Booking = args => {
    return(
        <div style={{width:"100%",backgroundColor:"#eee",padding:"20px 0px"}}>
            <div className={classes.Booking}>
                    <img src={args.image}></img>
                <div className={classes.maindiv}>
                    <div className={classes.betweendiv} style={{paddingBottom:"20px",paddingTop:"10px"}}>
                        <div className={classes.interdiv}>
                            <p style={{fontSize:"111.3%"}}>HOTEL: {args.name}</p>
                        </div>
                        <div className={classes.interdiv}>
                        <p style={{fontSize:"111.3%"}}>ROOMS: {args.rooms}</p>
                        </div>
                        <div className={classes.interdiv}>
                            <p style={{fontSize:"111.3%"}}>Price: {args.price}</p>
                        </div>
                    </div>
                    <div className={classes.betweendiv} style={{paddingTop:"5px"}}>
                        <div className={classes.interdiv} style={{borderRight:"1px solid transparent"}}>
                            <p style={{fontSize:"111.3%"}}>FROM: {args.from}</p>
                        </div>
                        <div className={classes.interdiv} style={{borderRight:"1px solid transparent"}}>
                            <p style={{fontSize:"111.3%"}}>TO: {args.to}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;