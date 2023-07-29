const ToDoModel = require('../models/ToDoModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  console.log('Request body:', req.body);

  try {
    // Find the Todo item by its id
    const todo = await ToDoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    console.log('Existing Todo:', todo);

    // Update the Todo item with the new values
    todo.text = text;
    todo.completed = completed;

    // Save the updated Todo item
    const updatedTodo = await todo.save();

    console.log('Updated Todo:', updatedTodo);

    res.json(updatedTodo);
  } catch (error) {
    // If an error occurs during the update process, handle it gracefully
    console.error('Error updating Todo:', error);
    res.status(500).json({ error: 'Failed to update Todo' });
  }
};
