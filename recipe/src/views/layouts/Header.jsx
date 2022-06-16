import SearchBox from "../components/SearchBox";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <section className="header">
      <span onClick={() => navigate("/")} className="logo">
        LOGO
      </span>
      <SearchBox />
    </section>
  );
}

export default Header;
