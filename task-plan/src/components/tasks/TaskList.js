import React from "react";
import { Link } from "react-router-dom";
import TaskSummary from "./TaskSummary";

function TaskList({ tasks }) {
    return (
        <div className="task-list section">
            {tasks &&
                tasks.map((task) => {
                    return (
                        <Link to={"/task/" + task.id} key={task.id}>
                            <TaskSummary task={task} />
                        </Link>
                    );
                })}
        </div>
    );
}

export default TaskList;
