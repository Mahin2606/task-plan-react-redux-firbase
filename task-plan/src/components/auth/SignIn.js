import React, { Component } from "react";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value],
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="waves-effect waves-light btn grey darken-3 z-depth-0">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
