import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX, FiSearch } from "react-icons/fi";

function SearchBox() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const searchText = (e) => {
    setText(e.target.value);
    e.target.value.length > 0
      ? navigate("/search/" + e.target.value)
      : navigate("/");
  };
  const clearSearch = () => {
    setText("");
    navigate("/");
  };

  return (
    <div className="search-bar">
      <FiSearch className="search-bar__icon" />
      <input placeholder="Search Recipes..." onChange={searchText} value={text} />
      <button className="close" onClick={clearSearch} disabled={!text && "disabled" }><FiX /></button>
    </div>
  );
}

export default SearchBox;
