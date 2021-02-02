import React from 'react'
import classes from './Hotel.module.css'
import 'font-awesome/css/font-awesome.min.css';


const viewfunc = (route,hotels,key,room) => {
    //console.log(image)
    route.push({
        pathname:"/hotel",
        state:{
            hotels:hotels,
            key:key,
            room:room
        }
    })
}

const hotel = (args) => {
    // console.log(args.hotels)
    // console.log(args.key1)
    return(
        <div style={{width:"100%",backgroundColor:"#eee",padding:"20px 0px"}}>
            <div className={classes.hotel}>
                    <img src={args.hotels[args.key1].imageurl}></img>
                <div className={classes.maindiv}>
                    <div className={classes.betweendiv} style={{paddingBottom:"20px",paddingTop:"10px"}}>
                        <div className={classes.interdiv}>
                            <i class="fa fa-home" aria-hidden="true" style={{fontSize:"111.3%"}}> {args.hotels[args.key1].name}</i>
                        </div>
                        <div className={classes.interdiv}>
                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"111.3%",color:"gold"}}><span style={{color:"black"}}> {args.hotels[args.key1].rating}</span></i>
                        </div>
                        <div className={classes.interdiv}>
                            <i class="fa fa-money" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}><span style={{color:"black"}}> {args.hotels[args.key1].price*args.room*args.days}</span></i>
                        </div>
                    </div>
                    <div className={classes.betweendiv}>
                        <div className={classes.interdiv} style={{borderRight:"1px solid transparent",borderBottom:"1px solid #ccc",textAlign:"left"}}>
                            <i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:"111.3%"}}> {args.hotels[args.key1].address}</i>
                        </div>              
                    </div>
                    <div className={classes.betweendiv} style={{paddingTop:"5px"}}>
                        <div className={classes.interdiv} style={{borderRight:"1px solid transparent"}}>
                            <button className={classes.btnview} onClick={()=>viewfunc(args.route,args.hotels,args.key1,args.room*args.days)}>View</button>
                        </div>
                        <div className={classes.interdiv} style={{borderRight:"1px solid transparent"}}>
                            <button className={classes.btnbook} onClick={()=>args.bookclick(args.hotels[args.key1].name,args.hotels[args.key1].price,args.hotels[args.key1].imageurl)}>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default hotel;