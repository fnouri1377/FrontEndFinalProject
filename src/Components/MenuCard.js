import '../App.css';
import Delivery from '../Icon Assets/Delivery Icon.png';

function MenuCard(props) {
    return (
        <div className="menu-card">
            <img className='menu-card-img' alt={props.item.title} src={props.item.imageSrc} />
            <div className="menu-card-name-price">
                <h4>
                    {props.item.title}
                </h4>
                <p className="menu-card-price">
                    $ {props.item.price}
                </p>
            </div>
            <div className="menu-card-description">
                {props.item.description}
            </div>
            <div className="menu-card-delivery">
                <div>
                    Order a delivery
                </div>
                <img className="menu-card-delivery-img" alt="delivery" src={Delivery} />
            </div>
        </div>
    );
}

export default MenuCard;