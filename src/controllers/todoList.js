const { todoListDB } = require("../database")
const { nanoid } = require("nanoid")

const todoListControllers = {
  getAlltodoList: (req, res) => {
    if (!todoListDB.length) {
      res.status(404).json({
        message: "No posts found",
      });
      return;
    }

    res.status(200).json({
      message: "Get todos",
      result: todoListDB,
    });
  },
  patchTodoList: (req, res) => {
    const todoId = req.params.id;
    const editStatus = req.body

    const findIndex = todoListDB.findIndex((val) => {
      return val.id == todoId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: "Employee not found",
      });
      return;
    }

    todoListDB[findIndex] = {
      ...todoListDB[findIndex],
      ...editStatus,
    };

    res.status(200).json({
      result: todoListDB[findIndex],
    });
  },
  deleteTodo: (req, res) => {
    const todoId = req.params.id;

    const findIndex = todoListDB.findIndex((val) => {
      return val.id == todoId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: "Todo not found",
      });
      return;
    }

    todoListDB.splice(findIndex, 1);

    res.status(200).json({
      message: "Deleted Todo",
    });
  },
  addTodo: (req, res) => {
    const newTodo = req.body
    console.log(newTodo);

    if(!newTodo) {
      req.status(400).json({
        message: "todo action is required"
      })
      return
    }

    newTodo.id = nanoid()

    todoListDB.push(newTodo)

    res.status(201).json({
      message: "added new to do",
      result: newTodo
    })

  }
};

module.exports = todoListControllers