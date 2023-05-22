import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm.jsx"
import UpdateForm from "./components/UpdateForm.jsx"
import ToDo from "./components/ToDo.jsx"

function App() {
  // Tasks state
  const [toDo, setToDo] = useState([
    // { id: 1, title: "Task 1", status: false },
  ]);

  // This state are temp
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdataTask] = useState("");

  //    func add
  const addTask = () => {
    if(newTask) {
      let num = toDo.length+1;
      let newData = {id: num, title: newTask, status: false};
      setToDo([...toDo, newData]);
      setNewTask('');
    }
  };
  //      func remove
  const removeTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks)
  };
  //    func mark
  const markDoneTask = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({...task,status: !task.status});
      }
      return task;
    })
    setToDo(newTask)
  };
  //    func cancel
  const cancelUpdate = () => {
    setUpdataTask('');
  };
  //    func change
  const changeTask = (event) => {
    let newData = {
      id: updateTask.id,
      title: event.target.value,
      status: updateTask.status ?true:false
    };
    setUpdataTask(newData);
  };
  //    func updata
  const updateTaskFunc = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateTask.id);
    let updatedObject = [...filterRecords,updateTask]
    setToDo(updatedObject);
    setUpdataTask('');
  };
  
  


  return (
    <div className="App">
      <header className="App-header">ToDo List App</header>
      <div className="container App">

        {updateTask && updateTask ? (
          <>
          {/* Update Task area */}
        <div className="row my-5">
        <div className="col">
          <input className="form-control form-control-lg"
          value={updateTask && updateTask.title}
          onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20"
          onClick={updateTaskFunc}>
            Update
          </button>
          <button className="btn btn-lg btn-warning"
          onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      </>) : (
        <>
        {/* Add Task area */}
        <div className="row my-5">
          <div className="col">
            <input className="form-control form-control-lg"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button
            className="btn btn-lg btn-success"
            onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>
        </>
      )}
        


        


        {toDo && toDo.length ? "" : "No Tasks...."}

        {toDo && toDo
            .sort((a, b) => a.id> b.id ? 1 : -1)
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskBg">
                    {/* div tasks */}
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>
                    {/* div icons */}
                    <div className="iconsWrap">
                      {task.status ? null : (
                      <span title="Edit"
                      onClick={ () => {setUpdataTask(
                        {id : task.id,
                        title: task.title,
                        status: task.status?true:false})}}>
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      )}
                      <span title="Completed / Not Completed"
                      onClick={() => markDoneTask(task.id)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span title="Delete"
                      onClick={() => removeTask(task.id)}>
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
