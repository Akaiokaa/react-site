import './Header.css'
import macaron from './../assets/macaron.png'
function Header() {
    return (
        <header className='site-header'>
            <div className="logo-container">
                <img className="macaron" src={macaron} alt="macaron" />
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