import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const submitAPI = function (formData) {
    return true;
};

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: event.target.value });
    };

    const navigate = useNavigate();
    const goToConfirmedBookingPage = () => {
        navigate('/confirm-booking');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted with values: date=${date}, time=${time}, numberOfPeople=${numberOfPeople}, occasion=${occasion}`);
        const formData = {
            date: date,
            time: time,
            numberOfPeople: numberOfPeople,
            occasion: occasion
        };
        const success = submitAPI(formData);
        if (success) {
            console.log("Form submitted successfully.");
            goToConfirmedBookingPage();
        }
        else {
            console.log("Error submitting form.");
        }
    }

    return (
        <form className="reserve-form" onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(event) => setTime(event.target.value)}>
                {availableTimes.map((item, index) => {
                    return (
                        <option value={item} key={index}>{item}</option>
                    );
                })}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfPeople} onChange={(event) => setNumberOfPeople(event.target.value)} />
            <label htmlFor="occasion">Occasion</label>

            <select id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" />

        </form >
    );
}

export default BookingForm;