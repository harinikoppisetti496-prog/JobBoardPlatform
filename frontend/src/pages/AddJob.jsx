import { useState } from "react";

function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleAddJob = async () => {
    const res = await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        company,
        location,
      }),
    });

    const data = await res.json();

    alert(data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Job</h1>

      <input
        type="text"
        placeholder="Job Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Company Name"
        onChange={(e) => setCompany(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddJob}>
        Add Job
      </button>
    </div>
  );
}

export default AddJob;