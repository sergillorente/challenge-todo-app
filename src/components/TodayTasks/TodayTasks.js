import React from 'react';
import ToDoCard from '../ToDoCard/ToDoCard';

class TodayTasks extends React.Component {
    state = {
        tasks: [],
        filteredTasks: []
    }

    componentDidMount() {
        
    }

    render () {
        return (
            <div>
                {this.state.filteredTasks.map((task, i) => <ToDoCard key={task[i]} task={task} />)}
            </div>
        )
    }
}

export default TodayTasks;