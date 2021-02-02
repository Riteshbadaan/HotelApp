import React, { Component } from 'react';
import classes from './bookingsummary.module.css'
import { connect } from 'react-redux'
import * as authactions from '../../store/actions/Authactions'
class bookingsummary extends Component{

    bookconfirmbtn=()=>{
        let bookingdetails={
            HotelName:this.props.name,
            From:this.props.date1,
            To:this.props.date2,
            Numberofrooms:this.props.rooms,
            Price:this.props.price,
            Image:this.props.imageurl,
            userId:this.props.userid
        }
        this.props.bookhotel(this.props.token,bookingdetails,this.props.route);
    }

    render(){
        //console.log(this.props)
        return(
            <div>
                <p style={{textAlign:"center",fontSize:"110%"}}>Confirm Booking!!</p>
                <div className={classes.details}>
                    <p className={classes.detailentry}>Hotel : {this.props.name}</p>
                    <p className={classes.detailentry}>From : {this.props.date1}</p>
                    <p className={classes.detailentry}>To : {this.props.date2}</p>
                    <p className={classes.detailentry}>No. of Rooms : {this.props.rooms}</p>
                    <p className={classes.detailentry}>Price : {this.props.price}</p>
                </div>
                <button className={classes.failbtn} onClick={()=>this.props.cancel(null,null)}>CANCEL</button>
                <button className={classes.successbtn} onClick={this.bookconfirmbtn} >BOOK</button>
            </div>
        )
    }
}
const mapstatetoprops = state => {
    return{
        date1:state.searchreducer.date1,
        date2:state.searchreducer.date2,
        rooms:state.searchreducer.numrooms,
        token:state.authreducer.token,
        userid:state.authreducer.userid
    }
}
const mapactionstoprops = dispatch => {
    return{
        bookhotel:(token,bookingdetails,route)=>dispatch(authactions.bookhotel(token,bookingdetails,route))
    }
}

export default connect(mapstatetoprops,mapactionstoprops)(bookingsummary);