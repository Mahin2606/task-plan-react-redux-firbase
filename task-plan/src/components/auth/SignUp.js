import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authAction";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            return <Navigate to="/" />;
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="red-text">
                        {authError ? <h6>{authError}</h6> : null}
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={this.handleChange}
                        />
                    </div>
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
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
