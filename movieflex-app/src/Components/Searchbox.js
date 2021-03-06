import React, { Component } from 'react';
import { getMoviesRequest } from '../Actions/action';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import ReactNotification from 'react-notifications-component';
// import {store} from 'react-notifications-component';
// import 'animate.css';
// import 'react-notifications-component/dist/theme.css'

export class Searchbox extends Component {
    state = {
        SerachContainer: "",
        control_form: false
    }
    handleChange = (e) => {
        this.setState({
            SerachContainer: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state.SerachContainer;
        this.props.getMoviesRequest(data);


        this.setState({
            SerachContainer: "",

        })
    }
    handle_click_form = () => {
        this.setState({
            control_form: true
        })
    }
    handle_click_home = () => {
        this.setState({
            control_form: false
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light " style={{ backgroundColor: '#e3f2fd' }}>
                    <div className="container">

                        {this.state.control_form ? (null) : (
                            <form className="d-flex" onSubmit={this.handleSubmit}>
                                <input className="form-control me-2" type="search" onChange={this.handleChange} placeholder="Search your movies" aria-label="Search" value={this.state.SerachContainer} />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        )}



                        <div className="ms-auto ">
                            <ul className="navbar-nav ">

                                <li className="nav-item" onClick={this.handle_click_home}>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item" onClick={this.handle_click_form}>
                                    <Link to="/Favratemovies" className="nav-link active text-primary">Your Favourite Movies Lists</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(null, { getMoviesRequest })(Searchbox)
