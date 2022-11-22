const TaskModel = require('#Schemas/task.schema.js');

const deleteTaskController = async (req, res) => {
    const { _id } = req.body;

    const existingTaskByID = await TaskModel.findOne({ _id }).exec();

    if (! existingTaskByID) {
        return res
            .status(409)
            .send({ errors: ['No existe una tarea con ese ID'] });
    }

    await existingTaskByID.delete();

    return res.status(201).send('Tarea eliminada con éxito');
};

module.exports = deleteTaskController;