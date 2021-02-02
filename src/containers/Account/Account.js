import React, { Component } from 'react'
import classes from './Account.module.css'
import Toolbar from '../../components/UI/Toolbar/Toolbar'
import { connect } from 'react-redux'
import axios from '../../axios'

class Account extends Component{

    state={
        userdetails:{
            firstname:null,
            surname:null,
            contactnumber:null,
            address:null,
            userId:null
        },
        updatedone:0,
        checkbtn:0
    }

    async componentDidMount(){
        await axios.get("https://hotelapp-f223c.firebaseio.com/users.json?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userid+'"')
        .then(res=>{
            let key=Object.keys(res.data)
            let user={...res.data[key]}
            this.setState({
                userdetails:user,
                checkbtn:user.firstname?1:0
            })
        })
        .catch(err=>{
            console.log("Error in Accountactions")
        })
      }
    
    valuestore=(event,name)=>{
        let dummystate={...this.state.userdetails}
        dummystate["userId"]=this.props.userid
        dummystate[name]=event.target.value;
        this.setState({
            userdetails:dummystate,
            updatedone:0
        })
    }

    btnclick=(event)=>{
        event.preventDefault();
        let flag=1;
        let num=/[0-9]/,letter=/^[A-Za-z]+$/;
        if(!this.state.userdetails.firstname.match(letter)){
            flag=0;
            alert("First Name should contain Letters ")
        }
        else if(!this.state.userdetails.surname.match(letter)){
            flag=0;
            alert("Surname should contain Letters ")
        }
        else if(this.state.userdetails.contactnumber.length<10)
        {
            flag=0;
            alert("Contact Number should have 10 digits")
        }
        else if(!num.test(Number(this.state.userdetails.contactnumber))){
            flag=0;
            alert("Contact Number should contain digits")
        }
        if(flag==1){
            axios.get("https://hotelapp-f223c.firebaseio.com/users.json?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userid+'"')
            .then(res=>{
                let key=Object.keys(res.data)
                axios.put("https://hotelapp-f223c.firebaseio.com/users/"+key[0]+".json?auth="+this.props.token,this.state.userdetails)
                .then(res=>{
                    console.log("Success in Save Account")
                    this.setState({
                        updatedone:1
                    })
                })
                .catch(err=>{
                    console.log("Error in Save Account")
                })
            })
            .catch(err=>{
                console.log("ERROR")
            })
        }
    }

    render(){
        console.log(this.state.userdetails)
        return(
        //    this.state.userdetails.firstname?(
            <div style={{backgroundColor:"#eee",height:"100vh"}}>
                <Toolbar/>
                <div className={classes.outaccount}>
                    {this.state.updatedone?<p className={classes.update}>Details {this.state.checkbtn?"Updated":"Saved"} Successfully</p>:null}
                    <form className={classes.formaccount} onSubmit={this.btnclick}>
                        <div className={classes.inaccount}>
                            <label className={classes.labelaccount} for="fname">First Name</label>
                            <input value={this.state.userdetails.firstname} onChange={(event)=>this.valuestore(event,"firstname")} className={classes.inputaccount} type="text" id="fname" name="firstname" required/>
                        </div>
                        <div className={classes.inaccount}>
                            <label className={classes.labelaccount} for="sname">Surname</label>
                            <input value={this.state.userdetails.surname} onChange={(event)=>this.valuestore(event,"surname")} className={classes.inputaccount} type="text" id="sname" name="surname"required/>
                        </div>
                        <div className={classes.inaccount}>
                            <label className={classes.labelaccount} for="cnum">Contact Number</label>
                            <input value={this.state.userdetails.contactnumber} onChange={(event)=>this.valuestore(event,"contactnumber")} className={classes.inputaccount} type="text" id="cnum" name="contactnumber" maxLength="10" required/>
                        </div>
                        <div className={classes.inaccount}>
                            <label className={classes.labelaccount} for="add">Address</label>
                            <input value={this.state.userdetails.address} onChange={(event)=>this.valuestore(event,"address")} className={classes.inputaccount} type="text" id="add" name="address"required/>
                        </div>            
                        <button className={classes.btnbook}>{this.state.checkbtn?"Update":"Save"}</button>
                    </form>
                </div>
            </div>)
            // :null)
    }
}

const mapstatetoprops = state => {
    return{
        token:state.authreducer.token,
        userid:state.authreducer.userid,
    }
}


export default connect(mapstatetoprops,null)(Account);