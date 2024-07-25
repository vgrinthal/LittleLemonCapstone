 function confirm(props) {
    const yourReservation = props.data.map((showValues) => {
      return (<div className="confirm-details">
        <b>Your Reservation:</b>
        <ul><li>Location: Little Lemon - {showValues.location}"</li>
        <li>Party of: {showValues.party}</li>
        <li>Would you prefer indoor seating?: {showValues.seating}</li>
        <li>First Name: {showValues.firstName}</li>
        <li>Email Address: {showValues.email}</li>
        <li>Phone Number: {showValues.phoneNumber}</li>
        <li>Special Directions: {showValues.comment}</li>
      </ul></div>
      );
  });
  return {yourReservation};
}
export default confirm;