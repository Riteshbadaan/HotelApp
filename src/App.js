import React, { PureComponent } from 'react'
import Auth from './containers/Auth/Auth'
import Search from './containers/Search/Search'
import Logout from './components/Logout/Logout'
import './App.css';
import { Redirect, Route,Switch } from 'react-router-dom'
import Upload from './containers/Upload/Upload';
import Bookings from './containers/Bookings/Bookings'
import InsideHotel from './components/InsideHotel/InsideHotel'
import Account from './containers/Account/Account'
import { connect } from 'react-redux'

class App extends PureComponent{
  render(){
    let routes=null;
    if(this.props.isuser_authenticated){
        routes=(
          <Switch>
            <Route path="/" exact component={Auth}/>
            <Route path="/upload" component={Upload}/>
            <Redirect to="/"/>
          </Switch>
        )
    }
    else{
        routes=(
          <Switch>
            <Route path="/search" component={Search}/>
            <Route path="/account" component={Account}/>
            <Route path="/bookings" component={Bookings}/>
            <Route path="/upload" component={Upload}/>
            <Route path="/hotel" component={InsideHotel}/>
            <Route path="/logout" component={Logout}/>
          </Switch>
        )
    }
    return(
      <div>
          {routes}
      </div>
    )
  }
}

const mapstatetotprops = state => {
  return{
      isuser_authenticated:state.authreducer.token===null
  }
}

export default connect(mapstatetotprops)(App);
