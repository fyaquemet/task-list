require('#Config/env.js');
const connectDB = require('#Config/db.js');
const httpServer = require('#Config/http.js');

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL);

    httpServer.listen(process.env.PORT);
};

bootstrap();
