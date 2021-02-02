import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authactions from '../../store/actions/Authactions'
import * as searchactions from '../../store/actions/Searchactions'

class Logout extends Component{

    componentDidMount(){
        this.props.onlogout();
        this.props.onlogout1();
    }

    render(){
        return(
            <div><Redirect to="/"/></div>
        )
    }
}
const mapactionstoprops = dispatch => {
    return{
        onlogout:()=>dispatch(authactions.logout()),
        onlogout1:()=>dispatch(searchactions.logout())
    }
}

export default connect(null,mapactionstoprops)(Logout);