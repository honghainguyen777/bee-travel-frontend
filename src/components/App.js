import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Login from './auth/Login';
import Mapbox from './maps/Mapbox';
import Navbar from './nav/Navbar';
import "./App.css";

const Home = () => <h1>Home Page</h1>;
const Search = () => <h1>Search</h1>;
// const Signup = () => <h1>Signup</h1>;
// const CityDetail = () => <h1>CityDetail</h1>;
// const FavoriteCity = () => <h1>FavoriteCity</h1>;


class App extends React.Component {
    // constructor(props) {
    //     state={
    //         user: null,
    //     }
    // }
    async componentDidMount() {
        this.props.fetchUser();
        // this.props.login();
        // const response = await this.props.fetchUser();
        // this.setState(() => { user: response})
    }
    render() {
        return(
            <div className="app-container">
                <Navbar />
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/map" component={Mapbox} />
                        <Route path="/login" component={Login} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

// first agurment of the connect is reserved for mapStateToProps function
// actions now is assigned to the App component as props
export default connect(null, actions)(App);