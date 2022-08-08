import React from "react";
import { useParams } from "react-router-dom";

function TaskDetails() {
    const { id } = useParams();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Task Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="card-action greylighten-4 grey-text">
                    <div>Posted By Mahin Islam</div>
                    <div>8th August, 2022, 03:48 PM.</div>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;
