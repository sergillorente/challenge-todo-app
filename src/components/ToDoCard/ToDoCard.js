import React from 'react';

const ToDoCard = props => {
    const { title, body } = props.task 
    return (
        <div>
            <h1>TASK</h1>
                <h2>{title}</h2>
                <p>{body}</p>
        </div>
    )
}

export default ToDoCard;