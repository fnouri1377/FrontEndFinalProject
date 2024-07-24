import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes, fetchAPI } from './App';

// test('Renders Some Text in BookingForm', async () => {
//   render(<BookingForm availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']} dispatch={() => { }} />);
//   const textElement = screen.getByText("Choose date");
//   expect(textElement).toBeInTheDocument();
// });

// // test initializeTimes function - test 1
// test('initializeTimes function returns correct value', () => {
//   expect(initializeTimes()).toEqual(expect.arrayContaining(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']));
// });

// // test updateTimes function - test 1
// describe('updateTimes', () => {
//   it('should return the same value that is provided in the state', () => {
//     const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//     const action = { type: 'UPDATE_TIMES', date: '2023-03-12' };
//     const result = updateTimes(state, action);

//     expect(result).toEqual(state);
//   });
// });


// test initializeTimes function - test 2
test('initializeTimes function returns correct value', async () => {
  const result = await initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result).not.toHaveLength(0);
});

// test updateTimes function - test 2
describe('updateTimes', () => {
  it('should return the same value that is provided in the state', () => {
    const state = [];
    const action = { type: 'UPDATE_TIMES', date: '2024-07-24' };
    const result = updateTimes(state, action);

    expect(result).toEqual(fetchAPI(new Date(action.date)));
  });
});