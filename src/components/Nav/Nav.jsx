import SearchBar from "../SearchBar/SearchBar.jsx";
import Style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={Style.navContainer}>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">about</Link>
      <Link to="/home">Home</Link>
    </div>
  );
}
