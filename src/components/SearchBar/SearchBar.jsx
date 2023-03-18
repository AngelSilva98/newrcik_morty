import { useState } from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input className={Style.barra} type="search" onChange={handleChange} />
      <button className={Style.btnSearch} onClick={() => props.onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
