import '../App.css';
import Header from './Header';
import Nav from './Nav';

function OrderOnlinePage() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div>
                <h1>Order Online Page for Little Lemon Restaurant</h1>
            </div>
        </>
    );
}

export default OrderOnlinePage;