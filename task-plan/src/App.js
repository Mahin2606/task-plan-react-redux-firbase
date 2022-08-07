import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateTask from "./components/tasks/CreateTask";
import TaskDetails from "./components/tasks/TaskDetails";

class App extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/task/:id" element={<TaskDetails />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/create-task" element={<CreateTask />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
