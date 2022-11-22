const { mongoose } = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    _id: { type: String, id: false },
    name: { type: String, require: true, minLength: 2, maxLength: 50 },
    description: { type: String, require: false, maxLength: 255 }
});

const UserModel = model('task', taskSchema);

module.exports = UserModel;