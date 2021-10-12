import './AddTask.css';
import {useState} from "react";

function AddTask(props){
    const [currTask, setCurrTask] = useState("");

    return (
        <div>
            <input
                className="todo-input"
                id="new-todo-text"
                placeholder="Enter task here"
                value={currTask}
                onChange={e => {
                    setCurrTask(e.target.value);
                }}
                onKeyPress={e => {
                    if (currTask !== "") {
                        if (e.key === "Enter") {
                            props.handleAddTask(currTask);
                            setCurrTask("");
                        }
                    }
                }}
            />
            <button className="add-button"
                    onClick={() => {
                        if (currTask != "") {
                            props.handleAddTask(currTask);
                            setCurrTask("");
                        }
                    }}>
                Add
            </button>
        </div>
    );
}

export default AddTask;