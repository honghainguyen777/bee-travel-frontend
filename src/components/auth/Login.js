import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", show: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <>

      
      <li className="nav-item mr-3">
        <button type="button" className="btn btn-primary" data-toggle="modal" onClick={this.handleShow}>
          <i className="fas fa-sign-in-alt fa-lg"></i><span className="md-hidden d-inline"> Log In</span>
        </button></li>
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden={this.state.show} >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Login Form</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body"> 
              <div id="messageLogin">message</div>
              <form onsubmit="login(); return false" className="login-form ml-5 mr-5" id="loginForm" method="post">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" name="username" placeholder="username" required />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password" name="password" className="form-control" placeholder="password" required />
                </div>
                <div class="form-group text-center">
                  <button type="submit" className="btn btn-login">Log In</button>
                </div>
              </form>
            </div>
            <div className="row m-0 p-0">
              <div className="col-4"><hr/></div>
              <div className="col-4 text-center">
                <p>Or</p>
              </div>
              <div className="col-4">
                <hr />
              </div>
            </div>
            <form className="text-center">
              <button type="button" className="btn btn-secondary btn-register mb-3" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">New Account</button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default connect(null, actions)(Login);




{/* 
return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  } */}