const AddTaskForm = ({ newTask, setNewTask,  addTask}) => {

    return (
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
    )
}

export default AddTaskForm;