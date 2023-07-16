const mongoose = require("mongoose");
const task_schema = new mongoose.Schema(
  {
    task_name: { type: String },
    task_description: { type: String },
    task_date: { type: Date },
    task_status: {
      type: String,
      enum: ["To Do", "In Progress", "Complete"],
    },
  },
  { timestamp: true }
);
const tasks = mongoose.model("tasks", task_schema);
module.exports = tasks;
