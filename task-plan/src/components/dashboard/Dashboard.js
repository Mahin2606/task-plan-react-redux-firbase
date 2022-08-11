import React, { Component } from "react";
import TaskList from "../tasks/TaskList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

class Dashboard extends Component {
    state = {};
    render() {
        const { tasks, auth } = this.props;
        if (!auth.uid) {
            return <Navigate to="/signin" />;
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TaskList tasks={tasks} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: "tasks",
        },
    ])
)(Dashboard);
