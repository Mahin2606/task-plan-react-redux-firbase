import React, { Component } from "react";
import TaskList from "../tasks/TaskList";
import Notifications from "./Notifications";

class Dashboard extends Component {
    state = {};
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TaskList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
