import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { createTask } from "../../store/actions/taskActions";

class CreateTask extends Component {
    state = {
        title: "",
        content: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state);
    };
    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Navigate to="/signin" />;
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Task</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Task Content</label>
                        <textarea
                            className="materialize-textarea"
                            name="content"
                            id="content"
                            onChange={this.handleChange}
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
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
