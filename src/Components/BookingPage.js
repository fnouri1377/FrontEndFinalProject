import '../App.css';
import Header from './Header';
import Nav from './Nav';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <>
            <div className="header-nav">
                <Header />
                <Nav />
            </div>
            <div>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
        </>
    );
}

export default BookingPage;