import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="App">
      <input className="search-bar" onChange={searchText} value={text} />
      <button onClick={clearSearch}>clear</button>
    </div>
  );
}

export default SearchBox;
