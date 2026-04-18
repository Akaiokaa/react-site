import './Header.css'
import macaron from './../../images/macaron.png'
function Header() {
    return (
        <header className='site-header'>
            <div className="logo-container">
                <img className="macaron" src={macaron} alt="An drawing of two macaron cookies stacked on top of each other" />
                <span>Macarons</span>
            </div>
            

            <ul className='nav-links'>
                <li>Recipes</li>
                <li>Tips</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}
export default Header;