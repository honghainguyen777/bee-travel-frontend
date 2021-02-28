import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import "./Login.css";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
            <Button variant="primary" onClick={this.handleShow}>
              <i className="fas fa-sign-in-alt fa-lg"></i>
              <span className="md-hidden d-inline"> Log In</span>
            </Button>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Login Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div id="messageLogin">message</div>
                <form onsubmit="login(); return false" className="login-form ml-5 mr-5" id="loginForm" method="post">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-user field-icon"></i></span>
                    </div>
                    <input type="text" className="form-control" name="username" placeholder="username" required />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i class="fa fa-key field-icon"></i></span>
                    </div>
                    <input type="password" name="password" className="form-control" placeholder="password" required />
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

export default LoginModal;