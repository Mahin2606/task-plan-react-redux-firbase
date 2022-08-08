import React, { Component } from "react";
import TaskList from "../tasks/TaskList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

class Dashboard extends Component {
    state = {};
    render() {
        const { tasks } = this.props;
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
        tasks: state.task.tasks,
    };
};

export default connect(mapStateToProps)(Dashboard);
