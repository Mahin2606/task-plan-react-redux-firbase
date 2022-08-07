import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create-task">New Task</NavLink>
            </li>
            <li>
                <NavLink to="/">Sign Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="waves-effect waves-light btn btn-floating grey">
                    MI
                </NavLink>
            </li>
        </ul>
    );
};

export default SignedInLinks;
