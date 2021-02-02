import React,{ Component } from 'react'
import classes from './Auth.module.css'
import { connect } from 'react-redux'
import * as authactions from '../../store/actions/Authactions'
import Spinner from '../../components/UI/Spinner/Spinner'

class Auth extends Component{

    state={
        details:{
            email:null,
            password:null,
        },
        isSignup:false
    }

    storevalues = (event,name) => {
        let Details={...this.state.details}
        Details[name]=event.target.value;
        this.setState({
            details:Details
        })
        //console.log(this.state.details.email)
    }

    formchange = () => {
        this.setState(prevstate=>{
            return{
                isSignup:!prevstate.isSignup
            }
        })
    }

    onsubmission = (event) => {
        event.preventDefault();
        this.props.authentication(this.state.details.email,this.state.details.password,this.state.isSignup,this.props.history)
    }

    render(){

        let content=(   
            <form className={classes.inputdiv}>
                <input className={classes.input} type="email" id="email" name="email" placeholder="E-mail" onChange={(event)=>this.storevalues(event,"email")} required></input>
                <input className={classes.input} type="password" id="password" name="password" placeholder="Password" onChange={(event)=>this.storevalues(event,"password")} required></input>    
                <button className={classes.submit} onClick={this.onsubmission}>Submit</button>
            </form>
        )
            if(this.props.loading){
                content=<Spinner/>
            }

        let err=null;
        if(this.props.error){
            err=this.props.error.message
        }
        return(
            <header className={classes.back}>
                <div className={classes.first}>
                    <p style={{marginLeft:"7%",color:"white",fontSize:"270%"}}>
                        Dummy Heading
                    </p>
                    <div className={classes.form}>
                        <p style={{textAlign:"center",margin:"20px 0px",fontSize:"170%"}}>{this.state.isSignup?"SIGN UP":"SIGN IN"}</p>
                        {this.props.error?<p style={{color:"red"}}>{err}</p>:<p style={{color:"white"}}>Error</p>}
                        {content}
                        <p style={{marginTop:"25px"}}>{this.state.isSignup?"Already have an account?":"Don't have an account?"}</p>
                        <button className={classes.secondbtn} onClick={this.formchange}>{!this.state.isSignup?"SIGN UP":"SIGN IN"}</button>
                     </div>
                </div>
                
            </header>
        )
    }
}
const mapstatetoprops = state => {
    return{
        error:state.authreducer.error,
        loading:state.authreducer.loading
    }
}

const mapactionstoprops = dispatch => {
    return{
        authentication:(email,password,siginup,route)=>{dispatch(authactions.auth(email,password,siginup,route))}
    }
}

export default connect(mapstatetoprops,mapactionstoprops)(Auth);