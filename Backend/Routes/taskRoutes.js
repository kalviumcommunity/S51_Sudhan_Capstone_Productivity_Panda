const express = require('express');
const Router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

Router.post('/create', authMiddleware, taskController.createTask);
Router.get('/tasks', authMiddleware, taskController.getAllTasks);
Router.get('/tasks/:id', authMiddleware, taskController.getTaskById);
Router.patch('/tasks/:id', authMiddleware, taskController.updateTask);
Router.delete('/tasks/:id', authMiddleware, taskController.deleteTask);



module.exports = Router;
