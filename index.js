const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { connectDatabase } = require("./conncetion/connect");
const TASK_MODEL = require("./models/task");
app.use(express.json());
app.post("/api/task", async (req, res) => {
  try {
    const task = {
      task_name: req.body.taskname,
      task_description: req.body.taskdescription,
      task_date: req.body.taskdate,
    };
    const task1 = new TASK_MODEL(task);
    await task1.save();
    return res.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/task", async (req, res) => {
  try {
    const sortedtask = await TASK_MODEL.find().sort({ createdAt: -1 });
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is connected on port ", PORT);
});
