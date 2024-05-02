import React from 'react'

const ReserveButton = () => {
    const handleButtonClick = () => {
        const customerName = prompt('Enter your name:');
        const customerEmail = prompt('Enter your email:');
        const customerPhone = prompt('Enter your phone number:');

        alert(customerName + ' ' + customerEmail + ' ' + customerPhone);
    };

  return (
    <button onClick={handleButtonClick}>Reserve</button>
  )
}

export default ReserveButton