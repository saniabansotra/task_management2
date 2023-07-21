const mongoose = require("mongoose");
const task_schema = new mongoose.Schema(
  {
    taskname: { type: String },
    taskdescription: { type: String },
    taskdate: { type: Date },
    taskstatus: {
      type: String,
      enum: ["To Do", "In Progress", "Complete"],
    },
  },
  { timestamp: true }
);
const tasks = mongoose.model("tasks", task_schema);
module.exports = tasks;
