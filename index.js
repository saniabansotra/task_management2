const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { connectDatabase } = require("./connection/connect");
const TASK_MODEL = require("./models/task");
app.use(express.json());
app.post("/api/createTask", async (req, res) => {
  try {
    const newtask = {
      taskname: req.body.newtasktitle,
      taskdescription: req.body.newtaskdescription,
      taskdate: req.body.newtaskduedate,
      taskstatus: req.body.taskstatus,
    };
    const task = new TASK_MODEL(newtask);
    await task.save();
    return res.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/gettasks", async (req, res) => {
  try {
    const data = await TASK_MODEL.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.delete("/api/deletetask/:id", async (req, res) => {
  try {
    const delete_task = await TASK_MODEL.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is connected on port ", PORT);
});
