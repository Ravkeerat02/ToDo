const express = require("express");

const updateToDoRoutes = require("./routes/updateToDoRoute");
const createToDoRoutes = require("./routes/createToDoRoute");
const readToDoRoutes = require("./routes/readToDoRoutes");
const deleteToDoRoutes = require("./routes/removeToDoRoute");

//need proper implementation
const isLoggedIn = require("./middleware/isLoggedIn");

const loginRoutes = require("./routes/loginRoute");

const router = express.Router();
// login
router.post("/login", isLoggedIn, loginRoutes);
// read
router.get("/todos", isLoggedIn, readToDoRoutes);
// create
router.post("/todos", isLoggedIn, createToDoRoutes);
// udpate
router.put("/todos/:id", isLoggedIn, updateToDoRoutes);
// delete
router.delete("/todos/:id", isLoggedIn, deleteToDoRoutes);

module.exports = router;
