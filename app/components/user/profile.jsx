import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { browserHistory, Route, IndexRoute } from 'react-router';
import {bindActionCreators} from 'redux';
import {fetchUser, updateUser, fetchUserData, setUserData}  from '../../redux-actions/firebase_actions';
import GameMain from './../../../frontend/components/game_main.jsx';
import firebase from 'firebase';
import Assets from './../../utils/assets.js';




class UserProfile extends Component {

  constructor(props) {
    super(props);
    window.assets = new Assets; // keep this!!!

    // if (!(this.props.currentUser)) {
    //   const data = JSON.parse(localStorage.getItem(localStorage.key(1)));
    //   if (!data.uid) {
    //   browserHistory.push(`/login`);
    //   }
    // }

    // var userData = this.props.fetchUserData(userId);
    // console.log(userData);
    // this.props.setUserData(userId, "ham");

    this.state = {
      message: ''
    };
  }




  render() {
    console.log(this.props.userData);
    return (
    <div className="col-md-6">
      <GameMain player={this.props.userData} />
    </div>);
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser, fetchUserData, setUserData}, dispatch);
}


function mapStateToProps(state) {
  return {currentUser: state.currentUser,
          userData: state.userData};
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
