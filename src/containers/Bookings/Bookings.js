import React, { Component } from 'react';
import Booking from './Booking/Booking';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import * as bookingactions from '../../store/actions/Bookingactions';
import { connect } from 'react-redux';

class Bookings extends Component{

    componentDidMount(){
        this.props.finalbookings(this.props.token,this.props.userid);
    }

    render(){
        //console.log(this.props.bookings)
        const bookings=this.props.bookings;
        let booking=null;
        let keys=Object.keys(bookings);
        booking=keys.map((el,index)=>{
            // console.log(bookings[el].Image)
            return <Booking key={index} image={bookings[el].Image} name={bookings[el].HotelName}
               from={bookings[el].From} to={bookings[el].To} rooms={bookings[el].Numberofrooms}
                price={bookings[el].Price} />
        })
        return(
            <div style={{height:"100vh",backgroundColor:"#eee"}}>
                <Toolbar/>
                {/* <p style={{textAlign:"center",padding:"20px",fontSize:"140%"}}>BOOKINGS</p> */}
                {booking}
            </div>
        )
    }
}

const mapstatewithprops = state => {
    return{
        bookings:state.bookingreducer.bookings,
        token:state.authreducer.token,
        userid:state.authreducer.userid,
    }
}

const mapactionswithprops = dispatch => {
    return{
        finalbookings:(token,userid)=>dispatch(bookingactions.fetchbookings(token,userid))
    }
}

export default connect(mapstatewithprops,mapactionswithprops)(Bookings);