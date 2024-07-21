import '../App.css';
import Header from './Header';
import Nav from './Nav';

function ReservationsPage() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div>
                <h1>Your Reservations in Little Lemon Restaurant</h1>
            </div>
        </>
    );
}

export default ReservationsPage;