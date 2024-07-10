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

exports.getTaskById = async (req, res) => {
  try {
      const task = await Task.findOne({ _id: req.params.id, User: req.user._id });
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


  exports.updateTask = async (req, res) => {
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.params.id,
           User: req.user._id 
          },
        req.body,
        { new: true }
      );
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

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