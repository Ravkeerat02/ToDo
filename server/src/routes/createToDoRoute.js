
const TodoModel = require('../models/ToDoModel');

module.exports = async (req , res) =>{
    const {text} = req.body;
    const todo = new TodoModel({
        text,
        completed: false,
    });
    const newToDo = await todo.save();
    res.json(newToDo);

}