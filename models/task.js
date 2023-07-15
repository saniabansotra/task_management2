const mongoose = require("mongoose");
const task_schema = new mongoose.Schema(
  {
    task_name: String,
    task_description: String,
    task_date: Date,
  },
  { timestamp: true }
);
const tasks = mongoose.model("tasks", task_schema);
module.exports = tasks;
