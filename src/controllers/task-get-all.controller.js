const TaskModel = require('#Schemas/task.schema.js');

const getAllTasksController = async (req, res) => {
    const tasks = await TaskModel.find({}, { name: 1, description: 1 }).exec();

    res.send(tasks);
};

module.exports = getAllTasksController;