
import { Link } from 'react-router-dom';


function Nav() {
  const navStyle = {
    color: 'white'
  };  

  return (
    <div>
      <nav>
        <h3>BeerBuddy</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Browse Beers</li>
          </Link>
          <Link style={navStyle} to="/FavoriteBeers">
            <li>Favorite Beers</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;