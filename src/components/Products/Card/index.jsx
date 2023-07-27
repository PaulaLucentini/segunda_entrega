/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import './styles.css'

const Card = ({id, img, name, category, description, price, stock, onAddToCard})=>{
    return(
        <div key={id} className='card'>
            <img className='cardImage' src={img} alt={name}/>
            <div className='cardContent'>
                <h3 className='cardName'>{name}</h3>
                <p className='cardCategory'>{category}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardprice'>USD {price}</p>
                <p className='cardStock'>{stock} left</p>
                <div className='cardActions'>
                    <button onClick={onAddToCard} className='cardButton'>Add to cart</button>
                </div>

            </div>
        </div>
    )
}
export default Card;
