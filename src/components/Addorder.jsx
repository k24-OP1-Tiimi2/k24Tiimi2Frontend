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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setOrder({ ...order, [event.target.name]: event.target.value });
    };

    const addOrder = () => {
        props.saveOrder(order, props.params.data._links.self.href);
        handleClose();
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
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        value={order.email}
                        onChange={handleInputChange}
                        label="Email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="phone"
                        value={order.phone}
                        onChange={handleInputChange}
                        label="Phone"
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
