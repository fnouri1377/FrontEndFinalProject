import Button from "./Button";
import MenuCard from './MenuCard';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function MenuSection(props) {
    const navigate = useNavigate();
    const goToMenuPage = () => {
        navigate('/menu');
    };

    return (
        <div className="menu-section">
            <div className="menu-section-h1-button">
                <div className="menu-section-left">
                    <h1 className="menu-section-h1">This weeks specials!</h1>
                </div>
                <div className="menu-section-right">
                    <Button className="menu-section-button" onClick={goToMenuPage} buttonText="Online Menu" />
                </div>
            </div>

            <div className="menu-section-cards">
                {props.menuItems.map(item => (
                    <MenuCard item={item} />
                ))}
            </div>
        </div >
    );
}

export default MenuSection;