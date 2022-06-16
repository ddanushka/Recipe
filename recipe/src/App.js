import './assets/styles/common.scss';
import {BrowserRouter} from 'react-router-dom'
import Header from './views/layouts/Header';
import Body from './views/layouts/Body';

function App() {
  return (
    <div className="recipe">
      <BrowserRouter>
        <Header/>
        <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
