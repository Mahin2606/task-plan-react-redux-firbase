import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

function SignedInLinks(props) {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create-task">New Task</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Sign Out</a>
            </li>
            <li>
                <NavLink
                    to="/"
                    className="waves-effect waves-light btn btn-floating grey"
                >
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
