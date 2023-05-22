import { useState } from "react";

import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  // Tasks main state
  const [toDo, setToDo] = useState([]);

  // This states are temp
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdataTask] = useState("");


  //    func add
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      setToDo([...toDo,
      { id: num, title: newTask, status: false }]);
      setNewTask('');
    }
  };

  //      func remove
  const removeTask = (id) => {
    setToDo(toDo.filter(task => task.id !== id));
  };

  //    func mark
  const markDoneTask = (id) => {
    setToDo(toDo.map(task => task.id === id
      ? ({ ...task, status: !task.status })
      : (task)))
  }

  //    func cancel
  const cancelUpdate = () => {
    setUpdataTask('');
  };

  //    func change
  const changeTaskHolder = (event) => {
    setUpdataTask({...updateTask,
      title: event.target.value});
  };

  //    func updata
  const updateTaskFunc = () => {
    let removeOldData = [...toDo].filter(task => task.id !== updateTask.id);
    setToDo([...removeOldData, updateTask]);
    setUpdataTask('');
  };




  return (
    <div className="App">
      <header className="App-header">ToDo List App</header>
      <div className="container App">

        {updateTask && updateTask ? ( // work on disply
          < UpdateForm
            updateTask={updateTask}
            changeTaskHolder={changeTaskHolder}
            updateTaskFunc={updateTaskFunc}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {/* if no tasks */}
        {toDo && toDo.length ? "" : "No Tasks...."}

        <ToDo
          toDo={toDo}
          markDoneTask={markDoneTask}
          setUpdataTask={setUpdataTask}
          removeTask={removeTask}
        />

      </div>
    </div>
  );
}

export default App;
