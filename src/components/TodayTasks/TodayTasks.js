import React from 'react';
import taskService from '../../lib/task-service';
import ToDoCard from '../ToDoCard/ToDoCard';

class TodayTasks extends React.Component {
    state = {
        tasks: [],
        filteredTasks: [],
        error: false
    }

    componentDidMount() {
        taskService.getAllTodos()
            .then(response => this.setState({ tasks: response, filteredTasks: response, error: false}))
            .error(err => this.setState({ error: err.response.data.message }))
    }

    handleSubmit = () => {

    }

    handleDelete = (id, index) => {
        taskService.deleteTodo(id)
            .then(response => {
                const newTasks = [ ...this.state.filteredTasks ]
                newTasks.splice(index, 1)
                this.setState( { filteredTasks: [...newTasks] } )

            })
    }
}

    render () {
        return (
            <div>
                {this.state.filteredTasks.map((task, i) => <ToDoCard key={task[i]} task={task} handleSubmit={this.handleSubmit}/>)}
            </div>
        )
    }
}

export default TodayTasks;