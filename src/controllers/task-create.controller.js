const TaskModel = require('#Schemas/task.schema.js');

const createTaskController = async (req, res) => {
    const { _id, name, description } = req.body;

    const existingTaskByID = await TaskModel.findOne({ _id, name }).exec();

    if (existingTaskByID) {
        return res
            .status(409)
            .send({ errors: ['Ya existe una tarea con ese nombre o ID'] });
    }

    const task = new TaskModel({
        _id,
        name,
        description
    });

    await task.save();

    return res.status(201).send('Tarea creada con éxito');
};

module.exports = createTaskController;