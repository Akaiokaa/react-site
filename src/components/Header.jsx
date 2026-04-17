import './Header.css'

function Header() {
    return (
        <header className='site-header'>
            <span>Baking Macarons</span>

            <ul className='nav-links'>
                <li>Recipes</li>
                <li>Tips</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}
export default Header;