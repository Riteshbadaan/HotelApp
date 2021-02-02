import React, { Component } from 'react'
import Toolbar from '../../components/UI/Toolbar/Toolbar'
import classes from './Search.module.css'
import * as searchactions from '../../store/actions/Searchactions'
import { connect } from 'react-redux'
import Hotels from '../../components/Hotels/Hotels'

class Search extends Component{

    state={
        details:{
            city:"Pune",
            rating:null,
            date1:null,
            date2:null,
            rooms:null
        },
        submit:false
    }

    storevalues = (event,name) => {
        let dummydetails={...this.state.details};
        dummydetails[name]=event.target.value;
        this.setState({
            details:dummydetails
        })
    }

    onsubmit=(event)=>{
        event.preventDefault();
        this.setState({
            submit:true
        })
        let flag=1,num=/[0-9]/,datereg=/[0-9]/
        if(Number(this.state.details.rating)<1 || Number(this.state.details.rating)>5)
        {
            flag=0;
            alert("Rating must be between 1 and 5")
        }
        else if(!num.test(Number(this.state.details.rating))){
            flag=0;
            alert("Rating must be a Number")
        }
        else if((new Date(this.state.details.date1)=="Invalid Date")||(new Date(this.state.details.date2)=="Invalid Date")){
            flag=0;
            alert("Dates are Invalid")
        }
        else if(new Date(this.state.details.date1)>=new Date(this.state.details.date2)){
            flag=0;
            alert("'From' Date should before to 'To' Date")
        }
        else if(!num.test(Number(this.state.details.rooms))){
            flag=0;
            alert("Rooms must be a Number")
        }
        if(flag==1)
            this.props.submit(this.state.details,this.props.history);
    }

    render(){
        //console.log((new Date(this.state.details.date2)-new Date(this.state.details.date1))/(24*3600*1000))
        let hotels=null;
        if(this.props.hotels){
            hotels=<Hotels date1={this.props.date1} date2={this.props.date2} route={this.props.history} hotels={this.props.hotels} rooms={this.props.rooms} modalflag={this.state.submit}/>
        }
        //console.log(this.props)
        return(
            <div className={classes.body}>
                <Toolbar/>
                <div className={classes.form}>
                    <p style={{fontSize:"120%",marginBottom:"20px"}}>Search your Ideal Hotel</p>
                    <form onSubmit={this.onsubmit}>
                        <div className={classes.inputcont}>
                            <select onChange={(event)=>this.storevalues(event,"city")} className={classes.input} name="place" placeholder="City">
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                            <input className={classes.input} type="text" name="start" placeholder="Rated(1-5)" onChange={(event)=>this.storevalues(event,"rating")} required/>                        
                        </div>
                        <div className={classes.inputcont}>
                            <input className={classes.input} type="text" name="firstdate" placeholder="Check-in(YYYY-MM-DD)" onChange={(event)=>this.storevalues(event,"date1")} required/>
                            <input className={classes.input} type="text" name="seconddate" placeholder="Check-out(YYYY-MM-DD)" onChange={(event)=>this.storevalues(event,"date2")} required/>
                        </div>
                            <input className={classes.input} onChange={(event)=>this.storevalues(event,"rooms")} style={{width:"50%",display:"block",marginTop:"20px",marginLeft:"auto",marginRight:"auto"}} type="text" name="rooms" placeholder="No. of Rooms" required/>
                        <button type="submit" className={classes.submit}>Search</button>
                    </form> 
                </div>
                <div style={{backgroundColor:"#eee"}}>
                    {hotels}
                </div>
            </div>
        )
    }
}
const mapstatetoprops = state => {
    return{
        hotels:state.searchreducer.hotels,
        rooms:state.searchreducer.numrooms,
        date1:state.searchreducer.date1,
        date2:state.searchreducer.date2
    }
}

const mapactionstoprops = dispatch => {
    return{
        submit:(details)=>{dispatch(searchactions.search(details))}
    }
}

export default connect(mapstatetoprops,mapactionstoprops)(Search);