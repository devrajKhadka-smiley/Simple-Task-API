const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const validateTask = require("../middleware/validateTask");
const checkTaskExists = require("../middleware/checkTaskExists");

router.get("/tasks", taskController.getAllTasks);
router.get("/tasks/filter", taskController.getTasksByStatus);
router.post("/tasks", validateTask, taskController.createTask);
router.put("/tasks/:id", validateTask, checkTaskExists, taskController.updateTask);
router.patch("/tasks/:id", checkTaskExists, taskController.partialUpdateTask);
router.delete("/tasks/:id", checkTaskExists, taskController.deleteTask);

module.exports = router;
