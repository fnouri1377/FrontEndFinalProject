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
    const [errors, setErrors] = useState({});

    const handleDateChange = (event) => {
        setErrors((prevErrors) => ({ ...prevErrors, date: null }));
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

    const formIsValid = !errors.date && !errors.time && !errors.guests && !errors.occasion && date && time && numberOfPeople && occasion;

    return (
        <form className="reserve-form" onSubmit={handleSubmit}>

            <div className="form-item">
                <label className="form-label" htmlFor="res-date" id="res-date-label">Choose date</label>
                <input
                    className="form-input"
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                    onBlur={() => {
                        if (!date) {
                            setErrors((prevErrors) => ({ ...prevErrors, date: 'Please select a date!' }));
                        }
                    }}
                    aria-describedby="res-date-label"
                    aria-required="true"
                />
                {errors.date && <div className="validation-error">{errors.date}</div>}
            </div>

            <div className="form-item">
                <label className="form-label" htmlFor="res-time" id="res-time-label">Choose time</label>
                <select
                    className="form-input"
                    id="res-time"
                    value={time}
                    onChange={(event) => {
                        setTime(event.target.value);
                        setErrors((prevErrors) => ({ ...prevErrors, time: null }));
                    }}
                    required
                    onBlur={() => {
                        if (!time) {
                            setErrors((prevErrors) => ({ ...prevErrors, time: 'Please select a time!' }));
                        }
                    }}
                    aria-describedby="res-time-label"
                    aria-required="true"
                >
                    {availableTimes.map((item, index) => {
                        return (
                            <option value={item} key={index}>{item}</option>
                        );
                    })}
                </select>
                {errors.time && <div className="validation-error">{errors.time}</div>}
            </div>

            <div className="form-item">
                <label className="form-label" htmlFor="guests" id="guests-label">Number of guests</label>
                <input
                    className="form-input"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={numberOfPeople}
                    onChange={(event) => {
                        setNumberOfPeople(event.target.value);
                        setErrors((prevErrors) => ({ ...prevErrors, guests: null }));
                    }
                    }
                    required
                    onBlur={() => {
                        if (numberOfPeople < 1) {
                            setErrors((prevErrors) => ({ ...prevErrors, guests: 'Please enter a valid number of guests!' }));
                        }
                    }}
                    aria-describedby="guests-label"
                    aria-required="true"
                />
                {errors.guests && <div className="validation-error">{errors.guests}</div>}
            </div>

            <div className="form-item">
                <label className="form-label" htmlFor="occasion" id="occasion-label">Occasion</label>
                <select
                    className="form-input"
                    id="occasion"
                    value={occasion}
                    onChange={(event) => {
                        setOccasion(event.target.value);
                        setErrors((prevErrors) => ({ ...prevErrors, occasion: null }));
                    }}
                    required
                    onBlur={() => {
                        if (!occasion) {
                            setErrors((prevErrors) => ({ ...prevErrors, occasion: 'Please select an occasion!' }));
                        }
                    }}
                    aria-describedby="occasion-label"
                    aria-required="true"
                >
                    <option value="" aria-selected="true"></option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {errors.occasion && <div className="validation-error">{errors.occasion}</div>}
            </div>

            <div className="reserve-button-div">
                <input className="reserve-button" type="submit" value="Submit" disabled={!formIsValid} aria-label="Submit Reservation" />
            </div>
            <div className="empty-green-box"></div>
        </form >
    );
}

export default BookingForm;