const ToDoModel = require('../models/ToDoModel');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await ToDoModel.findByIdAndDelete(id);

    if (!toDo) {
      return res.status(404).json({ error: 'ToDo not found' });
    }

    res.status(200).json({ message: 'ToDo deleted successfully', deletedToDo: toDo });
  } catch (error) {
    // Handle any potential errors that might occur during the deletion process
    res.status(500).json({ error: 'Internal server error' });
  }
};
