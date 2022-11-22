const { Router } = require('express');
const getAllTasksController = require('#Controllers/task-get-all.controller.js');
const getOneTaskController = require('#Controllers/task-get-one.controller.js');
const createTaskController = require('#Controllers/task-create.controller.js');
const updateTaskController = require('#Controllers/task-update.controller.js');
const deleteTaskController = require('#Controllers/task-delete.controller.js');

const taskRouter = Router();

taskRouter.get('/tasks', getAllTasksController);
taskRouter.get('/tasks/:id', getOneTaskController);
taskRouter.post('/task', createTaskController);
taskRouter.put('/task', updateTaskController);
taskRouter.delete('/task', deleteTaskController);

module.exports = taskRouter;