import '../App.css';
import Header from './Header';
import Nav from './Nav';

function ConfirmedBooking() {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div className="empty-page-content">
                <h1>Your reservation has submitted successfully.</h1>
            </div>
        </>
    );
}

export default ConfirmedBooking;