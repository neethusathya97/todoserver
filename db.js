const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo',{ useNewUrlParser:true });
const Todo = mongoose.model('Todo',{name: String,description: String});
exports.Todo=Todo;
