import React from "react";
import TaskSummary from "./TaskSummary";

function TaskList() {
    return (
        <div className="task-list section">
            <TaskSummary />
            <TaskSummary />
            <TaskSummary />
        </div>
    );
};

export default TaskList;
