import React from 'react'

const ReserveButton = () => {
  const handleButtonClick = () => {
    const customerName = prompt('Enter your name:');
    const customerEmail = prompt('Enter your email:');
    const customerPhone = prompt('Enter your phone number:');

    const reservation = {
      name: customerName,
      email: customerEmail,
      phoneNum: customerPhone
    };
    // Send the reservation data to the backend
    fetch('http://localhost:8080/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit reservation');
        }
        return response.json();
      })
      .then(data => {
        alert('Reservation submitted successfully!');
        console.log(data); // Log any response from the backend
      })
      .catch(error => {
        alert('Failed to submit reservation: ' + error.message);
      });
  };


  return (
    <button onClick={handleButtonClick}>Reserve</button>
  )
}

export default ReserveButton