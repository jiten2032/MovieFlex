import React, { Component } from 'react';



export class MoviesList extends Component {
    state = {
        SerachContainer: ""
    }

    handleChange = (e) => {
        this.setState({
            SerachContainer: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onclick(this.state.SerachContainer)



        this.setState({
            SerachContainer: ""
        })
    }

    render() {
        // console.log(this.props);
        return (
            <div className="movieslist">
                <form className="row g-2 my-5 d-flext justify-content-center" onSubmit={this.handleSubmit}>
                    <div className="col-md-3 ">
                        <label htmlFor="inputPassword2" className="visually-hidden">Search your Movies</label>
                        <input type="text" className="form-control" id="inputPassword2" onChange={this.handleChange} placeholder="Search your Movies" value={this.state.SerachContainer} />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary mb-3">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MoviesList

