import SearchBox from "../components/SearchBox";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <section className="header">
      <button onClick={() => navigate(-1)}>back</button>
      <h1>sample header</h1>
      <SearchBox />
    </section>
  );
}

export default Header;
