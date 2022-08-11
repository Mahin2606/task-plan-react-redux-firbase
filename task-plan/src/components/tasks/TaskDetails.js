import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import withRouter from "../../misc/withRouter";

function TaskDetails(props) {
    const { task, auth } = props;
    if (!auth.uid) {
        return <Navigate to="/signin" />;
    }
    if (task) {
        return (
            <div className="container section project-details">
                <div className="card grey lighten-4 z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{task.title}</span>
                        <p>{task.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>
                            Posted By {task.authorFirstName}{" "}
                            {task.authorLastName}
                        </div>
                        <div>8th August, 2022, 03:48 PM.</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading task...</p>
            </div>
        );
    }
}

const mapStateToProps = (state, { params }) => {
    const { id } = params || {};
    const tasks = state.firestore.data.tasks;
    const task = tasks ? tasks[id] : null;
    return {
        task: task,
        auth: state.firebase.auth,
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: "tasks",
        },
    ])
)(TaskDetails);
