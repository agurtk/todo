const UpdateForm = ({ updateTask, changeTaskHolder, updateTaskFunc, cancelUpdate }) => {

    return (
        <div className="row my-5">
            <div className="col">
                <input className="form-control form-control-lg"
                    value={updateTask && updateTask.title}
                    onChange={(e) => changeTaskHolder(e)}
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
    )
}

export default UpdateForm;