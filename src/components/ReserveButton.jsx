import React from 'react'

const ReserveButton = ({ data, onReservationSubmit }) => {
  const handleButtonClick = () => {

    const customerName = prompt('Enter your name:');
    const customerEmail = prompt('Enter your email:');
    const customerPhone = prompt('Enter your phone number:');

    const reservation = {
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
      product: data.name
      
    };

    console.log('Reservation data:', reservation);

    onReservationSubmit(reservation);

  };

  return (
    <button onClick={handleButtonClick}>Reserve</button>
  )
}

export default ReserveButton