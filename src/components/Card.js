import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    // 체크박스
    const handleCheckboxChange = () => {
        let tempTask = { ...taskObj, Completed: !taskObj.Completed };
        updateListArray(tempTask, index);
    };

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
            <div class = "task-holder">
                <span class = {`card-header ${taskObj.Completed ? 'completed' : ''}`} style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>
                    {taskObj.Name}
                </span>
                <p className = {`mt-3 ${taskObj.Completed ? 'completed' : ''}`}>{taskObj.Description}</p>
                <div>
                    <input type="checkbox" checked={taskObj.Completed} onChange={handleCheckboxChange} /> Completed
                </div>
                <div style={{ position: "absolute", top: "160px", left: "160px" }}>
                    <button style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>Edit</button>
                    <button style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;
