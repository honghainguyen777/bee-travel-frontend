import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="nav-bar bg-warning">
        <ul class="nav-bar-ul">
          <li>
            <a href="/"> Bee-Travel</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

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
