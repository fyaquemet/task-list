const { mongoose } = require('mongoose');

const connectDB = (url) => 
    mongoose.connect(url).then(() => console.log('Database connected'));

module.exports = connectDB;