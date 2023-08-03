const TodoModel = require("../models/ToDoModel");

module.exports = async (req, res) => {
  const { text, priority, description } = req.body;
  const todo = new TodoModel({
    text,
    completed: false,
    createdAt: Date.now(),
    priority,
    description,
  });
  const newToDo = await todo.save();
  res.json(newToDo);
};
