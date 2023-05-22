import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck, faPen, faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, markDoneTask, setUpdataTask, removeTask }) => {

    return (
        <>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
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
                                    {task.status ? false : (
                                        <span title="Edit"
                                            onClick={() => {
                                                setUpdataTask(task)
                                            }}>
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
        </>
    )
}

export default ToDo;