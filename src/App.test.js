import { getByLabelText, render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes, fetchAPI } from './App';
import { MemoryRouter } from 'react-router-dom';

test('Renders Some Text in BookingForm', async () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']} dispatch={() => { }} />
    </MemoryRouter>
  );
  const textElement = screen.getByText("Choose date");
  expect(textElement).toBeInTheDocument();
});

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

// test form validation
describe('BookingForm', () => {

  // test date input
  // HTML5 validation
  it('has required attribute on date input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const dateInput = getByLabelText(container, 'Choose date');
    expect(dateInput.required).toBe(true);
  });

  // JS validation
  it('validates date input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const dateInput = getByLabelText(container, 'Choose date');

    // Test invalid date input
    fireEvent.blur(dateInput);
    expect(container.querySelector('.validation-error')).toHaveTextContent('Please select a date!');

    // Test valid date input
    fireEvent.change(dateInput, { target: { value: '2023-03-01' } });
    fireEvent.blur(dateInput);
    expect(container.querySelector('.validation-error')).toBeNull();
  });

  // test time input
  // HTML5 validation
  it('has required attribute on time input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const timeInput = getByLabelText(container, 'Choose time');
    expect(timeInput.required).toBe(true);
  });

  //JS validation
  it('validates time input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const timeInput = getByLabelText(container, 'Choose time');

    // Test invalid time input
    fireEvent.blur(timeInput);
    expect(container.querySelector('.validation-error')).toHaveTextContent('Please select a time!');

    // Test valid time input
    fireEvent.change(timeInput, { target: { value: '12:00' } });
    fireEvent.blur(timeInput);
    expect(container.querySelector('.validation-error')).toBeNull();
  });

  // test number of guests input
  // HTML5 validation
  it('has required attribute on number of guests input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const guestsInput = getByLabelText(container, 'Number of guests');
    expect(guestsInput.required).toBe(true);
  });

  //JS validation
  //JS validation
  it('validates number of guests input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const guestsInput = getByLabelText(container, 'Number of guests');

    // Test invalid number of guests input
    fireEvent.blur(guestsInput);
    expect(container.querySelector('.validation-error')).toHaveTextContent('Please enter a valid number of guests!');

    // Test valid number of guests input
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.blur(guestsInput);
    expect(container.querySelector('.validation-error')).toBeNull();
  });

  // test occasion input
  // HTML5 validation
  it('has required attribute on occasion input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const occasionInput = getByLabelText(container, 'Occasion');
    expect(occasionInput.required).toBe(true);
  });

  //JS validation
  it('validates occasion input', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    const dispatch = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );
    const occasionInput = getByLabelText(container, 'Occasion');

    // Test invalid occasion input
    fireEvent.blur(occasionInput);
    expect(container.querySelector('.validation-error')).toHaveTextContent('Please select an occasion!');

    // Test valid occasion input
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
    fireEvent.blur(occasionInput);
    expect(container.querySelector('.validation-error')).toBeNull();
  });
});