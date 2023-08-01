const express = require('express');

const updateToDoRoutes = require('./routes/updateToDoRoute');
const createToDoRoutes = require('./routes/createToDoRoute');
const readToDoRoutes = require('./routes/readToDoRoutes');
const deleteToDoRoutes = require('./routes/removeToDoRoute');
/*
need proper implementation
const isLoggedIn = require('./middleware/isLoggedIn');
*/
const loginRoutes = require('./routes/loginRoute');

const router = express.Router();
// login
router.post('/login', loginRoutes);
// read
router.get('/todos' , readToDoRoutes);
// create
router.post('/todos', createToDoRoutes);
// udpate
router.put('/todos/:id', updateToDoRoutes);
// delete
router.delete('/todos/:id', deleteToDoRoutes);

module.exports = router;
