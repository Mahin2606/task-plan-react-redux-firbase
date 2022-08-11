import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { Navigate } from "react-router-dom";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) {
            return <Navigate to="/" />;
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="red-text">
                        {authError ? <h6>{authError}</h6> : null}
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
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
