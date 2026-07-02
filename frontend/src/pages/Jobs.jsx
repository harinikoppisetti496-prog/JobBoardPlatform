import { useEffect, useState } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Jobs</h1>

      {jobs.map((job, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>

          <button>Apply Now</button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;