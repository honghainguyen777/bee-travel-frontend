import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../nav/logo_transparent.png';
import { login } from '../../actions';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      username: "",
      password: "",
      flag: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({show: false, flag: false});
  }

  handleShow() {
    this.setState({show: true, flag: false});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
    this.setState({username: "", password: "", flag: true});
    // this.setState({username: "", password: ""});
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, flag: false });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("next props", nextProps.isSuccessed);
    console.log("previous props", prevState);
    return null;
  }

  render() {
    console.log(this.props.isSuccessed, this.props.message)
    const messageError = (
      <div className="alert alert-warning alert-dismissible fade show text-center" id="signin-failed" role="alert">
        <strong>{this.props.message}</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="md-hidden d-inline"> Log In</span>
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <div className="header-box w-100 d-flex justify-content-center flex-column align-items-center pl-4">
              <Modal.Title>Login Form</Modal.Title>
              <img className="logo-auth" src={logo} alt="logo-bee-travel"/>
            </div>
          </Modal.Header>
          <Modal.Body>
            {!this.props.isSuccessed && this.state.flag ? messageError : null}
            <form onSubmit={this.handleFormSubmit} className="login-form ml-5 mr-5" id="loginForm">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user field-icon"></i></span>
                </div>
                <input onChange={this.handleChange} value={this.state.username} type="text" className="form-control" name="username" placeholder="username" required />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i class="fa fa-key field-icon"></i></span>
                </div>
                <input onChange={this.handleChange} value={this.state.password} type="password" name="password" className="form-control" placeholder="password" required />
              </div>
              <div class="form-group text-center mb-0">
                <button className="btn btn-login">Log In</button>
              </div>
            </form>
          </Modal.Body>
          <div class="row m-0 p-0">
          <div class="col-4">
            <hr />
          </div>
          <div class="col-4 text-center">
            <p>Or</p>
          </div>
          <div class="col-4">
            <hr />
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-secondary btn-register mb-3" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">New Account</button>
        </div>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { isSuccessed: state.auth.isSuccessed, message: state.auth.message };
}

export default connect(mapStateToProps, { login })(LoginModal);