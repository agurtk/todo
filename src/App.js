import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  // Tasks state
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1 ToDo List table", status: false },
    { id: 2, title: "Task 2 ", status: true },
    { id: 2, title: "Task 3", status: false },
  ]);

  // This state are temp
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdataTask] = useState("");

  const addTask = () => {};
  const removTask = (id) => {};
  const markDoneTask = (id) => {};
  const cancelUpdate = () => {};
  const changeTask = (event) => {};
  const updateTaskFunc = () => {};

  return (
    <div className="App">
      <header className="App-header">ToDo List App</header>
      <div className="container App">

        <div className="row">
          <div className="col">
            <input className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success">
              Add Task
            </button>
          </div>
        </div>


        {toDo && toDo.length ? "" : "No Tasks...."}

        {toDo && toDo
            // .sort((a, b) => a.id> b.id ? 1 : -1)
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskBg">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1 + " "}</span>
                      <span className="taskText">{task.title}</span>
                    </div>
                    <div className="iconsWrap">
                      <span title="Completed / Not Completed">
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span title="Edit">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      <span title="Delete">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
      </div>
    </div>
  );
}

export default App;
