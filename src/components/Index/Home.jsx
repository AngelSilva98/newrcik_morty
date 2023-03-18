import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Este es el Home</h1>
      <button>
        <Link to="about">About</Link>
      </button>

      <NavLink
        to="form"
        style={({ isActive }) =>
          isActive ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        Form
      </NavLink>
    </div>
  );
};

export default Home;
