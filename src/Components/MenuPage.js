import '../App.css';
import Header from './Header';
import Nav from './Nav';

function MenuPage() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div>
                <h1>Little Lemon Restaurant Menu</h1>
            </div>
        </>
    );
}

export default MenuPage;