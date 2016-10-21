import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, fetchUser, fetchUserData, loginWithProvider, registerUser } from '../../redux-actions/firebase_actions';


class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    this.onRegisterFormSubmit = this.onRegisterFormSubmit.bind(this);
    this.loginWithProvider = this.loginWithProvider.bind(this);
    this.state = {
      message: '',
    };
  }

  loginWithProvider(provider) {
    this.props.loginWithProvider(provider).then(data => {
      if (data.payload.errorCode)
        this.setState({ message: data.payload.errorMessage })
      else
        // this.props.fetchUserData(this.)
        browserHistory.push('/profile');
    });
    // alert("login with provider");
  }

  onRegisterFormSubmit(event) {
    event.preventDefault();

    const email = this.refs.email2.value;
    const password = this.refs.password2.value;
    this.props.registerUser({ email, password }).then((data) => {
        if (data.payload.errorCode)
          this.setState({ message: data.payload.errorMessage });
        else
        browserHistory.push('/profile');
    }
  );
}


  onLoginFormSubmit(event) {
    event.preventDefault();

    var email = this.refs.email.value;
    var password = this.refs.password.value;
    this.props.loginUser({ email: email, password: password }).then(data => {

      if (data.payload.errorCode)
        this.setState({ message: data.payload.errorMessage });
      else
        this.props.fetchUserData(this.props.currentUser.uid).then(() => {
        browserHistory.push('/profile');
      });

    }
  );

  }

  render() {
    return (
      <section className="login-page">
      <div className="col-md-4">
        <form id="frmLogin" role="form" onSubmit={this.onLoginFormSubmit}>
          <p>
            {this.state.message}
          </p>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="txtEmail">Email address</label>
            <input type="email" className="form-control" id="txtEmail" ref="email" placeholder="Enter email"
              name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="txtPass">Password</label>
            <input type="password" className="form-control" id="txtPass" ref="password" placeholder="Password"
              name="password"/>
          </div>
          <button type="submit" className="btn btn-default btn-block">Login</button>
          <br/>
          <h5><Link to="/reset">Forgot password?</Link></h5>

        </form>
      </div>
      <div className="col-md-4">
        <form id="frmRegister" role="form" onSubmit={this.onRegisterFormSubmit}>
          <p>{this.state.message}</p>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="txtRegEmail">Email address</label>
            <input type="email" className="form-control" ref="email2" id="txtEmail" placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtRegPass">Password</label>
            <input type="password" className="form-control" ref="password2" id="txtPass" placeholder="Password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-default btn-block">Register</button>
          <br /> <br />
        </form>
      </div>
    </section>

    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser,
    fetchUser,
    fetchUserData,
    registerUser,
    loginWithProvider
  }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser,
            userData: state.userData
          };

}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
