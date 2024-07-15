const User = require("../models/userDetails")
const Task = require("../models/userAddTaskDetails")
const TaskList = require("../models/taskSchema")

exports.createTask = async (req, res) => {
  try {
      const user = await User.findById(req.user._id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const task = new Task({ ...req.body, User: req.user._id });
      await task.save();

      user.Task = task._id;
      await user.save();
      let list = TaskList.findOne({
        user: user._id
      })

      if(!list){
        list = list.createOne({
          user: user._id,
          tasks: [task._id]
        })
      }
      list.tasks.push(task._id)

      res.status(201).json({ task });

  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({User: req.user._id});
        res.json(tasks);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


// const updateTask = async (req, res) => {
//   console.log('Received PATCH request for task update');
//   console.log('Task ID:', req.params.id);
//   console.log('Request body:', req.body);

//   // Validate the request body
//   const { error, value } = addTaskFormValidator.validate(req.body);

//   if (error) {
//     console.error('Validation error:', error.details.map(detail => detail.message).join(', '));
//     return res.status(400).send({
//       message: `Bad request, error: ${error.details.map(detail => detail.message).join(', ')}`
//     });
//   }

//   try {
//     const { id } = req.params;
//     const { EventName, Description, Date, Status, DurationHours, DurationMinutes } = req.body;

//     // Create the update object
//     const updateData = { EventName, Description, Date, Status, DurationHours, DurationMinutes, userID: userID };

//     // Update the task
//     const updatedTask = await Task.findOneAndUpdate({ _id: id }, updateData, { new: true });

//     if (!updatedTask) {
//       return res.status(404).send({ message: "Task not found" });
//     }

//     res.status(200).json(updatedTask);
//   } catch (err) {
//     console.error('Internal server error:', err.message);
//     return res.status(500).send({
//       message: "Internal server error"
//     });
//   }
// };

// module.exports = { updateTask };

  exports.deleteTask = async (req, res) => {
    try {
      const task = await Task.findOneAndDelete({ _id: req.params.id,
         user: req.user._id 
        });
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };