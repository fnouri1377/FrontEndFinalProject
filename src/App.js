import './App.css';
import HomePage from './Components/HomePage';
import BookingPage from './Components/BookingPage';
import AboutPage from './Components/AboutePage';
import MenuPage from './Components/MenuPage';
import ReservationsPage from './Components/ReservationsPage';
import OrderOnlinePage from './Components/OrderOnlinePage';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreekSalad from './Icon Assets/greek salad.jpg';
import Bruschetta from './Icon Assets/bruchetta.svg';
import LemonDessert from './Icon Assets/lemon dessert.jpg';
import Sarah from './Icon Assets/Sarah.avif';
import Isla from './Icon Assets/Isla.jpg';
import John from './Icon Assets/John.avif';
import Maggie from './Icon Assets/Maggie.jpg';
import { useReducer } from 'react';
import ConfirmedBooking from './Components/ConfirmedBooking';

const menuItems = [
  {
    title: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '12.98',
    imageSrc: GreekSalad,
  },
  {
    title: 'Bruchetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '5.99',
    imageSrc: Bruschetta,
  },
  {
    title: 'Lemon Dessert',
    description: 'This comes straight from grandma\'s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '5.00',
    imageSrc: LemonDessert,
  }
];

const testimonialsItems = [
  {
    rating: '5',
    name: 'Sarah',
    imageSrc: Sarah,
    reviewText: 'Test Review Text'
  },
  {
    rating: '5',
    name: 'Isla',
    imageSrc: Isla,
    reviewText: 'Test Review Text'
  },
  {
    rating: '5',
    name: 'John',
    imageSrc: John,
    reviewText: 'Test Review Text'
  },
  {
    rating: '5',
    name: 'Maggie',
    imageSrc: Maggie,
    reviewText: 'Test Review Text'
  }
];

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  // console.log(action);
  // if (new Date(action.date).getDay() === 0 || new Date(action.date).getDay() === 6) {
  //   return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  // }
  // else {
  //   return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  // }

  // return state;

  return fetchAPI(new Date(action.date));
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return updateTimes(state, action);
    default:
      return state;
  }
};

export default function App() {

  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage menuItems={menuItems} testimonialsItems={testimonialsItems} />}></Route>
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route path='/reservations' element={<ReservationsPage />}></Route>
        <Route path='/order-online' element={<OrderOnlinePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/confirm-booking' element={<ConfirmedBooking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default { App, initializeTimes };