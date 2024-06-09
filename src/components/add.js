import React, { useState, useEffect } from "react";


function Add() {
    const [taskadd, setTaskadd] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function formSubmit(e) {
        e.preventDefault();
        if (taskadd.trim()) {
            if (isEditing) {
                const updatedTasks = tasks.map((task, index) =>
                    index === currentTaskIndex ? taskadd : task
                );
                setTasks(updatedTasks);
                setIsEditing(false);
                setCurrentTaskIndex(null);
            } else {
                setTasks([...tasks, taskadd]);
                setTaskadd('');
            }
        }
    }

    function inputdata(e) {
        setTaskadd(e.target.value);
    }

    function deleteTask(index) {
        const newTasks = tasks.filter((_, currentelementindex) => currentelementindex !== index);
        setTasks(newTasks);
    }

    function editTask(index) {
        setTaskadd(tasks[index]);
        setIsEditing(true);
        setCurrentTaskIndex(index);
    }

    return (
        <div className="task-manager-container">
            <div className="task-manager-content">
                <h1 className="task-manager-heading">To-Do</h1>
                <form className="task-manager-form" onSubmit={formSubmit}>
                    <input
                        type="text"
                        value={taskadd}
                        placeholder="Enter tasks"
                        onChange={inputdata}
                        className="task-manager-input"
                    />
                    <button type="submit" className="task-manager-button">
                        {isEditing ? 'Update Task' : 'Add Task'}
                    </button>
                </form>
                <ul className="task-manager-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-manager-item">
                            {task}
                            <div>
                                <button
                                    onClick={() => editTask(index)}
                                    className="edit-button"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Add;
