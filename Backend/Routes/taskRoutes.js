const express = require('express');
const Router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

Router.post('/api/addtask', authMiddleware, taskController.createTask);
Router.get('/api/getalltask', authMiddleware, taskController.getAllTasks);
Router.delete('/api/deletetasks/:id', authMiddleware, taskController.deleteTask);
// Router.patch('/api/updatetask/:id', authMiddleware, taskController.updateTask);

// Router.post('/api/addtask', authMiddleware);
// Router.get('/api/getalltask', authMiddleware);
// Router.delete('/api/deletetasks/:id', authMiddleware);
// Router.patch('/api/updatetask/:id', authMiddleware, taskController.updateTask);

module.exports = Router;
