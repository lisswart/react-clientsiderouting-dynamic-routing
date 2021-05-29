import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <div className="nav-link"><NavLink exact to="/">Dictionary</NavLink></div>
            <div className="nav-link"><NavLink exact to="/poetry-collection"><pre>Poetry Collection</pre></NavLink></div>
            <div className="nav-link"><NavLink exact to="/hangman">Hangman</NavLink></div>
        </nav>
    )
}

export default NavBar;
