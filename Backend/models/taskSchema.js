const mongoose = require("mongoose")

const tasks = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "userdetails"
    },
    tasks: [{
        type: mongoose.Types.ObjectId,
        ref: "usertaskformdetails"
    }]
})

const TaskList = mongoose.model("tasklist", tasks)
module.exports = TaskList;