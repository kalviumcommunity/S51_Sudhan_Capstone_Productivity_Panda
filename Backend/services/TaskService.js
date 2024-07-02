const userDetailsModel = require('../models/userDetails');
const userAddTaskDetailsModel = require('../models/userAddTaskDetails');

//Funtion to create a task and link it to a user
const createTaskForUser = async (userId, taskData) => {
    const newTask = new userAddTaskDetailsModel(taskData);

    try {
        //Save the new task
        const savedTask = await newTask.save();

        //update the user to link the new task
        await userDetailsModel.findByIdAndUpdate(userId, { task: savedTask._id });

        console.log('Task created and linked to user:', savedTask);
        return savedTask;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}


//Function to retrieve a user along with theri task
const getUserWithTask = async (userId) => {
    try {
        const user = await userDetailsModel.findById(userId).populate('task').exce();
        console.log('User with populated task:', user);
        return user;
    } catch (error) {
        console.error('Error retrieving user with task:', error);
        throw error;
    }
}

const updateTaskForUser = async (userId, taskId, taskData) => {
    try {
        const task = await userAddTaskDetailsModel.findOneAndUpdate({
            _id: taskId, User: userId
        }, taskData, {
            new: true
        });
        console.log('Task is updated:', task)
        return task;
    } catch (error) {
        console.error('Error in updating the task:', error);
    }
}

const deleteTaskForUser = async (userId, taskId) => {
    try {
        const task = await userAddTaskDetailsModel.findOneAndDelete({
            _id: taskId, User: userId
        })
        if (task) {
            await userDetailsModel.findByIdAndDelete(userId, { $unset: { Task: '' } });
        }
        console.log('Task is deleted successfully:', task)
        return task;
    } catch (error) {
        console.error('Error in deleting the task:', error)
    }
}
module.exports = {
    createTaskForUser,
    getUserWithTask,
    updateTaskForUser,
    deleteTaskForUser
}