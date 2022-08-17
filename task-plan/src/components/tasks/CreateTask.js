import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../store/actions/taskActions";

function CreateTask() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.firebase.auth);

    useEffect(() => {
        if (!auth.uid) {
            navigate("/signin");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(createTask({ title, content }));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create New Task</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Task Content</label>
                    <textarea
                        className="materialize-textarea"
                        name="content"
                        id="content"
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="input-field">
                    <button className="waves-effect waves-light btn grey darken-3 z-depth-0">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;
