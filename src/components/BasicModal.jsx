import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { DatePicker } from './DatePicker';

const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Button onClick={handleOpen}>Book Now</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box mb={2} borderRight={1} mr={2}>
                        <Typography variant="h6" mb={2} color="warning.main">
                            From
                        </Typography>
                        <DatePicker />
                    </Box>

                    <Box mb={2}>
                        <Typography variant="h6" mb={2} color="warning.main">
                            To
                        </Typography>
                        <DatePicker />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};
