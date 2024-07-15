const express = require('express');
const Router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const Task = require('../models/userAddTaskDetails');

Router.post('/api/addtask', authMiddleware, taskController.createTask);
Router.get('/api/getalltask', authMiddleware, taskController.getAllTasks);
Router.delete('/api/deletetasks/:id', authMiddleware, taskController.deleteTask);
Router.patch('/api/updatetask/:id', async (req, res) => {

  
    try {
      const { id } = req.params;
      const { EventName, Description, Date, Status, DurationHours, DurationMinutes, userID } = req.body.selectedTask;

      // Update the task
    //   const updatedTask = await Task.findOneAndUpdate({ _id: id }, {updateData}, { new: true });
    const updatedTask = await Task.findByIdAndUpdate(id, { EventName, Description, Date, Status, DurationHours, DurationMinutes, userID } , {new: true})
      console.log(updatedTask, "updated task")
    //   if (!updatedTask) {
    //     return res.status(404).send({ message: "Task not found" });
    //   }
  
      res.status(200).json(updatedTask);
    } catch (err) {
      console.error('Internal server error:', err.message);
      return res.status(500).send({
        message: "Internal server error"
      });
    }
  });


module.exports = Router;
