import React from "react";

function TaskSummary({ task }) {
    return (
        <div className="card grey lighten-4 z-depth-0 task-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{task.title}</span>
                <p>
                    Posted By {task.authorFirstName} {task.authorLastName}
                </p>
                <p className="grey-text">8th August, 2022, 03:08 PM.</p>
            </div>
        </div>
    );
}

export default TaskSummary;
