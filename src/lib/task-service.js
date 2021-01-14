import axios from 'axios';

class TaskService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_URL + '/api/v1',
        });
    }

    getAllTodos = () => {
        const pr = this.api.get('/todos')
            .then((response) => response.data)

        return pr;
    }


    getTodo = (id) => {
        const pr = this.api.get(`/todos/${id}`)
            .then((response) => response.data)

        return pr;
    }


    createTodo = () => {
        const pr = this.api.post('/todos')
        .then((response) => response.data)

        return pr;
    }


    updateTodo = (id, updated) => {
        const pr = this.api.put(`/todos/${id}`, updated)
        .then((response) => response.data)

        return pr;
    }


    deleteTodo = (id) => {
        const pr = this.api.delete(`/todos/${id}`)
        .then((response) => response.data)

    return pr;
    }
}

const taskService = new TaskService();

export default taskService;