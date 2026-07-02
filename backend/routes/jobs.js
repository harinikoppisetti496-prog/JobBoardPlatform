import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add new job
router.post("/", async (req, res) => {
  const { title, company, location } = req.body;

  const job = new Job({
    title,
    company,
    location,
  });

  await job.save();

  res.json({
    message: "Job Added Successfully ✅",
  });
});

export default router;