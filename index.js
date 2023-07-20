const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { connectDatabase } = require("./connection/connect");
const TASK_MODEL = require("./models/task");
app.use(express.json());
app.post("/api/createTask", async (req, res) => {
  try {
    const newtask = {
      task_name: req.body.newtasktitle,
      task_description: req.body.newtaskdescription,
      task_date: req.body.newtaskduedate,
      taskstatus: req.body.taskstatus,
    };
    const task = new TASK_MODEL(newtask);
    await task.save();
    return res.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/task", async (req, res) => {
  try {
    const sortedtask = await TASK_MODEL.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is connected on port ", PORT);
});
