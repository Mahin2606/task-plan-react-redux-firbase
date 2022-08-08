import React from "react";
import TaskSummary from "./TaskSummary";

function TaskList({ tasks }) {
    return (
        <div className="task-list section">
            {tasks &&
                tasks.map((task) => {
                    return <TaskSummary task={task} key={task.id} />;
                })}
        </div>
    );
}

export default TaskList;
