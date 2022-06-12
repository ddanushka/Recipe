import './assets/styles/common.scss';
import Header from './views/layouts/Header';
import List from './views/pages/List';
import {BrowserRouter} from 'react-router-dom'
import CategoryList from './views/pages/CategoryList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CategoryList/>
        <Header/>
        <List/>
      </BrowserRouter>
    </div>
  );
}

export default App;
