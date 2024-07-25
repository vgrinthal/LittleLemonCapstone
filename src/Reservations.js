import React, {useReducer} from 'react';
import './Reservations.css';
import confirm from './ConfirmReserve.js';

export default function ReserveForm() {
    const atStart = ({
        location: 1,
        DateTimePicker: "",
        partySize: 1,
        seating: null,
        firstName: "",
        email: "",
        phoneNumber: "",
        comment: "",
    });

const reducer = (state = atStart, action) => {
  switch (action.type) {
  case "location":
    return {...state, location: action.payload};
  case "datetime":
    return {...state, datetime: action.payload};
  case "number":
    return {...state, party: action.payload};
  case "radio":
    return {...state, indoors: action.payload};
  case "firstName":
    return {...state, firstName: action.payload};
  case "email":
    return {...state, email: action.payload};
  case "phoneNumber":
    return {...state, phoneNumber: action.payload};
  case "textarea":
    return {...state, comment: action.payload};
  default:
    return Error("Sorry, there seems to be an error with our form. Please call your local Little Lemon for reservation details.");
  }
};

function handleChange(event) {
    dispatch({type: 'input', payload: event.target.value});
};

function handleSubmit(event) {
  event.preventDefault()
  return confirm(event);
};

const [showValues, dispatch] = useReducer(reducer, atStart);

return (
        <form>
            <h1>Reserve a Table at Little Lemon</h1>
            <div className="form-field">
            <label>Choose Your Location:<br />
            <select
                name="location"
                value={showValues.location}
                onChange={handleChange}
                defaultValue="select your location:">
                <option id="1">123 Sesame St., Chicago, IL, 23456</option>
                <option id="2">100 Capulet Dr., New York, NY, 10012</option>
                <option id="3">124 Lily Way, Wayfield, PA, 12345</option>
            </select>
            </label>
            </div>
            <div className="form-field">
               <label>Select a Date and Time:<br />
               <input
                type="datetime-local"
                format={"dd-MMMM | hh:mm a"}
                name="datetime"
                onChange={handleChange}
                value={showValues.datetime} />
               </label>
            </div>
            <div className="form-field">
                <label>Party Size (including children):< br />
                <input
                    name="party"
                    type="number"
                    min="1"
                    max="15"
                    onChange={handleChange}
                    value={showValues.partySize}
                    placeholder= "2" />
                </label>
            </div>
            <div className="form-field">
            <label>Would you prefer indoor seating?< br />
                <input
                name="indoors"
                type="radio"
                onChange={handleChange}
                value={showValues.seating === true}
                />Yes, please!<br />
                <input
                name="indoors"
                type="radio"
                onChange={handleChange}
                value={showValues.seating === false}
                />Either is fine.
                </label></div>
                <div className="form-field">
                <label>First Name:<br />
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={showValues.firstName}
                    placeholder="John" />
                </label>
            </div>
            <div className="form-field">
                <label>Email Address:<br />
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={showValues.email}
                    placeholder="email@email.com" />
                </label>
            </div>
            <div className="form-field">
                <label>Phone Number:<br />
                <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={showValues.phoneNumber}
                    placeholder="(123) 456-7890" />
                </label>
            </div>
            <div className="form-field">
                <label>Special Directions:<br />
                <textarea
                    type="textarea"
                    name="comment"
                    onChange={handleChange}
                    value={showValues.comment} 
                    placeholder="Include any allergies or special requests here for your reservation." />
                </label>
            </div>
            <button type="submit" id="continue" onClick={handleSubmit}>Continue</button>
        </form>
    )
}