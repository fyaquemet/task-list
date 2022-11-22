const TaskModel = require('#Schemas/task.schema.js');

const getOneTaskController = async (req, res) => {
    const id = req.params.id;

    const task = await TaskModel.findOne({ id }, { name: 1, description: 1 }).exec();

    res.send(task);
};

module.exports = getOneTaskController;