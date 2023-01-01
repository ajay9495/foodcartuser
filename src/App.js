import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './Theme/AppTheme.css'
import LoginRouter from './Components/LoginRouter/LoginRouter'
import MainRouter from './Components/MainRouter/MainRouter';
import RegisterRouter from './Components/RegisterRouter/RegisterRouter';

class App extends  Component{

  constructor(props) {
    super(props);

    props.setUserData(getLocalUserData());

  }

  render(){

    return (

      <div className=" a-wrapper">
        {
          (this.props.user.data.status =="loggedIn")? 
            <MainRouter />
          :(this.props.user.data.status =="loggedOut")? 
            <LoginRouter />
          :(this.props.user.data.status =="toRegister")? 
            <RegisterRouter />
          :(this.props.user.data.status =="initial")?
            <div></div>
          :
            <div></div>
        }
      </div>

    )

  }

}

let userDataStr = "";
function getLocalUserData(){
    userDataStr = window.localStorage.getItem("userData");

    if(userDataStr){
        
      return JSON.parse(userDataStr);

    }
    else{

      return {status:"toRegister",user_id:"",store_id:""};
    }
}

function mapStateToProps(state){

  return{
    user: state.user
  }
}

function mapDispatchToProps(dispatch){

  return {
    setUserData: (data) => dispatch({
        type:"user/setUserData",
        payload:{data:data}
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



