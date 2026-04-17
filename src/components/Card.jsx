import './Card.css'

function Card ({step, title, description}){
    return (
        <div className='card'>
            <h1>{step} : {title} </h1>
            <p>{description}</p>
        </div>
    )
}

export default Card;