import Logo from '../Icon Assets/Logo.svg';
import '../App.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Little Lemon Logo" id="header-logo" />
        </header>
    );
}

export default Header;