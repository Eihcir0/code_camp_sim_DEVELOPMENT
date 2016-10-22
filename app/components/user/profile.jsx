import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import {bindActionCreators} from 'redux';
import {fetchUser, updateUser, fetchUserData, setUserData}  from '../../redux-actions/firebase_actions';
import GameMain from './../../../frontend/components/game_main.jsx';
import firebase from 'firebase';




class UserProfile extends Component {

  constructor(props) {
    super(props);
    if (!(this.props.currentUser)) {
      const data = JSON.parse(localStorage.getItem(localStorage.key(1)));
      if (!data.uid) {
          replace({
              pathname: '/login',
              state: {
                  nextPathname: nextState.location.pathname,
              },
          });
      }
    }

    // var userData = this.props.fetchUserData(userId);
    // console.log(userData);
    // this.props.setUserData(userId, "ham");
    console.log(this.props.userData);

    this.state = {
      message: ''
    };


  }

  render() {
  
    return (
      <div className="col-md-6">
        <GameMain />
      </div>
    );
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
