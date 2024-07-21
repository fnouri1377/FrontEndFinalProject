import '../App.css';
import Header from './Header';
import Nav from './Nav';

function BookingPage() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div>
                <h1>Booking Page for Little Lemon Restaurant</h1>
            </div>
        </>
    );
}

export default BookingPage;