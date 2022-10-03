var todo = require('../model/model');

const getTodo = (req, res) => {
  res.render("index", { todos: todo });
  console.log(todo);
};

const newTodo = (req, res) => {
  todo.push(req.body);
  res.redirect("/");
};

module.exports = {
  getTodo,
  newTodo,
};
