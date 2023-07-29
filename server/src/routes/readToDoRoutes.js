const ToDoModel = require('../models/ToDoModel');

module.exports = async (req, res) => {
  const todos = await ToDoModel.find();
  res.json(todos);
}