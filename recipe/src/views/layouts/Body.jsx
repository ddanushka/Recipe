import CategoryList from "../pages/CategoryList";
import List from "../pages/List";
import Details from "../pages/Details";
import SearchResult from "../pages/SearchResult";
import { Routes, Route, Link } from "react-router-dom";

function Body() {
  return (
    <section className="body">
      <Routes>
        <Route path="/" caseSensitive={false} element={<CategoryList />} />
        <Route path="/category/:name" caseSensitive={true} element={<List />} />
        <Route path="/details/:id" caseSensitive={true} element={<Details />} />
        <Route
          path="/search/:keyword"
          caseSensitive={true}
          element={<SearchResult />}
        />
      </Routes>
    </section>
  );
}

export default Body;
