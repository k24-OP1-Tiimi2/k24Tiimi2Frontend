import React, { useState } from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogActions } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogTitle } from '@mui/material';


export default function Addorder(props) {
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState({
        name: '', email: '', phone: ''
    })

    const [errors, setErrors] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

        setErrors({});
    };

    const validateEmail = (email) => {
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let newErrors = { ...errors };

        // Validate email format
        if (name === 'email' && !validateEmail(value)) {
            newErrors.email = 'Invalid email format';
            
        } else {
            delete newErrors.email;
        }

        // Validate phone format
        if (name === 'phone' && !validatePhone(value)) {
            newErrors.phone = 'Invalid phone number (10 digits)';
            
        } else {
            delete newErrors.phone;
        }

        // Update order state and errors state
        setOrder({ ...order, [name]: value });
        setErrors(newErrors);
    };

    const addOrder = () => {
        // Check if there are any validation errors before saving the order
        if (Object.keys(errors).length === 0) {
            props.saveOrder(order, props.params.data._links.self.href);
            handleClose();
        } else {
            alert('Invalid order information! Please check email and phone number')
        }
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Add Order</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Order</DialogTitle>
                <DialogContent>
                <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        value={order.name}
                        onChange={handleInputChange}
                        label="Name"
                        placeholder='John Doe'
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        value={order.email}
                        onChange={handleInputChange}
                        label="Email"
                        placeholder='john.doe@mail.com'
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="phone"
                        value={order.phone}
                        onChange={handleInputChange}
                        label="Phone"
                        placeholder='0501231234'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addOrder}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
