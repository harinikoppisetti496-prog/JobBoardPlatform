import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>JobBoard Platform</h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Register
        </Link>

        <Link
          to="/jobs"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Jobs
        </Link>
        <Link
  to="/add-job"
  style={{
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
  }}
>
  Add Job
</Link>
      </div>
    </nav>
  );
}

export default Navbar;