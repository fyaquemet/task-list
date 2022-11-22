const TaskModel = require('#Schemas/task.schema.js');

const updateTaskController = async (req, res) => {
    const { _id, name, description } = req.body;

    const existingTaskByID = await TaskModel.findOne({ _id }).exec();

    if (! existingTaskByID) {
        return res
            .status(409)
            .send({ errors: ['No existe una tarea con ese ID'] });
    }

    existingTaskByID.name = name;
    existingTaskByID.description = description;

    await existingTaskByID.save();

    return res.status(201).send('Tarea actualizada con éxito');
};

module.exports = updateTaskController;