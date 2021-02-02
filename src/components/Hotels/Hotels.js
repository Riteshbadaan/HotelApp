import React, { Component } from 'react'
import Hotel from './Hotel/Hotel'
import 'font-awesome/css/font-awesome.min.css';
import Modal from '../UI/Modal/Modal'
import BookingSummary from '../../containers/Bookingsummary/bookingsummary'

class hotels extends Component{

    state={
        bookbtn:false,
        hotelname:null,
        hotelprice:null,
        hotelimageurl:null,
    }

    bookbtnclicked=(name,price,imageurl)=>{
        this.setState(prevstate=>{
            return{
                bookbtn:!prevstate.bookbtn,
                hotelname:name,
                hotelprice:price,
                hotelimageurl:imageurl
            }
        })
    }

    render(){
        let modal=null;
        let days=(new Date(this.props.date2)-new Date(this.props.date1))/(24*3600*1000);
        if(this.state.bookbtn){
            modal=<Modal cancel={this.bookbtnclicked}>
                <BookingSummary route={this.props.route} cancel={this.bookbtnclicked} name={this.state.hotelname}
                   price={this.state.hotelprice*this.props.rooms*days} imageurl={this.state.hotelimageurl}/>
            </Modal>
        }
        //console.log("Hotelnum",this.state.hotelnum);
        let hotels=this.props.hotels;
        let hotel=null;
        if(hotels===null){
            this.props.route.push("/search")
        }
        else{
            let arraykeys=Object.keys(hotels);
            hotel=arraykeys.map(el=>{
                    //console.log(index)
                    return <Hotel route={this.props.route} hotels={hotels} key1={el}
                    room={this.props.rooms} days={days} bookclick={this.bookbtnclicked} />
            }) 
    }
        return(
            <div>
                {modal}
                {hotel}
            </div>
        )
    }
}
export default hotels;