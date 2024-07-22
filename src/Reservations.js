import React, {useReducer} from 'react';
import DateTimePicker from 'react-datetime-picker';
import './Reservations.css';

export default function ReserveForm() {
    const atStart = ({
        location: 1,
        DateTimePicker: null,
        partySize: 1,
        seating: true,
        comment: "",
        firstName: "",
        email: "",
        phoneNumber: "",
    });

const reducer = (state = atStart, { type, payload }) => {
  switch (type) {

  case 'handleEntry':
    return { ...state, ...payload  }

  default:
    return atStart;
  }
}

const handleEntry = (e) => {
    dispatch({type: 'input', payload: e.currentValue.value});
};

const [seating, toggleSeating] = useReducer((state) => {
    return !state;
}, false);

const [showValues, dispatch] = useReducer(reducer, atStart);

return (
        <form>
            <h1>Reserve a Table at Little Lemon</h1>
            <div className="form-field">
            <label>Choose Your Location:<br />
            <select
                name="location"
                value={showValues.location}
                onChange={handleEntry}
                defaultValue="select your location:">
                <option id="1">123 Sesame St., Chicago, IL, 23456</option>
                <option id="2">100 Capulet Dr., New York, NY, 10012</option>
                <option id="3">124 Lily Way, Wayfield, PA, 12345</option>
            </select>
            </label>
            </div>
            <div className="form-field">
               <label>Select a Date and Time:<br />
               <DateTimePicker
                name="datetime"
                onChange={handleEntry}
                value={showValues.datetime} />
               </label>
            </div>
            <div className="form-field">
                <label>Party Size (including children):< br />
                <input
                    type="number"
                    min="1"
                    max="15"
                    onChange={handleEntry}
                    value={showValues.partySize}
                    placeholder= "2" />

                </label>
            </div>
            <div className="form-field">
            <label>Would you prefer indoor seating?< br />
                <button
                onClick={toggleSeating}
                value={showValues.seating}>
                {seating ? "Yes, please!" : "Either is fine"}</button>
                </label></div>
            <div className="form-field">
                <label>Special Directions:<br />
                <textarea
                    type="textarea"
                    name="comment"
                    onChange={handleEntry}
                    value={showValues.comment} />
                </label>
            </div>
            <button>Continue</button>
        </form>
    )
}