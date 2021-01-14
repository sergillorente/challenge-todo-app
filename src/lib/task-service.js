import axios from 'axios';

class TaskService {
    constructor() {
        this.axios = axios.create({
            baseURL: false, /*http://localhost:4000/api/v1 */
            withCredentials: true
        });
    }

    getAllTodos = () => {

    }


    getTodo = () => {
        
    }


    createTodo = () => {
        
    }


    updateTodo = () => {
        
    }


    deleteTodo = () => {
        
    }
}

const taskService = new TaskService();

export default taskService;