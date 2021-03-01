import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../nav/logo_transparent.png';
import { closeRegisterModal } from '../../actions';

class SignupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.props.closeRegisterModal();
  }

  handleShow() {
    this.setState({show: true});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
    this.setState({username: "", password: ""});
    // this.setState({username: "", password: ""});
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, flag: false });
  }

//   componentDidMount() {
//       if (this.props.switch) {
//         this.setState({ show: true });
//       }
//   }

  render() {
    return (
      <>
        {/* <Button variant="primary" onClick={this.handleShow}>
          <FontAwesomeIcon icon={faUserPlus} />
          <span className="md-hidden d-inline"> Register</span>
        </Button> */}
        <Modal
          show={this.props.isModalOpen}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <div className="header-box w-100 d-flex justify-content-center flex-column align-items-center pl-4">
              <Modal.Title>Register Form</Modal.Title>
              <img className="logo-auth" src={logo} alt="logo-bee-travel"/>
            </div>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleFormSubmit} className="login-form ml-5 mr-5">
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
    console.log(state.auth);
  return { isSuccessed: state.auth.isSuccessed, message: state.auth.message, isModalOpen: state.auth.is_register_modal };
}

export default connect(mapStateToProps, { closeRegisterModal })(SignupModal);