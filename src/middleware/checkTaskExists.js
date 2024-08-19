const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/tasks.json");
let db = require(dbPath);

const checkTaskExists = (req, res, next) => {
  const taskId = parseInt(req.params.id);
  const task = db.tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  req.task = task;
  next();
};

module.exports = checkTaskExists;
