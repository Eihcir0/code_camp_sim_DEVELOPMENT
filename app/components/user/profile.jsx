import React, {Component} from 'react';
import firebase from '../../utils/firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, updateUser, fetchUserData, setUserData}  from '../../actions/firebase_actions';
import Loading  from '../helpers/loading';
import GameMain from './../../../frontend/components/game_main.jsx';
class UserProfile extends Component {

  constructor(props) {
    super(props);
    var userId = this.props.currentUser.uid;
    // var userData = this.props.fetchUserData(userId);
    // console.log(userData);
    // this.props.setUserData(userId, "ham");
    console.log(this.props.userData);

    this.state = {
      message: ''
    };


  }

  render() {
    if (!this.props.currentUser) {
      return <Loading/>;
    }

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