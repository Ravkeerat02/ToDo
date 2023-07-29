const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Adding a required constraint for the 'text' field
  },
  completed: {
    type: Boolean,
    default: false, // Adding a default value for the 'completed' field
  },
  priority: {
    type: Number, // Assuming priority will be represented as a number
    default: 0, // Adding a default value for the 'priority' field
  },
  createdAt: {
    type: Date,
    default: Date.now, // Adding a default value for the 'createdAt' field
  },
});

const ToDoModel = mongoose.model('Todo', TodoSchema);

module.exports = ToDoModel;
