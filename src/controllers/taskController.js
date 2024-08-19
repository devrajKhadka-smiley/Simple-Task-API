const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/tasks.json");
let db = require(dbPath);

const saveToDb = () => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

exports.getAllTasks = (req, res) => {
  res.status(200).json(db.tasks);
};

exports.createTask = (req, res) => {
  const newTask = req.body;
  newTask.id = db.tasks.length + 1;
  db.tasks.push(newTask);
  saveToDb();
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const index = db.tasks.findIndex(t => t.id == req.params.id);
  if (index !== -1) {
    db.tasks[index] = req.body;
    db.tasks[index].id = parseInt(req.params.id); 
    saveToDb();
    res.status(200).json(db.tasks[index]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.partialUpdateTask = (req, res) => {
  const task = req.task;
  if (req.body.status) {
    task.status = req.body.status;
  }
  saveToDb();
  res.status(200).json(task);
};

exports.deleteTask = (req, res) => {
  db.tasks = db.tasks.filter(t => t.id != req.params.id);
  saveToDb();
  res.status(204).end();
};

exports.getTasksByStatus = (req, res) => {
  const { status } = req.query;

  if (!status) {
    return res.status(400).json({ message: "Status query parameter is required" });
  }

  const filteredTasks = db.tasks.filter(task => task.status === status);

  if (filteredTasks.length === 0) {
    return res.status(404).json({ message: "No tasks found with the specified status" });
  }

  res.status(200).json(filteredTasks);
};
