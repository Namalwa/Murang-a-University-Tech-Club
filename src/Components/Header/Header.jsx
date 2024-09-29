import {Link} from 'react-router-dom'
import './Header.css';
    function HeaderNavigation(){
        return(
            <div className="header-navigation">
                <h1>MUT Tech Club</h1>
                <nav className="navigation-container">
                    <ul  className="navigation-list">
                        <li className="navigation-item"><Link to="/" className="header-link">Home</Link></li>
                        <li className="navigation-item"><Link to="/Leadership" className="header-link">Leadership</Link></li>
                        <li className="navigation-item"><Link to="/Track" className="header-link">Tracks</Link></li>
                        <li className="navigation-item"><Link to="/Events" className="header-link">Events</Link></li>
                    </ul>
                </nav>
                
            </div>
        )
    }
    function Header() {
        return(
            <header>
    <HeaderNavigation/>
            </header>
    
    
        )
}
export default Header;