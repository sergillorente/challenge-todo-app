import React from 'react';

const DeleteTask = props => {
    const handleDelete = (event, taskId, index) => {
        event.preventDefault()
        props.handleDelete(taskId, index)

        const { task: taskId } = props.task
        const { index } = props
        

    }
    return (
        <div>
            <button onClick={(event) => handleDelete(event, taskId, index)} >Delete</button>
        </div>
    )
}

export default DeleteTask;