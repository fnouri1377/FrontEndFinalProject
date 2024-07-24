import '../App.css';
import { Link } from 'react-router-dom';
import Restaurant from '../Icon Assets/restaurant.jpg';

function Footer(props) {
    return (
        <footer>
            <div className="footer-item">
                <img className="footer-image" alt="Restaurant" src={Restaurant} />
            </div>

            <div className="footer-item">
                <h3>Doormat Navigation</h3>
                <ul className="footer-links-list">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/menu'>Menu</Link>
                    </li>
                    <li>
                        <Link to='/reservations'>Reservations</Link>
                    </li>
                    <li>
                        <Link to='/order-online'>Order Online</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-item">
                <h3>Contact</h3>
                <p>California</p>
                <p>+12345678910</p>
                <p>LittleLemon@yahoo.com</p>
            </div>

            <div className="footer-item">
                <h3>Social Media Links</h3>
                <p>California</p>
                <p>+12345678910</p>
                <p>LittleLemon@yahoo.com</p>
            </div>
        </footer>
    );
}

export default Footer;