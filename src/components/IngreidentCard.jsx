import './IngreidentCard.css'

function IngreidentCard() {
    return (
        <div className='ingredientCard'>
            <div>
                <h2>Dry Ingredients</h2>
                <ul>
                    <li>Almond flour</li>
                    <li>Powdered sugar</li>
                    <li>Sugar</li>
                </ul>
            </div>
            
            <div>
                <h2>Wet Ingredients</h2>
                <ul>
                    <li>2 eggs</li>
                    <li>Vanilla extract</li>
                    <li>Gel food dye</li>
                </ul>
            </div>
            
        </div>
    )
}

export default IngreidentCard;