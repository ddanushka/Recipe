import CategoryList from "../pages/CategoryList";
import List from "../pages/List";
import Details from "../pages/Details";
import SearchResult from "../pages/SearchResult";
import { Routes, Route, Link } from "react-router-dom";

function Body() {
  return (
    <section className="body">
      <div className="body__container">
        <Routes>
          <Route path="/" caseSensitive={false} element={<CategoryList />} />
          <Route path="/category/:name" caseSensitive={true} element={<List />} />
          <Route path="/details/:id" caseSensitive={true} element={<Details />} />
        </Routes>
      </div>
    </section>
  );
}

export default Body;
