import Button from './Button';
import mainFood from '../Icon Assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Introduction() {
    const navigate = useNavigate();
    const goToBookingPage = () => {
        navigate('/booking');
    };

    return (
        <div className='intro'>
            <div className='intro-left'>
                <h1 className='intro-h1'>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button onClick={goToBookingPage} buttonText='Reserve a Table' />
            </div>
            <div className='intro-right'>
                <img className='intro-image' alt='Food' src={mainFood} />
            </div>
        </div>
    );
}

export default Introduction;