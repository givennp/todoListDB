const express = require("express");
const router = express.Router();

const { todoListControllers } = require("../controllers");
// const requiresAuth = require("../middlewares/requiresAuth");
// const validateKey = require("../middlewares/validateKey");

router.get("/", todoListControllers.getAlltodoList);
router.patch("/:id", todoListControllers.patchTodoList)
router.delete("/:id", todoListControllers.deleteTodo)
router.post("/", todoListControllers.addTodo)

module.exports = router;
