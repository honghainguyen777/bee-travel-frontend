import React from 'react';
import axios from 'axios';
import { fetchTop10Cities, fetchCities } from '../actions';
import { connect } from 'react-redux';

class Search extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState(() => ({query: event.target.value}));
    }

    formSubmitHandler(event) {
        event.preventDefault();
        this.props.fetchCities(this.state.query);
        this.setState({query: ""});
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler} id="search-form" className="form-inline d-flex justify-content-center">
                <input onChange={this.onChangeHandler} value={this.state.query} className="form-control mr-sm-2" type="text" name="query" id="query" placeholder="Your favorite city" aria-label="Search" required />
                <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
            </form>
        )
    }
}

export default connect(null, { fetchTop10Cities, fetchCities })(Search);