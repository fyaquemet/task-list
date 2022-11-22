const express = require('express');
const taskRouter = require('#Routes/task.routes.js');

class Server{
    constructor() {
        this.baseRoute = '/api';
        
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(this.baseRoute, taskRouter);
    }

    listen(port) {
        this.server.listen(port, () => {
            console.log(`Listening at port ${port}`);
        });
    }
}

module.exports = Server;