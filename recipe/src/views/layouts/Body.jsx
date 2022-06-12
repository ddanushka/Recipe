import CategoryList from "../pages/CategoryList";
import List from "../pages/List";
import Details from "../pages/Details";

function Body() {
  return (
    <section className="body">
      <div className="body__container">
      <CategoryList/>
      <List/>
      <Details/>
      </div>
    </section>
  );
}

export default Body;
