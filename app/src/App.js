import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import ToolBar from "./components/ToolBar"
import React, {useState} from "react";
import SortSelection from './components/SortSelection';

function App(props) {
    const[showCompleted, setShowCompleted] = useState(true);
    const filteredList = props.taskList.filter(task => showCompleted || !task.isCompleted);
    const numCompleted = props.taskList.filter(task => task.isCompleted).length;

    return (
        <div id="app-container">
            <div className="heading">
                <h1>Task Manager</h1>
            </div>
            <div className="topButtonBar">
                <div className="add-task">
                <AddTask
                    taskList={filteredList}
                    onSetTaskList={props.setTaskList}
                    onAddTask={props.handleAddTask}
                />
                </div>
                <button className="sortBy">Sort By</button></div>
            <div>
                <ToDoList
                    taskList={filteredList}
                    onDeleteTask={props.handleDeleteTask}
                    onChangePriority={props.handleChangePriority}
                    onDeleteTasks={props.handleDeleteTasks}
                    onTaskFieldChanged={props.handleTaskFieldChanged}
                    numCompleted={numCompleted}
                />
            </div>
            <div>
                <ToolBar
                    onDeleteTasks={props.handleDeleteTasks}
                    showCompleted={showCompleted}
                    onSetShowCompleted={setShowCompleted}
                    numCompleted={numCompleted}
                />
            </div>
        </div>
    );
}

export default App;
