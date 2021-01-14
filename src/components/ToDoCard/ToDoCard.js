import React from 'react';
import DeleteTask from '../DeleteTask/DeleteTask';

const ToDoCard = props => {
    const { title, body } = props.task 
    return (
        <div>
            <h1>TASK</h1>
                <h2>{title}</h2>
                <p>{body}</p>
                <DeleteTask />
        </div>
    )
}

export default ToDoCard;