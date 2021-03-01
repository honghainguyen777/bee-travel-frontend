import React from "react";
import "./Navbar.css";
import LoginModal from '../auth/Login';
import RegisterModal from '../auth/RegisterModal';
import logo from './logo_transparent.png';
import { openRegisterModal, openLoginModal } from '../../actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(modal) {
    if (modal === "register") {
      this.props.openRegisterModal();
    } else {
      this.props.openLoginModal();
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-warning">
          <a className="navbar-brand" href="/">
            <img className="d-inline logo-image" src={logo} alt="logo-bee-travel" />
            <span className="blue d-inline brand-name"> Bee Travel</span>
          </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <LoginModal />
              <RegisterModal />
              <button onClick={() => this.openModal("register")}>Register</button>
              <button onClick={() => this.openModal("login")}>Login</button>
            </li>
          </ul>
        </div>
        {/* <ul className="nav-bar-ul">
          <li>
            <a href="/"> Bee-Travel</a>
            
          </li>
        </ul> */}
      </nav>
    );
  }
}

// export default Navbar;
export default connect(null, { openRegisterModal, openLoginModal })(Navbar);

{
  /* <nav class="nav-bar bg-warning">
        <ul class="nav-bar-ul">
            <li><a href="/"> Bee-Travel</a></li>
            {{!-- <li class="nav-item mr-3"><a class="btn btn-primary text-white border-0" href="/search" role="button" aria-expanded="false"><i class="fas fa-route fa-lg"></i></i><span class="md-hidden d-inline fa-lg"> Search</span></a></li> --}}
            {{!-- <li><a href="/search">Search</a></li> --}}
            <li class="nav-item mr-3"><a class="btn btn-primary text-white border-0" href="/search" role="button" aria-expanded="false"><i class="fas fa-route fa-lg"></i><span class="md-hidden d-inline"> Search</span></a></li>
            {{#if username }}
            {{!-- <li><a href="/favorites">Favorites</a></li> --}}
            <li class="nav-item mr-3"><a class="btn btn-primary text-white border-0" href="/favorites" role="button" aria-expanded="false"><i class="fas fa-heart fa-lg"></i><span class="md-hidden d-inline"> Favorites</span></a></li>
            {{!-- <li><a href="/visited">Visited</a></li> --}}
            <li class="nav-item mr-3"><a class="btn btn-primary text-white border-0" href="/visited" role="button" aria-expanded="false"><i class="fas fa-bus fa-lg"></i><span class="md-hidden d-inline"> Visited</span></a></li>
            {{!-- <li><a href="/memories">Memories</a></li> --}}
            <li class="nav-item mr-3"><a class="btn btn-primary text-white border-0" href="/memories" role="button" aria-expanded="false"><i class="fas fa-grin-hearts fa-lg"></i><span class="md-hidden d-inline"> Memories</span></a></li>
            <li class="nav-item mr-3"><a class="btn btn-primary text-white border-0" href="/auth/logout" role="button" aria-expanded="false"><i class="fas fa-sign-out-alt fa-lg"></i><span class="md-hidden d-inline"> Log Out</span></a></li>
            {{else}}
            <li class="nav-item mr-3"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#signupModal"><i class="fas fa-user-plus fa-lg"></i><span class="md-hidden d-inline"> Register</span></a></button></li>
            <li class="nav-item mr-3"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal"><i class="fas fa-sign-in-alt fa-lg"></i><span class="md-hidden d-inline"> Log In</span></a></button></li>
            {{!-- <li><a href="/auth/signup">Signup</a></li>
            <li><a href="/auth/login">Login</a></li> --}}
            {{/if }}
        </ul>
    </nav> */
}
