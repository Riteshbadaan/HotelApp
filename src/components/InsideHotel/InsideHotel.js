import React, { Component } from 'react'
import classes from './InsideHotel.module.css'
import 'font-awesome/css/font-awesome.min.css';
import Modal from '../UI/Modal/Modal'
import BookingSummary from '../../containers/Bookingsummary/bookingsummary'

class InsideHotel extends Component{

    state={
        bookbtn:false,
        hotelname:null,
        hotelprice:null,
        hotelimageurl:null,
    }

    bookbtnclick=(name,price,imageurl)=>{
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
        let obj=this.props.location.state;
        let lowersection=null;
        if(this.state.bookbtn){
            modal=<Modal cancel={this.bookbtnclick}>
                <BookingSummary  route={this.props.history} cancel={this.bookbtnclick} name={this.state.hotelname}
                   price={this.state.hotelprice*obj.room} imageurl={this.state.hotelimageurl}/>
            </Modal>
        }
        lowersection=(
                    <div className={classes.betweendiv} style={{paddingBottom:"20px",paddingTop:"20px"}}>
                        <div className={classes.interdiv}>
                            {
                                Number(obj.hotels[obj.key].wifi)? <i class="fa fa-check" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}></i>
                                :<i class="fa fa-times" aria-hidden="true" style={{fontSize:"111.3%",color:"red"}}></i>
                            }
                            <span style={{marginLeft:"10px"}}>Free-Wifi</span>
                        </div>
                        <div className={classes.interdiv}>
                            {
                                Number(obj.hotels[obj.key].ac)? <i class="fa fa-check" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}></i>
                                :<i class="fa fa-times" aria-hidden="true" style={{fontSize:"111.3%",color:"red"}}></i>
                            }
                             <span style={{marginLeft:"10px"}}>A/C</span>
                        </div>
                        <div className={classes.interdiv}>
                            {
                                Number(obj.hotels[obj.key].breakfast)? <i class="fa fa-check" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}></i>
                                :<i class="fa fa-times" aria-hidden="true" style={{fontSize:"111.3%",color:"red"}}></i>
                            }
                             <span style={{marginLeft:"10px"}}>Free-Breakfast</span>
                        </div>
                        <div className={classes.interdiv}>
                            {
                                Number(obj.hotels[obj.key].pool)? <i class="fa fa-check" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}></i>
                                :<i class="fa fa-times" aria-hidden="true" style={{fontSize:"111.3%",color:"red"}}></i>
                            }
                             <span style={{marginLeft:"10px"}}>Pool</span>
                        </div>
                        <div className={classes.interdiv}>
                            {
                                Number(obj.hotels[obj.key].parking)? <i class="fa fa-check" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}></i>
                                :<i class="fa fa-times" aria-hidden="true" style={{fontSize:"111.3%",color:"red"}}></i>
                            }
                             <span style={{marginLeft:"10px"}}>Parking</span>
                        </div>
                    </div>
        )
        return(
            <div>
                {modal}
                <div>
                    <img src={obj.hotels[obj.key].imageurl} className={classes.insideimg}></img>
                </div>
                <div>
                    <div className={classes.betweendiv} style={{paddingBottom:"20px",paddingTop:"20px"}}>
                        <div className={classes.interdiv}>
                            <i class="fa fa-home" aria-hidden="true" style={{fontSize:"111.3%"}}> {obj.hotels[obj.key].name}</i>
                        </div>
                        <div className={classes.interdiv}>
                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"111.3%",color:"gold"}}><span style={{color:"black"}}>  {obj.hotels[obj.key].rating}</span></i>
                        </div>
                        <div className={classes.interdiv}>
                            <i class="fa fa-money" aria-hidden="true" style={{fontSize:"111.3%",color:"green"}}><span style={{color:"black"}}>  {obj.hotels[obj.key].price*obj.room}</span></i>
                        </div>
                    </div>
                    <div className={classes.betweendiv} style={{margin:"30px 0px"}}>
                        <div className={classes.interdiv} style={{borderRight:"1px solid transparent",borderBottom:"1px solid #ccc",textAlign:"left",width:"80%",margin:"0px auto"}}>
                            <i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:"111.3%"}}> {obj.hotels[obj.key].address}</i>
                        </div>              
                    </div>
                    <div className={classes.description}>
                        <p style={{fontSize:"115%"}}>About {obj.hotels[obj.key].name} :</p>
                        <p style={{marginTop:"10px",color:"#484848",fontWeight:"350",fontSize:"110%"}}>{obj.hotels[obj.key].description}</p>
                    </div>
                    {lowersection}
                    <div style={{borderRight:"1px solid transparent"}}>
                        <button className={classes.btnbook} onClick={()=>this.bookbtnclick(obj.hotels[obj.key].name,obj.hotels[obj.key].price,obj.hotels[obj.key].imageurl)}>Book</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default InsideHotel;