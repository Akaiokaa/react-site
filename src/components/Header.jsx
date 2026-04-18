import './Header.css'

function Header() {
    return (
        <header className='site-header'>
            <div className="logo-container">
                <img className="macaron" src="images/macaron.png" alt="An drawing of two macaron cookies stacked on top of each other" />
                <span>Macarons</span>
            </div>
            

            <ul className='nav-links'>
                <li><a href="#Recipes">Recipes</a></li>
                <li><a href="#Tips">Tips</a></li>
                <li><a href="#Ingredients">Ingredients</a></li>
            </ul>
        </header>
    )
}
export default Header;