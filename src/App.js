import './App.css';
import Nav from './components/Nav.js';
import FavoriteBeers from './FavoriteBeers.js';
import BrowseBeers from './BrowseBeers.js';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  



  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={BrowseBeers} />
          <Route path="/FavoriteBeers" component={FavoriteBeers} />
        </Switch>
      </div>
     
    </Router>

  );
}

export default App;
